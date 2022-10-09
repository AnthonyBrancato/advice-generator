import * as React from 'react';
import { AdviceGenerator } from '../../components/AdviceGenerator/AdviceGenerator';
import { AdviceGeneratorViewQueryManager } from '../../components/common/AdviceGeneratorQueryManager';

export function AdviceGeneratorView() {
  return (
    <AdviceGeneratorViewQueryManager>
      <AdviceGenerator />
    </AdviceGeneratorViewQueryManager>
  );
}
