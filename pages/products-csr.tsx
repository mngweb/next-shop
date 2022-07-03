import { useQuery } from 'react-query';
import { Layout } from '../components/Layout';
import { ProductListItem } from '../components/Product';
import { getProducts } from './api/functions';

const ProductsCSRPage = () => {
  const { isLoading, data, error } = useQuery('products', getProducts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Something went wrong.</div>;
  }

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default ProductsCSRPage;
