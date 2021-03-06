import { InferGetStaticPropsType } from 'next';
import { ProductListItem } from '../components/Product';
import { getProductsStaticProps } from './api/functions';
// import { StoreApiResponse } from '../types';

const ProductsPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((product) => {
          return (
            <li key={product.id}>
              <ProductListItem
                data={{
                  id: product.id,
                  title: product.title,
                  imageUrl: product.image,
                  imageAlt: product.title,
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
  return getProductsStaticProps();
};
