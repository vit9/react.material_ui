import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar, Slide } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { alertAction } from '../store/actions';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CAlert() {
  const dispatch = useDispatch();
  const alert = useSelector(({ systemReducer }) => systemReducer.alert);

  const handleClose = () => {
    dispatch(alertAction({ open: false, severity: alert.severity, message: alert.message }));
  };

  return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={alert.open}
                autoHideDuration={3000}
                onClose={handleClose}
                // TransitionComponent={SlideTransition}
            >
                 <Alert onClose={handleClose} severity={alert.severity}>
                    {alert.message}
                </Alert>
            </Snackbar>
        </div>
  );
}
