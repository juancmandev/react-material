import React from 'react';
import { Grid, CardMedia } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation';
import { Description } from '../Description';

export const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component='img' image={avatar_url} alt='GitHub User' />
      </Grid>
      <Grid item xs={9}>
        <PrincipalInformation userState={userState} />
      </Grid>
      <Description userState={userState} />
    </Grid>
  );
};
