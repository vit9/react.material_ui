import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchStrokeAction } from '../store/actions';
import CInput from './TextField';

const mockData = [
  'Anton',
  'Vit9',
  'Maksym',
  'Mo',
  'df',
  'fdd',
  'dfdf',
  'dfdf',
];

export default function SearchStroke({ searchRef }) {
  const dispatch = useDispatch();
  const [op, setOp] = useState({});
  const isOpen = useSelector(({ systemReducer }) => systemReducer.searchStroke);

  const blurHandler = (event) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    dispatch(searchStrokeAction(false));
  };

  const handleClick = () => {
    console.log(123);
  };

  return (
        <div className={`${isOpen ? 'searchStroke_container searchStroke_container-open' : 'searchStroke_container'}`} tabIndex={1} onBlur={blurHandler} ref={searchRef}>
            <div className='searchStroke_wrapper'>
                <CInput
                    variant='outlined'
                    label='Search'
                    fullwidth={true}
                    type={'adornments'}
                    iconsType={{ itype: 'search', show: true }}
                    handleClick={handleClick}
                />
            </div>
            <div className='searchStroke_content'>
                <div className='searchStroke_content-wrapper'>
                    {mockData.map((text) => (
                        <div
                            className='searchStroke_content-result'
                            onMouseOver={() => setOp({ ...op, [text]: 'opacity' })}
                            onMouseLeave={() => setOp({ ...op, [text]: '' })}
                        >
                        <p >{text}</p>
                        <div className={`${op[text] || ''} searchStroke_additionalContent`}>
                            <p>{text}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
}
