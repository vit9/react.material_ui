import React from 'react';

import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { languages } from '../languages';
import CInput from '../components/TextField';

export default function Profile() {
  const language = useSelector(({ systemReducer }) => systemReducer.language);

  return (
        <Grid container spacing={4}>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.surname}
                    variant="outlined"
                    name='surname'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.name}
                    variant="outlined"
                    name='name'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.patronymic}
                    variant="outlined"
                    name='patronymic'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.birth}
                    variant="outlined"
                    name='patronymic'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.sex}
                    variant="outlined"
                    name='birth'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.email}
                    variant="outlined"
                    name='patronymic'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
            <Grid item xs={3}>
                <CInput
                    type='text'
                    label={languages[language].profile.phone}
                    variant="outlined"
                    name='patronymic'
                    fullwidth={true}
                    // error={!!email.errors}
                    // errorText={email.errors}
                    // value={fieldValues.email.value || ''}
                    // changeHandler={changeHandler}
                />
            </Grid>
        </Grid>
  );
}
