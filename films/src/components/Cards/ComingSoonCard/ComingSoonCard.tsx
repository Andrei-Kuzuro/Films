import styles from "./ComingSoonCard.module.css";
import { Image } from "../../Image/Image";

export interface IMovieCard {
  id?: string;
  fullTitle: string;
  image: string;
  releaseState: string;
}

export const ComingSoonCard = ({
  id,
  fullTitle,
  image,
  releaseState,
}: IMovieCard) => {
  return (
    <div className={styles.filmCard}>
      <Image image={image} />
      <h3 className={styles.filmCardTitle}> {fullTitle}</h3>
      <p>{releaseState}</p>
    </div>
  );
};
