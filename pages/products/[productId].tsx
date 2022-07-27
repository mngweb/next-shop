import { GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { ProductDetails } from '../../components/Product';
import {
  GetProductDetailsBySlugDocument,
  GetProductDetailsBySlugQuery,
  GetProductDetailsBySlugQueryVariables,
  GetProductsSlugsDocument,
  GetProductsSlugsQuery,
} from '../../generated/graphql';
import { apolloClient } from '../../graphql/apolloClient';
import { InferGetStaticPaths } from '../../types';
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
          id: data.slug,
          title: data.name,
          imageUrl: data.images[0].url,
          imageAlt: data.name,
          description: data.description,
          longDescription: data.longDescription,
          rating: 5,
        }}
      />
    </>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query<GetProductsSlugsQuery>({
    query: GetProductsSlugsDocument,
  });

  return {
    paths: data.products.map((product) => {
      return {
        params: {
          productId: product.slug.toString(),
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

  const { data } = await apolloClient.query<GetProductDetailsBySlugQuery, GetProductDetailsBySlugQueryVariables>({
    variables: {
      slug: params.productId,
    },
    query: GetProductDetailsBySlugDocument,
  });

  if (!data.product) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        ...data.product,
        longDescription: await serialize(data.product.description),
      },
    },
  };
};
