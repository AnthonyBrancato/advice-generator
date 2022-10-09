import * as React from 'react';

import { CardComponent } from '../Card/Card';
import { useAdviceGeneratorViewQueryManager } from '../common/AdviceGeneratorQueryManager';

export function AdviceGenerator() {
  const { data, refetch } = useAdviceGeneratorViewQueryManager();

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
