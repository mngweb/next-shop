import { StoreApiResponse } from '../../types';
// export const apiUrl = `https://fakestoreapi.com/products/`;
export const apiUrl = `https://naszsklep-api.vercel.app/api/products`;

export const getProducts = async () => {
  const res = await fetch(apiUrl);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

export const getProductsStaticProps = async () => {
  const res = await fetch(apiUrl);
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};
