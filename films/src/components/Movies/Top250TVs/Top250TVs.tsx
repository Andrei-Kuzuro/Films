import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchTop250TVs } from "../../../redux/actions/movieAction";
import { FilmCard, IMovieCard } from "../../Cards/FilmCard/FilmCard";
import { Header } from "../../../Header/Header";
import styles from "./Top250TVs.module.css";

export const Top250TVs = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop250TVs());
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
