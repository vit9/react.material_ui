import { makeStyles } from '@material-ui/core';

export const orderStyles = () => makeStyles((theme) => ({

  container: {
    display: 'flex',
    justifyContent: 'space-between',
    border: '1px solid #000000a6',
    padding: '20px 10px',
    cursor: 'pointer',
    borderRadius: '10px',
  },
  paper: {
    padding: '20px 10px',
    cursor: 'pointer',
  },
  typography: {
    minWidth: '175px',
  },
}));
