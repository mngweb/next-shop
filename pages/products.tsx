// import { gql } from '@apollo/client';
import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';
import { GetProductsListDocument, GetProductsListQuery } from '../generated/graphql';
import { apolloClient } from '../graphql/apolloClient';
// import { StoreApiResponse } from '../types';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* {{data.map((product) => /* rest api version */}
        {data.products.map((product) => {
          return (
            ///// graphql version
            <li key={product.slug}>
              <ProductListItem
                data={{
                  id: product.slug,
                  title: product.name,
                  imageUrl: product.images[0].url,
                  imageAlt: product.name,
                }}
              />
            </li>

            ///// rest api version
            // <li key={product.id}>
            //   <ProductListItem
            //     data={{
            //       id: product.id,
            //       title: product.title,
            //       imageUrl: product.image,
            //       imageAlt: product.title,
            //     }}
            //   />
            // </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  //// graphql version - querying graphql on server, generated types
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  //// graphql version - querying graphql on server, manually created types
  // const { data } = await apolloClient.query<GetProductsListResponse>({
  //   query: gql`
  //     query GetProductsList {
  //       products {
  //         slug
  //         name
  //         price
  //         images(first: 1) {
  //           url
  //         }
  //       }
  //     }
  //   `,
  // });

  //// rest api version
  // const res = await fetch(apiUrl);
  // const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

/// graphql version - querying graphql on server, manually created types
// export interface GetProductsListResponse {
//   products: Product[];
// }

// export interface Product {
//   id: string;
//   slug: string;
//   name: string;
//   price: number;
//   images: Image[];
// }

// export interface Image {
//   url: string;
// }
