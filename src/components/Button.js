import React from 'react';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    textTransform: 'none',
  },
}));

export default function CButton({
  title, submit, variant, color,
}) {
  const classes = useStyles();

  return (
        <Button
            fullWidth
            variant={variant}
            color={color}
            className={classes.button}
            onClick={submit}
        >
            {title}
        </Button>
  );
}
