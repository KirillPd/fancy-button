import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

import { useForm } from '../../hooks/form-validator/useForm';
import { HoverMover } from '../hover-mover/HoverMover';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  // TODO: Specify any type
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Box p={3} width="320px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            {...register('username')}
          />
        </Box>
        <Box mb={3}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            {...register('password')}
          />
        </Box>
        {/*TODO: Disabled={isValid}*/}
        <HoverMover disabled={false}>
          <Button fullWidth type="submit" variant="contained">
            Submit
          </Button>
        </HoverMover>
      </form>
    </Box>
  );
};
