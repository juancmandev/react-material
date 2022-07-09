import React from 'react';
import { Grid, Typography } from '@mui/material';

export const PrincipalInformation = (props) => {
  const { userState } = props;
  const { name, login, created_at } = userState;
  return (
    <>
      <Grid
        container
        direction='row'
        sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h5'>{name}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant='subtitle2'>{created_at}</Typography>
        </Grid>
      </Grid>
      <Typography variant='caption'>{`@${login}`}</Typography>
    </>
  );
};
