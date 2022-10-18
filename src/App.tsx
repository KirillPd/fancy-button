import * as React from 'react';
import { Box } from '@mui/material';

import { LoginForm } from './components/forms/Login';

function App() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="relative"
    >
      <Box>
        <LoginForm />
      </Box>
    </Box>
  );
}

export default App;
