import styles from "./FilmCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  imDbRating: string;
}

export const FilmCard = ({ id, fullTitle, imDbRating, image }: IMovieCard) => {
  return (
    <div className={styles.filmCard}>
      <Image image={image} />
      <p className={styles.filmCardTitle}> {fullTitle}</p>
      <div className={styles.filmCardRating}>
        <p>{imDbRating}</p>
      </div>
    </div>
  );
};
