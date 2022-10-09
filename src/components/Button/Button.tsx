import * as React from 'react';
import { IconButton as MUIIconButton } from '@mui/material';

import '../../styles/components/Button.css';

export function Button({ children, onClick }: any) {
  return (
    <MUIIconButton className="flash-c-btn" size="large" onClick={onClick}>
      {children}
    </MUIIconButton>
  );
}
