import * as React from 'react';
import { noop } from 'lodash';
import {
  AdviceSlipQueryData,
  useRandomAdviceSlipQuery,
} from '../../api/queries/useRandomAdviceSlipQuery';

interface AdviceGeneratorViewContextProps {
  data: AdviceSlipQueryData | undefined;
  refetch: () => void;
  isError: boolean;
  isLoading: boolean;
}

const AdviceGeneratorViewContext =
  React.createContext<AdviceGeneratorViewContextProps>({
    data: undefined,
    refetch: noop,
    isError: false,
    isLoading: false,
  });

export function AdviceGeneratorViewQueryManager({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, refetch, isError, isLoading } = useRandomAdviceSlipQuery();

  return (
    <AdviceGeneratorViewContext.Provider
      value={{
        data,
        isLoading,
        isError,
        refetch,
      }}
    >
      {children}
    </AdviceGeneratorViewContext.Provider>
  );
}

export const useAdviceGeneratorViewQueryManager = () => {
  return React.useContext(AdviceGeneratorViewContext);
};
