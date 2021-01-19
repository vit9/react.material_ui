import React, { useState } from 'react';
import {
  TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search';

const icons = {
  password: {
    Icon1: () => <Visibility/>,
    Icon2: () => <VisibilityOff/>,
  },
  search: {
    Icon1: () => <SearchIcon/>,
  },
};

export default function CInput({
  type, value, label, variant, required, name, refCurrent, multiline, rows, error, errorText, changeHandler, fullwidth, iconsType, handleClick,
}) {
  const [showIcon, setShowIcon] = useState(false || iconsType?.show);

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
          ? <FormControl variant={variant} required={required} fullWidth={fullwidth}>
                <InputLabel error={error}>{label}</InputLabel>
                <OutlinedInput
                    type={showIcon ? 'text' : 'password'}
                    value={value}
                    onChange={changeHandler}
                    name={name}
                    error={error}
                    inputRef={refCurrent}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClick || handleClickShowIcon}
                            onMouseDown={handleMouseDownIcon}
                            edge="end"
                        >
                            {showIcon ? icons[iconsType?.itype]?.Icon1() : icons[iconsType?.itype]?.Icon2()}
                        </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={70}
                />
                <FormHelperText error={error}>{errorText}</FormHelperText>
            </FormControl>
          : <TextField
                fullWidth={fullwidth}
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
