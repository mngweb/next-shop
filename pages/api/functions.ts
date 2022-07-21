import { gql } from '@apollo/client';
import { apolloClient } from '../../graphql/apolloClient';
import { StoreApiResponse } from '../../types';
import { apiUrl } from './constants';

export const getProducts = async () => {
  const res = await fetch(apiUrl);
  const data: StoreApiResponse[] = await res.json();
  return data;
};

export const getProductsStaticProps = async () => {
  //// graphql version - querying graphql on server
  const { data } = await apolloClient.query<GetProductsListResponse>({
    query: gql`
      query GetProductsList {
        products {
          id
          slug
          name
          price
          images(first: 1) {
            url
          }
        }
      }
    `,
  });

  //// rest api version
  // const res = await fetch(apiUrl);
  // const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export interface GetProductsListResponse {
  products: Product[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: Image[];
}

export interface Image {
  url: string;
}
