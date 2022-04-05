import styles from "./FullMovies.module.css";
import { Image } from "../Image/Image";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchImageMovie } from "../../redux/actions/movieAction";
import { Preloader } from "../Preloader/Preloader";

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
  const imageMovie = useSelector((state: IState) => state.movieReducer.image);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchImageMovie(params.id));
  }, []);

  return (
    <>
      <div className={styles.container}>
        {imageMovie.length !== 0 ? (
          <div
            className={styles.wrapper}
            style={{ backgroundImage: `url(${imageMovie})` }}
          >
            <div className={styles.wrapperTwo}>
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
                <div className={styles.rating}>
                  <div>{imDbRating}</div>
                </div>
                <div className={styles.descriptionMovie}>
                  <p className={styles.descriptionMovie_tag}>{tagline}</p>
                  <p className={styles.descriptionMovie_review}>Обзор</p>
                  <p className={styles.descriptionMovie_plot}>{plot}</p>
                  <div className={styles.writers}>
                    <p>Writers:</p>
                    <p>{writers}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Preloader />
        )}
      </div>
    </>
  );
};
