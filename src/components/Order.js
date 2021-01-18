import React from 'react';

import { Grid, Typography, Paper } from '@material-ui/core';
import { orderStyles } from './styles';
import HighlightedText from './HighLigthedText';
import { order_status } from '../constants';

const useStyles = orderStyles();

export default function Order({
  name, price, date, status, setModal,
}) {
  const classes = useStyles();

  const transferDataHandler = () => {
    setModal({
      open: true,
      name,
      price,
      date,
      status,
    });
  };

  return (
        <Grid item xs={12} className={classes.root}>
            {/* <Paper elevation={3} className={classes.paper}> */}
            <div className='order_container' onClick={transferDataHandler}>
                <Typography component='p' className={classes.typography}>
                    {name}
                </Typography>
                <Typography component='p' className={classes.typography}>
                    {price}
                </Typography>
                <Typography component='p' className={classes.typography}>
                    {date}
                </Typography>
                <Typography component='p' className={classes.typography}>
                    <HighlightedText
                        text={'order status'}
                        bg={order_status[status]}
                    />
                </Typography>
            </div>
            {/* </Paper> */}
        </Grid>
  );
}
