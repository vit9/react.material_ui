import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import useValidation from '../utils/validation';

import CInput from '../components/TextField';
import CButton from '../components/Button';
import { signUpConfig } from '../configs/validationConfigs';
import { signUpStyles } from './styles';
import { languages } from '../languages';

const useStyles = signUpStyles();

export default function SignUp() {
  const classes = useStyles();
  const language = useSelector(({ systemReducer }) => systemReducer.language);
  const [email, password, confirmPassword, fieldValues, changeHandler, startValidation] = useValidation(signUpConfig);

  const signUp = (config, error) => {
    console.log(config, error);
  };

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
                    label='email'
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
                  label='password'
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
                    label='confirm password'
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
                title='Sign up'
              />
            </Grid>
            <Grid item>
                <Link to={`${languages[language].link}/sign-in`}>
                  {'Already have an account? Sign in'}
                </Link>
              </Grid>
          </Grid>
        </div>
      </Container>
  );
}
