import styles from "./ComingSoonCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  releaseState: string;
  onClick: () => void;
}

export const ComingSoonCard = ({
  id,
  fullTitle,
  image,
  releaseState,
  onClick,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard} onClick={onClick}>
      <div className={styles.filmCardImage}>
        <Image image={image} />
      </div>
      <h3 className={styles.filmCardTitle}> {fullTitle}</h3>
      <p className={styles.filmCardRelease}>{releaseState}</p>
    </div>
  );
};
