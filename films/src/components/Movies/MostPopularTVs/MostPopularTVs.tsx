import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchMostPopularTVs } from "../../../redux/actions/movieAction";
import { FilmCard, IMovieCard } from "../../Cards/FilmCard/FilmCard";
import { Header } from "../../../Header/Header";
import styles from "./MostPopularTVs.module.css";

export const MostPopularTVs = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMostPopularTVs());
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
