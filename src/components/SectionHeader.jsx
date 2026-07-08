import React from 'react';
import { Typography } from '@mui/material';

/**
 * @param {import('@mui/material').TypographyProps} props 
 */
const SectionHeading = ({ children, ...props }) => {
  return (
    <Typography
      variant="h4"
      component="h2"
      fontSize={{ xs: '1.5rem', md: '2.125rem' }}
      gutterBottom
      {...props}
    >
      {children}
    </Typography>
  );
};

export default SectionHeading;
