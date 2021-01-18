import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import CButton from './Button';

export default function Modal({ modal, setModal, modalRef }) {
  const blurHandler = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    setModal({ ...modal, open: false });
  };

  return (
        <div className={`${modal.open ? 'modal_container modal_container-open' : 'modal_container'}`} onBlur={blurHandler} ref={modalRef} tabIndex={1}>
            <div className='modal_wrapper'>
                <div className='modal_header'>
                    <div className='modal_close'>
                        <IconButton
                            style={{ padding: 2 }}
                            edge="end"
                            aria-haspopup="true"
                            onClick={() => setModal({ ...modal, open: false })}
                            color="inherit"
                        >
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className='modal_title'>
                        <Typography>
                            {modal.name}
                        </Typography>
                    </div>

                </div>
                <div className='modal_body'>
                    <div className='modal_image'>
                        <img src={modal.uri} style={{ maxWidth: '100%', height: 'auto' }}/>

                    </div>
                    <div className='description'>
                        <Typography> {modal.description}</Typography>
                    </div>
                </div>
                <div className='modal_footer'>
                    <div className='modal_actionButtons'>
                        <CButton
                            title={'Ok'}
                            submit={() => setModal({ ...modal, open: false })}
                            variant="contained"
                            color="primary"
                        />
                    </div>
                </div>
            </div>
        </div>
  );
}
