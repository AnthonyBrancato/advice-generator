import { Typography, CardContent } from '@mui/material';

interface CardContentComponentProps {
  slipId: number | undefined;
  advice: string | undefined;
}

export function CardContentComponent({
  slipId,
  advice,
}: CardContentComponentProps) {
  return (
    <CardContent className="flash-c-card__content">
      <Typography variant="h5" className="flash-typo-normal">
        Advice #{slipId}
      </Typography>
      <Typography variant="body1" className="flash-c-card__typo--advice">
        {advice ? <q>{advice}</q> : 'Nothing to display, yet.'}
      </Typography>
    </CardContent>
  );
}
