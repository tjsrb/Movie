import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function NotInteractiveTooltips() {
  return (
    <Tooltip title="Add">
      <Button>Not interactive</Button>
    </Tooltip>
  );
}