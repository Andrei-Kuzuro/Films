import { useEffect } from "react";
import { fetchDescriptionFilms } from "../../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IState } from "../../redux/store";
import { FullMovies } from "../FullCards/FullMovies";
import { Preloader } from "../Preloader/Preloader";
import { Header } from "../../Header/Header";
import { ActorCardList } from "../Cards/ActorCard/ActorCardList";
import styles from "./DescriptionFilms.module.css";
import { YoutubeTrailer } from "../YoutubeTrailer/YoutubeTrailer";

export const DescriptionFilms = () => {
  const movie = useSelector((state: IState) => state.movieReducer.currentMovie);

  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchDescriptionFilms(params.id));
  }, []);

  return movie ? (
    <>
      <Header />
      <div>
        <FullMovies
          key={movie.id}
          id={movie.id}
          image={movie.image}
          fullTitle={movie.fullTitle}
          contentRating={movie.contentRating}
          releaseDate={movie.releaseDate}
          genres={movie.genres}
          runtimeStr={movie.runtimeStr}
          plot={movie.plot}
          imDbRating={movie.imDbRating}
          tagline={movie.tagline}
          writers={movie.writers}
        />
      </div>
      <div className={styles.containerActors}>
        <h3>Cast</h3>
        <div className={styles.actors}>
          {" "}
          <ActorCardList />
        </div>
      </div>
      <div className={styles.trailer}>
        <YoutubeTrailer />
      </div>
    </>
  ) : (
    <Preloader />
  );
};
