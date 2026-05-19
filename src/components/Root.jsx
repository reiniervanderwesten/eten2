
import { Outlet } from 'react-router';
import { Navigation } from './Navigation';
import { Box } from '@chakra-ui/react';

export const Root = () => {
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
};
