import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchComingSoon } from "../../../redux/actions/movieAction";
import { IMovieCard } from "../../Cards/ComingSoonCard/ComingSoonCard";
import { ComingSoonCard } from "../../Cards/ComingSoonCard/ComingSoonCard";
import styles from "./ComingSoon.module.css";

export const ComingSoon = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComingSoon());
  }, []);

  return (
    <>
      <h3 className={styles.title}>Coming Soon</h3>
      <div className={styles.filmCards}>
        {movies.map((item: IMovieCard) => {
          return (
            <ComingSoonCard
              key={item.id}
              fullTitle={item.fullTitle}
              image={item.image}
              releaseState={item.releaseState}
            />
          );
        })}
      </div>
    </>
  );
};
