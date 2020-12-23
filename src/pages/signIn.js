import React from 'react';
import useValidation from 'react-custom-hook-validation';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Input from '../components/TextField';
import validationConfig from '../configs/validationConfigs/signInConfig';

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
  const [email, password, fieldValues, changeHandler, startValidation] = useValidation(validationConfig);

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
              <Input
                    type='email'
                    variant="outlined"
                    required={true}
                    label='email'
                    name='email'
                    error={!!email.errors}
                    errorText={email.errors}
                    value={fieldValues.email.value || ''}
                    onChange={changeHandler}
                />
            </Grid>
           <Grid item className={classes.fieldItem}>
           <Input
                  type='adornments'
                  variant="outlined"
                  required={true}
                  label='password'
                  name='password'
                  error={!!password.errors}
                  errorText={password.errors}
                  value={fieldValues.password.value || ''}
                  onChange={changeHandler}
              />
           </Grid>

          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => startValidation(signIn)}
          >
            Sign In
          </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
        </div>
      </Container>
  );
}
