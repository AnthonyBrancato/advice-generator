import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
// import { queryClient } from '../..';

interface AdviceSlipQueryData {
  slip: {
    id: number;
    advice: string;
  };
}

const QUERY_ID = 'advice-slip-key';

const fetchAdviceSlip = async (): Promise<AdviceSlipQueryData> => {
  const response = await axios.get('https://api.adviceslip.com/advice');
  return response.data;
};

export const useRandomAdviceSlip = () => {
  const query = useQuery([QUERY_ID], fetchAdviceSlip, {
    enabled: false,
  });

  return query;
};
