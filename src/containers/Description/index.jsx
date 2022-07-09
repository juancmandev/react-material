import React from 'react';
import { Stack, Typography } from '@mui/material';
import { PaperInformation } from '../../components/PaperInformation';
import { LocationInformation } from '../../components/LocationInformation';

export const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  return (
    <>
      <Stack>
        {bio !== null ? (
          <Typography>{bio}</Typography>
        ) : (
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            ducimus.
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </>
  );
};
