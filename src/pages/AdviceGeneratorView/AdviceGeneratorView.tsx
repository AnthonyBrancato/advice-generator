import * as React from 'react';
import { useRandomAdviceSlip } from '../../api/queries/useRandomAdviceSlipQuery';
import { CardComponent } from '../../components/Card/Card';

export function AdviceGeneratorView() {
  const { data, refetch } = useRandomAdviceSlip();

  const handleFetchAdviceSlip = React.useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <div className="flex justify-center">
      <CardComponent
        slipId={data?.slip.id}
        advice={data?.slip.advice}
        onClick={handleFetchAdviceSlip}
      />
    </div>
  );
}
