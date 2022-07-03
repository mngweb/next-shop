import Image from 'next/image';
import Link from 'next/link';
import { Rating } from './Rating';

interface ProductDetails {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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
      <div className="bg-white p-4">
        {/* <img src={data.imageUrl} alt={data.imageAlt} /> */}
        {/* <Image src={data.imageUrl} alt={data.imageAlt} width="100%" height="100%" objectFit="contain" /> */}
        <Image src={data.imageUrl} alt={data.imageAlt} width={16} height={9} layout="responsive" objectFit="contain" />
      </div>
      <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <p className="p-4">{data.longDescription}</p>
      <Rating rating={data.rating} />
    </>
  );
};

type ProductListItem = Pick<ProductDetails, 'id' | 'title' | 'imageUrl' | 'imageAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div className="bg-teal-200 border-2 shadow-xl border-emerald-600 rounded-md">
      <div className="bg-white p-4">
        <Image src={data.imageUrl} alt={data.imageAlt} width={16} height={9} layout="responsive" objectFit="contain" />
      </div>
      <Link href={`/products/${data.id}`}>
        <a>
          <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
        </a>
      </Link>
    </div>
  );
};
