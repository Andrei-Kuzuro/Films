import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchTop250Movies,
} from "../../../redux/actions/movieAction";
import { FilmCard } from "../../Cards/FilmCard/FilmCard";
import { Header } from "../../../Header/Header";
import styles from "./Top250Movies.module.css";
import { API_KEY, TITLE } from "../../../redux/constants";
import { useHistory } from "react-router-dom";
import { IMovieCard } from "../../../redux/redusers/movieReducer";
import { Preloader } from "../../Preloader/Preloader";

export const Top250Movies = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchTop250Movies());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`${TITLE}${API_KEY}/` + id);
  };

  return movies ? (
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
    </>
  ) : (
    <Preloader />
  );
};
