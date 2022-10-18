import * as React from 'react';
import { Box } from '@mui/material';

interface Props {
  disabled: boolean;
  children: React.ReactNode;
}

export const HoverMover: React.FC<Props> = ({ disabled, children }) => {
  console.log(disabled);
  return <Box>{children}</Box>;
};
