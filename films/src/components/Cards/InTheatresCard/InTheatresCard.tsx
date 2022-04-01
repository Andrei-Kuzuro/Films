import styles from "./InTheatresCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  releaseState: string;
}

export const InTheatresCard = ({
  id,
  fullTitle,
  image,
  releaseState,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard}>
      <Image image={image} />
      <p className={styles.filmCardTitle}> {fullTitle}</p>
      <p className={styles.filmCardDescription}>{releaseState}</p>
    </div>
  );
};
