import React from 'react';

import { Box, Button, ButtonGroup, Container } from '@mui/material';
import { VerticalBarChart } from './components/VerticalBarChart';

export function App() {
  return (
    <Container>
      <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>Vertical Bar Chart</Button>
          <Button>Horizontal Bar Chart</Button>
          <Button>Multiaxis Line Chart</Button>
        </ButtonGroup>
        <VerticalBarChart />
      </Box>
    </Container>
  );
}
