import React from 'react';
import { Box } from '@mui/material';

export default function BackgroundDecoration() {
  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          backgroundColor: 'primary.main',
          opacity: 0.15,
          filter: 'blur(120px)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '-5%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          backgroundColor: 'secondary.main',
          opacity: 0.1,
          filter: 'blur(100px)',
        }}
      />
    </Box>
  );
}
