import { Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

export const PaperInformation = (props) => {
  const { userState } = props;
  const { public_repos, followers, following } = userState;
  return (
    <Paper elevation={4}>
      <Grid
        container
        spacing={3}
        direction='row'
        sx={{ justifyContent: 'space-evenly', margin: '20px' }}>
        <Grid item xs={12} lg={4}>
          <Stack>
            <Typography variant='h5'>Repos</Typography>
            <Typography variant='h6'>{public_repos}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack>
            <Typography variant='h5'>Followers</Typography>
            <Typography variant='h6'>{followers}</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Stack>
            <Typography variant='h5'>Following</Typography>
            <Typography variant='h6'>{following}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
