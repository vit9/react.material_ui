import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { orderStyles } from './styles';
import HighlightedText from './HighLigthedText';
import { order_status } from '../constants';

const useStyles = orderStyles();

export default function Order({
  name, price, date, status, description, uri, setModal,
}) {
  const classes = useStyles();

  const transferDataHandler = () => {
    setModal({
      open: true,
      name,
      price,
      date,
      status,
      description,
      uri,
    });
  };

  return (
        <Grid item xs={12} className={classes.root}>
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
        </Grid>
  );
}
