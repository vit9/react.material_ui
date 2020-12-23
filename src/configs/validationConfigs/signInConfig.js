export default {
  email: {
    id: 0,
    title: 'email',
    maxLength: 50,
    value: null,
    required: true,
    regexp: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    errors: {
      maxLegnth: 'Email should be less than 50 symbols',
      value: 'This field can not be empty',
    },
  },
  password: {
    id: 1,
    title: 'password',
    maxLength: 30,
    value: null,
    required: true,
    errors: {
      maxLegnth: 'Password should be less than 30 symbols',
      value: 'This field can not be empty',
    },
  },
};
