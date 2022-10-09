import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from '@mui/material';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import PauseIcon from '@mui/icons-material/Pause';

import * as React from 'react';

import '../../styles/components/Card.css';
import { Button } from '../Button/Button';

interface CardComponentProps {
  slipId: number | undefined;
  advice: string | undefined;
  onClick: () => void;
}

export function CardComponent({ slipId, advice, onClick }: CardComponentProps) {
  console.log(slipId);
  console.log(advice);

  return (
    <Card sx={{ minWidth: 275 }} className="flash-c-card">
      <CardContent className="flash-c-card__content">
        <Typography variant="h5" className="flash-typo-normal">
          Advice #{slipId}
        </Typography>
        <Typography variant="body1" className="flash-c-card__typo--advice">
          <q>{advice}</q>
        </Typography>
      </CardContent>
      <Divider
        className="flash-c-card__divider"
        variant="inset"
        sx={{
          '&::before, &::after': {
            borderColor: 'var(--primary-blue--200)',
          },
          width: '295px',
          margin: '0 auto',
        }}
      >
        <PauseIcon className="flash-c-card__icon-divider" />
      </Divider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CardActions
          className="flash-c-card__action"
          disableSpacing
          sx={{
            margin: '0 auto',
          }}
        >
          <Button onClick={onClick}>
            <CasinoRoundedIcon />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
