import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchMostPopularTVs,
} from "../../../redux/actions/movieAction";
import { FilmCard } from "../../Cards/FilmCard/FilmCard";
import { Header } from "../../../Header/Header";
import styles from "./MostPopularTVs.module.css";
import { IMovieCard } from "../../../redux/redusers/movieReducer";
import { useHistory } from "react-router-dom";
import { Preloader } from "../../Preloader/Preloader";

export const MostPopularTVs = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMostPopularTVs());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`movie/` + id);
  };

  return movies.length !== 20 ? (
    <>
      <Header />
      <div className={styles.filmCards}>
        {movies.map((item: IMovieCard) => {
          return (
            <FilmCard
              key={item.id}
              id={item.id}
              fullTitle={item.fullTitle}
              image={item.image}
              imDbRating={item.imDbRating}
              onClick={() => fullMovie(item.id)}
            />
          );
        })}
      </div>
      )
    </>
  ) : (
    <Preloader />
  );
};
