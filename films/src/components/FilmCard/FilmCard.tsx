import styles from "./FilmCard.module.css";
import { Image } from "../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  imDbRating: string;
}

export const FilmCard = ({ id, fullTitle, imDbRating, image }: IMovieCard) => {
  return (
    <div className={styles.containerFilmCard}>
      <div className={styles.filmCard}>
        <div className={styles.filmCardImage}>
          <Image image={image} />
        </div>
        <h3 className={styles.filmCardTitle}> {fullTitle}</h3>
        <div className={styles.filmCardRating}>
          <p>{imDbRating}</p>
        </div>
      </div>
    </div>
  );
};
