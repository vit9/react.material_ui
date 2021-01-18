import React, { useState, useRef, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Order from '../components/Order';
import Modal from '../components/Modal';

const mockData = [
  {
    name: 'Iphone 10',
    price: '14500 UAH',
    date: '21-12-2020',
    status: 'success',
    description: 'fdsfsdsf4ds',
    uri: 'https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/c/6/c6a910fe1b35878fdb2bb543f1470e02_1.jpg',
  },
  {
    name: 'Sony MX4 1000',
    price: '8700 UAH',
    date: '31-12-2020',
    status: 'reject',
    description: 'fdsfsdsfdgdfds',
  },
  {
    name: 'MI TV4',
    price: '14500 UAH',
    date: '21-12-2020',
    status: 'fail',
    description: 'fdsfsdsfd545454s',
  },
  {
    name: 'Puma Thunder Bolt',
    price: '3900 UAH',
    date: '12-01-2021',
    status: 'success',
    description: 'fdsfsddfgfdgfd454sfds',
  },
];

export default function Orders() {
  const [modal, setModal] = useState({
    open: false,
  });
  const ref = useRef();

  useEffect(() => {
    ref?.current?.focus();
  }, [modal.open]);

  return (
    <div>
      <div>
        <Modal modal={modal} setModal={setModal} modalRef={ref}/>
      </div>
      <Grid container spacing={3}>
        {mockData.map((item, key) => <Order key={key} {...item} setModal={setModal}/>)}
      </Grid>
    </div>
  );
}
