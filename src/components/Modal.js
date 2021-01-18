import React from 'react';
import { Typography } from '@material-ui/core';

export default function Modal({ modal, setModal }) {
  console.log(modal);
  return (
        <div className={`${modal.open ? 'modal_container op-1' : 'modal_container'}`}>
            <div className='modal_header'>
                <div className='modal_close'>
                    <button onClick={() => setModal({ ...modal, open: false })}> close</button>
                </div>
                <div className='modal_title'>
                    <Typography>
                        Modal title
                    </Typography>
                </div>

            </div>
            <div className='modal_body'>
                <div className='modal_image'>
                    <img src=''/>
                </div>
                <div className='description'>
                    <Typography> {modal.name}</Typography>
                </div>
            </div>
            <div className='modal_footer'>
                <div className='modal_actionButtons'>
                </div>
            </div>
        </div>
  );
}
