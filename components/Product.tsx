import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';
import { NextSeo } from 'next-seo';
import { apiUrl } from '../pages/api/constants';
import { ShopMarkdown } from './ShopMarkdown';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MarkdownResult } from '../types';
import { useCart } from './Cart/CartContext';

interface ProductDetails {
  //// graphql version
  id: string;
  //// rest api version
  // id: number;
  title: string;
  description: string;
  longDescription: MarkdownResult;
  imageUrl: string;
  imageAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`${apiUrl}/${data.id}`}
        openGraph={{
          url: `${apiUrl}/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.imageUrl,
              alt: data.imageAlt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Shop',
        }}
      />
      <div className="bg-white p-4">
        {/* <img src={data.imageUrl} alt={data.imageAlt} /> */}
        {/* <Image src={data.imageUrl} alt={data.imageAlt} width="100%" height="100%" objectFit="contain" /> */}
        <Image src={data.imageUrl} alt={data.imageAlt} width={16} height={9} layout="responsive" objectFit="contain" />
      </div>
      <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <article className="prose lg:prose-xl">
        {/* <MDXRemote {...data.longDescription} /> */}
        <ShopMarkdown>{data.longDescription}</ShopMarkdown>
      </article>
      <Rating rating={data.rating} />
    </>
  );
};

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imageUrl' | 'imageAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  const cartContext = useCart();

  return (
    <div className="bg-teal-200 border-2 shadow-xl border-emerald-600 rounded-md">
      <div className="bg-white p-4">
        <Image src={data.imageUrl} alt={data.imageAlt} width={16} height={9} layout="responsive" objectFit="contain" />
      </div>
      <div className="p-4">
        <Link href={`/products/${data.id}`}>
          <a>
            <h2 className="pb-4 text-2xl font-bold">{data.title}</h2>
          </a>
        </Link>
        <button
          onClick={() => cartContext.addItemToCart({ id: data.id, title: data.title, price: 10, count: 1 })}
          className="text-white bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
