// import Image from "next/image";
import { Rating } from "./Rating";

interface ProductProps {
  data: {
    description: string;
    imageUrl: string;
    imageAlt: string;
    rating: number;
  };
}

export const Product = ({ data }: ProductProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 bg-teal-200 border-2 border-emerald-600 rounded-md p-2">
      <img src={data.imageUrl} alt={data.imageAlt} className="rounded-md" />
      {/* <Image src="https://picsum.photos/1080/640" alt="Random picture" width='100%' height='100%' objectFit='contain'/> */}
      <p>{data.description}</p>
      <Rating rating={data.rating} />
    </div>
  );
};
