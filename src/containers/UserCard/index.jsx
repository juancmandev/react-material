import React from 'react';
import { Grid, CardMedia, Stack } from '@mui/material';
import { PrincipalInformation } from '../../components/PrincipalInformation';
import { Description } from '../Description';

export const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '16px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}>
      <Grid item xs={12} sm={3}>
        <CardMedia
          component='img'
          image={avatar_url}
          alt='GitHub User'
          sx={{
            borderRadius: '50%',
          }}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Stack
          direction='column'
          spacing={1}
          sx={{
            width: '100%',
            margin: '16px 0',
          }}>
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  );
};
