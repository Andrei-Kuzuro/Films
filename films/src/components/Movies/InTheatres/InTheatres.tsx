import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchInTheatres } from "../../../redux/actions/movieAction";
import { IMovieCard } from "../../Cards/InTheatresCard/InTheatresCard";
import { InTheatresCard } from "../../Cards/InTheatresCard/InTheatresCard";
import styles from "./inTheatres.module.css";

export const InTheatres = () => {
  const theatres = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInTheatres());
  }, []);

  return (
    <>
      <h3 className={styles.title}>In Theatres</h3>
      <div className={styles.filmCards}>
        {theatres.map((item: IMovieCard) => {
          return (
            <InTheatresCard
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
