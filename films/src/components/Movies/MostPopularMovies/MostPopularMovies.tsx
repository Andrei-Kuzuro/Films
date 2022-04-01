import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchMostPopularMovies } from "../../../redux/actions/movieAction";
import { FilmCard, IMovieCard } from "../../Cards/FilmCard/FilmCard";
import { Header } from "../../../Header/Header";
import styles from "./MostPopularMovies.module.css";

export const MostPopularMovies = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostPopularMovies());
  }, []);

  return (
    <>
      <Header />
      <div className={styles.filmCards}>
        {movies.map((item: IMovieCard) => {
          return (
            <FilmCard
              key={item.id}
              fullTitle={item.fullTitle}
              image={item.image}
              imDbRating={item.imDbRating}
            />
          );
        })}
      </div>
    </>
  );
};
