import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Language } from '@mui/icons-material';
import { Business } from '@mui/icons-material';

export const LocationInformation = (props) => {
  const { userState } = props;
  const { location, twitter_username, blog, company } = userState;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Stack>
          <LocationOn />
          <Typography>
            {location !== null ? location : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Twitter />
          <Typography>
            {twitter_username !== null ? twitter_username : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Language />
          <Typography>{blog !== null ? blog : 'Not available'}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack>
          <Business />
          <Typography>
            {company !== null ? company : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
