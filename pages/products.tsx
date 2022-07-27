import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';
import { GetProductsListDocument, GetProductsListQuery } from '../generated/graphql';
import { apolloClient } from '../graphql/apolloClient';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.products.map((product) => {
          return (
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
          );
        })}
      </ul>
    </>
  );
};

export default ProductsPage;

export const getStaticProps = async () => {
  const { data } = await apolloClient.query<GetProductsListQuery>({
    query: GetProductsListDocument,
  });

  return {
    props: {
      data,
    },
  };
};
