import { Card, Divider, Skeleton } from '@mui/material';
import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import PauseIcon from '@mui/icons-material/Pause';

import * as React from 'react';

import '../../styles/components/Card.css';
import '../../styles/components/Button.css';
import '../../styles/components/CardActions.css';

import { CardContentComponent } from './CardContentComponent';
import { useAdviceGeneratorViewQueryManager } from '../common/AdviceGeneratorQueryManager';
import { CardActionsComponent } from './CardActionsComponent';

export function CardComponent() {
  const { data, refetch, isLoading } = useAdviceGeneratorViewQueryManager();

  const handleFetchAdviceSlip = React.useCallback(() => {
    refetch();
  }, [refetch]);

  const actions = React.useMemo(() => {
    return {
      onClick: handleFetchAdviceSlip,
      icons: <CasinoRoundedIcon />,
    };
  }, [handleFetchAdviceSlip]);

  return (
    <Card sx={{ minWidth: 275 }} className="flash-c-card">
      {isLoading ? (
        <Skeleton variant="rectangular" style={{ marginTop: '20px' }} />
      ) : (
        <CardContentComponent
          slipId={data?.slip?.id}
          advice={data?.slip?.advice}
        />
      )}
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
      <CardActionsComponent actions={actions} />
    </Card>
  );
}
