import styles from "./FilmCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  imDbRating: string;
  onClick: () => void;
}

export const FilmCard = ({
  id,
  fullTitle,
  imDbRating,
  image,
  onClick,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard} onClick={onClick}>
      <Image image={image} />
      <p className={styles.filmCardTitle}> {fullTitle}</p>
      <div className={styles.filmCardRating}>
        <p>{imDbRating}</p>
      </div>
    </div>
  );
};
