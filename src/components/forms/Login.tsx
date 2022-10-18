import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

import { useForm } from '../../hooks/form-validator/useForm';
import { HoverMover } from '../hover-mover/HoverMover';

const FORM_WIDTH = '320px';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const inputsContainerRef = React.useRef<HTMLDivElement>(null);

  // TODO: Specify any type
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Box p={3} width={FORM_WIDTH}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div ref={inputsContainerRef}>
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
        </div>
        {/*TODO: Disabled={isValid}*/}
        <HoverMover disabled={false} width={FORM_WIDTH}>
          <Button fullWidth type="submit" variant="contained">
            Login
          </Button>
        </HoverMover>
      </form>
    </Box>
  );
};
