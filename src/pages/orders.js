import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Order from '../components/Order';
import Modal from '../components/Modal';

const mockData = [
  {
    name: 'Iphone 10',
    price: '14500 UAH',
    date: '21-12-2020',
    status: 'success',
  },
  {
    name: 'Sony MX4 1000',
    price: '8700 UAH',
    date: '31-12-2020',
    status: 'success',
  },
  {
    name: 'MI TV4',
    price: '14500 UAH',
    date: '21-12-2020',
    status: 'fail',
  },
  {
    name: 'Puma Thunder Bolt',
    price: '3900 UAH',
    date: '12-01-2021',
    status: 'success',
  },
];

export default function Orders() {
  const [modal, setModal] = useState({
    open: false,
  });
  return (
    <div>
      <div>
        <Modal modal={modal} setModal={setModal}/>
      </div>
      <Grid container spacing={3}>
        {mockData.map((item) => <Order {...item} setModal={setModal}/>)}
      </Grid>
    </div>
  );
}
