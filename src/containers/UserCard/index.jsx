import React from 'react';
import { Grid, CardMedia } from '@mui/material';

export const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container>
      <Grid item xs={3}>
        <CardMedia component='img' image={avatar_url} alt='GitHub User' />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};
