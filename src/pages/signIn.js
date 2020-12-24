import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useValidation from '../utils/validation';

import CInput from '../components/TextField';
import CButton from '../components/Button';
import { languages } from '../languages';
import { signInConfig } from '../configs/validationConfigs';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fieldItem: {
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const params = useParams();

  const [email, password, fieldValues, changeHandler, startValidation] = useValidation(signInConfig);

  const signIn = (config, error) => {
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
            Sign in
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
              <CButton
                variant="contained"
                color="primary"
                submit={() => startValidation(signIn)}
                title='Sign in'
              />
            </Grid>
            <Grid item>
              <Link to='/sign-up'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
  );
}
