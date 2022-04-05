import styles from "./InTheatresCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  releaseState: string;
  onClick: () => void;
}

export const InTheatresCard = ({
  id,
  fullTitle,
  image,
  releaseState,
  onClick,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard} onClick={onClick}>
      <Image image={image} />
      <p className={styles.filmCardTitle}> {fullTitle}</p>
      <p className={styles.filmCardDescription}>{releaseState}</p>
    </div>
  );
};
