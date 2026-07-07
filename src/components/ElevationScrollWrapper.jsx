import useScrollTrigger from '@mui/material/useScrollTrigger';
import React from 'react';

export function ElevationScrollWrapper(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
}
