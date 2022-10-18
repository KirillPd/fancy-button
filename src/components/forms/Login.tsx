import * as React from 'react';
import { Box, Button, TextField } from '@mui/material';

import { FormConfig, useForm } from '../../hooks/form-validator/useForm';
import { HoverMover } from '../hover-mover/HoverMover';

export enum InputName {
  USERNAME = 'username',
  PASSWORD = 'password',
}

const FORM_WIDTH = '320px';
const FORM_CONFIG: FormConfig = {
  validation: {
    required: true,
    rules: {
      [InputName.USERNAME]: (value) => value === 'yay',
    },
  },
};

export const LoginForm = () => {
  const { register, handleSubmit, isValid } = useForm(FORM_CONFIG);
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
              {...register(InputName.USERNAME)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              {...register(InputName.PASSWORD)}
            />
          </Box>
        </div>
        <HoverMover disabled={isValid} width={FORM_WIDTH}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={!isValid}
          >
            Login
          </Button>
        </HoverMover>
      </form>
    </Box>
  );
};
