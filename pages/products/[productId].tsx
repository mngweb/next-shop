import { gql } from '@apollo/client';
import { GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { ProductDetails } from '../../components/Product';
import { apolloClient } from '../../graphql/apolloClient';
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

      {/* graphql version         */}
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

      {/* rest api version         */}
      {/* <ProductDetails
        data={{
          id: data.id,
          title: data.title,
          imageUrl: data.image,
          imageAlt: data.title,
          description: data.description,
          longDescription: data.longDescription,
          rating: data.rating.rate,
        }}
      /> */}
    </>
  );
};

export default ProductIdPage;

export const getStaticPaths = async () => {
  //// graphql version - querying graphql on server
  interface GetProductsSlugsResponse {
    products: Product[];
  }
  interface Product {
    slug: string;
  }

  //// graphql version
  const { data } = await apolloClient.query<GetProductsSlugsResponse>({
    query: gql`
      query GetProductsSlugs {
        products {
          slug
        }
      }
    `,
  });

  //// rest api version
  // // export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  // const res = await fetch(apiUrl);
  // const data: StoreApiResponse[] = await res.json();

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

  //// graphql version
  interface GetProductDetailsBySlugResponse {
    product: Product;
  }
  interface Product {
    slug: string;
    name: string;
    price: number;
    description: string;
    images: Image[];
  }
  interface Image {
    url: string;
  }

  const { data } = await apolloClient.query<GetProductDetailsBySlugResponse>({
    variables: {
      slug: params.productId,
    },
    query: gql`
      query GetProductDetailsBySlug($slug: String) {
        product(where: { slug: $slug }) {
          slug
          name
          price
          description
          images {
            url
          }
        }
      }
    `,
  });

  //// rest api version
  // const res = await fetch(`${apiUrl}/${params?.productId}`);
  // const data: StoreApiResponse | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        //// graphql version
        ...data.product,
        longDescription: await serialize(data.product.description),
        //// rest api version
        // ...data,
        // longDescription: await serialize(data.longDescription),
      },
    },
  };
};

//// rest api version
// export interface StoreApiResponse {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   longDescription: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
