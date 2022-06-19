interface RatingProps {
  rating: number;
}

export const Rating = (props: RatingProps) => {
  return <div className="text-blue-500 font-bold">{props.rating}</div>;
};
