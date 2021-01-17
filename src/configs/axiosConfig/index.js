/* eslint-disable no-async-promise-executor */
/* eslint-disable no-underscore-dangle */

import axios from 'axios';

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

const config = {
  setConfiguration() {
    this.default();
    this._interceptorsRequest();
    this._interceptorsResponse();
  },
  default() {
    axios.defaults.baseURL = 'http://localhost:8081/api';
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common.accept = 'application/json';
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.defaults.timeout = 10000;
  },
  _getAccessToken() {
    return localStorage.getItem('accessToken');
  },
  _getRefreshToken() {
    return localStorage.getItem('refreshToken');
  },
  _setToken({ accessToken, refreshToken }) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  },
  _clearStorage() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  },
  _interceptorsRequest() {
    axios.interceptors.request.use(
      (config) => {
        const token = this.getAccessToken();
        if (token) {
          if (config.url === '/refreshToken') return config;
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );
  },
  _interceptorsResponse() {
    axios.interceptors.response.use((response) => {
      const { url } = response.config;
      if (url === '/verify') {
        const { accessToken, refreshToken } = response.data;
        this.setToken({ accessToken, refreshToken });
      }
      return response;
    }, async (error) => {
      const originalRequest = error.config;
      if (error.response.status === 401) {
        if (isRefreshing) {
          return new Promise(((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })).then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axios(originalRequest);
          }).catch((err) => Promise.reject(err));
        }
        isRefreshing = true;
        const refreshToken = this.getRefreshToken();
        return new Promise((async (resolve, reject) => {
          try {
            const payload = await axios.post('/refreshToken', { refreshToken });
            if (payload.status === 200) {
              this.setToken({ accessToken: payload.accessToken, refreshToken: payload.refreshToken });
              axios.defaults.headers.common.Authorization = `Bearer ${this.getAccessToken()}`;
              processQueue(null, payload.accessToken);
              resolve(axios(originalRequest));
            }
          } catch (err) {
            processQueue(err, null);
            // store.dispatch(actionLogout());
            reject(err);
          }
          isRefreshing = false;
        }));
      }

      return Promise.reject(error);
    });
  },
};

export default config;
