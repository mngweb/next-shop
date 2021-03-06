import { GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { ProductDetails } from '../../components/Product';
import { InferGetStaticPaths } from '../../types';
import { apiUrl } from '../api/constants';
// import { useRouter } from 'next/router';

const ProductIdPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const router = useRouter()
  // return <div>Product number {router.query.productId}</div>;
  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {/* <Link href={`/products`}>
          <a>Back to Products list</a>
        </Link> */}
      <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          imageUrl: data.image,
          imageAlt: data.title,
          description: data.description,
          longDescription: data.longDescription,
          rating: data.rating.rate,
        }}
      />
    </>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  // export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const res = await fetch(apiUrl);
  const data: StoreApiResponse[] = await res.json();

  return {
    paths: data.map((product) => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    // [
    //   {
    //     params: {
    //       productId: '1',
    //     },
    //   },
    // ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: InferGetStaticPaths<typeof getStaticPaths>) => {
  // export const getStaticProps = async ({ params }: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(`${apiUrl}/${params?.productId}`);
  const data: StoreApiResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data,
        longDescription: await serialize(data.longDescription),
      },
    },
  };
};

export interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  longDescription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
