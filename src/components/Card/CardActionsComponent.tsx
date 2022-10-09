import { CardActions } from '@mui/material';

import { Button } from '../Button/Button';

interface CardActionsComponentProps {
  actions: {
    onClick: () => void;
    icons: JSX.Element;
  };
}

export function CardActionsComponent({ actions }: CardActionsComponentProps) {
  const { onClick, icons } = actions;

  return (
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
        <Button className="flash-c-btn" onClick={onClick}>
          {icons}
        </Button>
      </CardActions>
    </div>
  );
}
