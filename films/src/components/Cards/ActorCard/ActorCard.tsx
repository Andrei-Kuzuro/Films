import { Image } from "../../Image/Image";
import styles from "./ActorCard.module.css";

export interface IActors {
  image: string;
  name: string;
  asCharacter: string;
}

export const ActorCard = ({ image, name, asCharacter }: IActors) => {
  return (
    <div className={styles.actorCard}>
      <div className={styles.actorCardImage}>
        <Image image={image} />
      </div>
      <p className={styles.actorCardTitle}>
        {name}
        <br />({asCharacter})
      </p>
    </div>
  );
};
