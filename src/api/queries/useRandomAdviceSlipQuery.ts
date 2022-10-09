import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface AdviceSlipQueryData {
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

export const useRandomAdviceSlipQuery = () => {
  const query = useQuery([QUERY_ID], fetchAdviceSlip, {
    enabled: false,
  });

  return query;
};
