import React, { useState } from 'react';
import {
  TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export default function TInput({
  type, value, label, variant, required, name, multiline, rows, error, errorText, changeHandler,
}) {
  const [showIcon, setShowIcon] = useState(false);

  const handleClickShowIcon = () => {
    setShowIcon(!showIcon);
  };

  const handleMouseDownIcon = (event) => {
    event.preventDefault();
  };

  return (
    <>
    {
        type === 'adornments'
          ? <FormControl variant={variant} required={required} fullWidth>
                <InputLabel>{label}</InputLabel>
                <OutlinedInput
                    type={showIcon ? 'text' : 'password'}
                //   value={values.password}
                    onChange={changeHandler}
                    name={name}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowIcon}
                            onMouseDown={handleMouseDownIcon}
                            edge="end"
                        >
                            {showIcon ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
                <FormHelperText>{errorText}</FormHelperText>
            </FormControl>
          : <TextField
                fullWidth
                variant={variant}
                required={required}
                name={name}
                label={label}
                value={value}
                multiline={multiline}
                rows={rows}
                error={error}
                helperText={errorText}
                onChange={changeHandler}
            />
        }
    </>
  );
}
