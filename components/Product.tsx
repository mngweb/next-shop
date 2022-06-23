// import Image from "next/image";
import { Rating } from './Rating';

interface ProductDetails {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
}

interface ProductProps {
  data: ProductDetails;
}

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <div className="grid gap-4 bg-teal-200 border-2 shadow-xl border-emerald-600 rounded-md">
      <img src={data.imageUrl} alt={data.imageAlt} />
      {/* <Image src="https://picsum.photos/1080/640" alt="Random picture" width='100%' height='100%' objectFit='contain'/> */}
      <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
      <p className="p-4">{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
};

type ProductListItem = Pick<ProductDetails, 'title' | 'imageUrl' | 'imageAlt'>;

interface ProductListItemProps {
  data: ProductListItem;
}

export const ProductListItem = ({ data }: ProductListItemProps) => {
  return (
    <div className="flex flex-col justify-between items-center bg-teal-200 border-2 shadow-xl border-emerald-600 rounded-md">
      <img src={data.imageUrl} alt={data.imageAlt} />
      {/* <Image src="https://picsum.photos/1080/640" alt="Random picture" width='100%' height='100%' objectFit='contain'/> */}
      <h2 className="p-4 text-2xl font-bold">{data.title}</h2>
    </div>
  );
};
