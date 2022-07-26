import { StoreApiResponse } from '../../types';
import { apiUrl } from './constants';

export const getProducts = async () => {
  const res = await fetch(apiUrl);
  const data: StoreApiResponse[] = await res.json();
  return data;
};
