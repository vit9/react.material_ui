import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useValidation from '../utils/validation';

import { signInAction } from '../store/actions';
import CInput from '../components/TextField';
import CButton from '../components/Button';
import { languages } from '../languages';
import { signInConfig } from '../configs/validationConfigs';
import { signInStyles } from './styles';

const useStyles = signInStyles();

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const language = useSelector(({ systemReducer }) => systemReducer.language);
  const signInResultFail = useSelector(({ authReducer }) => authReducer['sign-in']);
  const [email, password, fieldValues, changeHandler, startValidation] = useValidation(signInConfig(language), language);

  const signIn = ([email, password], error) => {
    dispatch(signInAction(error, { email: email.value, password: password.value }));
  };

  useEffect(() => {
    if (signInResultFail.error || !signInResultFail.success) return;
    history.push(`/${languages[language].link}`);
  }, [signInResultFail]);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           {languages[language]['sign-in'].title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item className={classes.fieldItem}>
              <CInput
                    type='email'
                    variant="outlined"
                    required={true}
                    fullwidth={true}
                    label={languages[language]['sign-in'].email}
                    name='email'
                    error={!!email.errors}
                    errorText={email.errors}
                    value={fieldValues.email.value || ''}
                    changeHandler={changeHandler}
                />
            </Grid>
            <Grid item className={classes.fieldItem}>
              <CInput
                  type='adornments'
                  variant="outlined"
                  required={true}
                  fullwidth={true}
                  label={languages[language]['sign-in'].password}
                  name='password'
                  error={!!password.errors}
                  errorText={password.errors}
                  value={fieldValues.password.value || ''}
                  changeHandler={changeHandler}
              />
            </Grid>
            <Grid item className={classes.fieldItem}>
              <CButton
                variant="contained"
                color="primary"
                submit={() => startValidation(signIn)}
                title={languages[language]['sign-in'].buttonTitle}
              />
            </Grid>
            <Grid item>
              <Link to={`${languages[language].link}/sign-up`}>
                {languages[language]['sign-in'].linkTitle}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
  );
}
