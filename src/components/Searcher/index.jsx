import React from 'react';
import { Stack, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const Searcher = () => {
  return (
    <Stack
      direction='row'
      sx={{
        width: '80%',
      }}>
      <TextField
        id='outlined-basic'
        label='GitHub User'
        placeholder='Octocat'
        variant='outlined'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <IconButton onClick={() => handleClick(setInputUser, inputUser)}>
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
