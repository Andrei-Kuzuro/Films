import { Image } from "./Image/Image";

export interface IMovieCard {
  id?: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
}

export const Title = ({
  id,
  title,
  fullTitle,
  crew,
  imDbRating,
  year,
  image,
}: IMovieCard) => {
  return (
    <div>
      <Image image={image} />
      <h3>{fullTitle}</h3>
      <p>{title}</p>
      <p>{crew}</p>
      <p>{imDbRating}</p>
      <p>{year}</p>
    </div>
  );
};
