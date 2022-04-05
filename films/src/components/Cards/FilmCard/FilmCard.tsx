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
  fullTitle,
  imDbRating,
  image,
  onClick,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard} onClick={onClick}>
      <div className={styles.filmCardImage}>
        <Image image={image} />
      </div>
      <p className={styles.filmCardTitle}> {fullTitle}</p>
      <div className={styles.filmCardRating}>
        <p>{imDbRating}</p>
      </div>
    </div>
  );
};
