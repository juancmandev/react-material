import React, { useState } from 'react';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Searcher = (props) => {
  const { inputUser, setInputUser } = props;

  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {};

  return (
    <Stack
      direction='row'
      sx={{
        width: '90%',
      }}>
      <TextField
        id='outlined-basic'
        label='GitHub User'
        placeholder='Octocat'
        variant='outlined'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton onClick={() => handleSubmit(setInputUser, inputUser)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          width: '90%',
        }}
      />
      <IconButton></IconButton>
    </Stack>
  );
};
