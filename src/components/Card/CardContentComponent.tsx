import { Typography, CardContent } from '@mui/material';

interface CardContentComponentProps {
  data?: {
    slip: {
      id: number | undefined;
      advice: string | undefined;
    };
  };
}

export function CardContentComponent({ data }: CardContentComponentProps) {
  return (
    <CardContent className="flash-c-card__content">
      <Typography variant="h5" className="flash-typo-normal">
        Advice {data?.slip?.id ? <span>#{data.slip.id}</span> : null}
      </Typography>
      <Typography variant="body1" className="flash-c-card__typo--advice">
        {data?.slip?.advice ? <q>{data.slip.advice}</q> : null}
      </Typography>
    </CardContent>
  );
}
