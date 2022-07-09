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
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: '16px',
      }}>
      <Grid item xs={12} lg={6}>
        <Stack direction='row' spacing={2}>
          <LocationOn />
          <Typography>
            {location !== null ? location : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction='row' spacing={2}>
          <Twitter />
          <Typography>
            {twitter_username !== null ? twitter_username : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction='row' spacing={2}>
          <Language />
          <a className='link' target='_blank' href={blog}>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {blog !== null ? blog : 'Not available'}
            </Typography>
          </a>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Stack direction='row' spacing={2}>
          <Business />
          <Typography>
            {company !== null ? company : 'Not available'}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};
