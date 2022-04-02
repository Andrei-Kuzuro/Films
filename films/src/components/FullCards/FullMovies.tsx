import styles from "./FullMovies.module.css";
import { Image } from "../Image/Image";

export interface IFullMovies {
  id: string;
  image: string;
  fullTitle: string;
  contentRating: string;
  releaseDate: string;
  genres: string;
  runtimeStr: string;
  plot: string;
  imDbRating: string;
  tagline: string;
  writers: string;
}

export const FullMovies = ({
  id,
  image,
  fullTitle,
  contentRating,
  releaseDate,
  genres,
  runtimeStr,
  plot,
  imDbRating,
  tagline,
  writers,
}: IFullMovies) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.poster}>
          <Image image={image} />
        </div>
        <div className={styles.containerDescription}>
          <div className={styles.title}>
            <div className={styles.titleDescription}>{fullTitle}</div>
            <div className={styles.genre}>
              <p>{contentRating}</p>
              <p>{releaseDate}</p>
              <p>{genres}</p>
              <p> {runtimeStr}</p>
            </div>
          </div>
          <div className={styles.rating}>{imDbRating}</div>
          <div className={styles.descriptionMovie}>
            <p>{tagline}</p>
            <p>Обзор</p>
            <p>{plot}</p>
            <div className={styles.writers}>
              <p>{writers}</p>
              <p>Писатель</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
