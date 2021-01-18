import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useValidation from '../utils/validation';

import { signUpAction } from '../store/actions';
import CInput from '../components/TextField';
import CButton from '../components/Button';
import { signUpConfig } from '../configs/validationConfigs';
import { signUpStyles } from './styles';
import { languages } from '../languages';

const useStyles = signUpStyles();

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const signUpResultFail = useSelector(({ authReducer }) => authReducer['sign-up']);
  const language = useSelector(({ systemReducer }) => systemReducer.language);
  const [email, password, confirmPassword, fieldValues, changeHandler, startValidation] = useValidation(signUpConfig);

  const signUp = ([email, password], error) => {
    dispatch(signUpAction(error, { email: email.value, password: password.value }));
  };

  useEffect(() => {
    if (signUpResultFail.error || !signUpResultFail.success) return;
    history.push(`/${languages[language].link}`);
  }, [signUpResultFail]);

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {languages[language]['sign-up'].title}
          </Typography>
          <Grid container spacing={2}>
            <Grid item className={classes.fieldItem}>
              <CInput
                  type='email'
                  variant="outlined"
                  required={true}
                  fullwidth={true}
                  label={languages[language]['sign-up'].email}
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
                  label={languages[language]['sign-up'].password}
                  name='password'
                  error={!!password.errors}
                  errorText={password.errors}
                  value={fieldValues.password.value || ''}
                  changeHandler={changeHandler}
                />
            </Grid>
            <Grid item className={classes.fieldItem}>
                <CInput
                    type='adornments'
                    variant="outlined"
                    required={true}
                    fullwidth={true}
                    label={languages[language]['sign-up'].confirmPassword}
                    name='confirmPassword'
                    error={!!confirmPassword.errors}
                    errorText={confirmPassword.errors}
                    value={fieldValues.confirmPassword.value || ''}
                    changeHandler={changeHandler}
                />
            </Grid>
            <Grid item className={classes.fieldItem}>
              <CButton
                variant="contained"
                color="primary"
                submit={() => startValidation(signUp)}
                title={languages[language]['sign-in'].buttonTitle}
              />
            </Grid>
            <Grid item>
                <Link to={`${languages[language].link}/sign-in`}>
                  {languages[language]['sign-up'].linkTitle}
                </Link>
              </Grid>
          </Grid>
        </div>
      </Container>
  );
}
