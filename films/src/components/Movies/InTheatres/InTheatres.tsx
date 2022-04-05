import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchInTheatres,
} from "../../../redux/actions/movieAction";
import { InTheatresCard } from "../../Cards/InTheatresCard/InTheatresCard";
import styles from "./inTheatres.module.css";
import { useHistory } from "react-router-dom";
import { IMovieCard } from "../../../redux/redusers/movieReducer";
import { Preloader } from "../../Preloader/Preloader";

export const InTheatres = () => {
  const inTheatres = useSelector(
    (state: IState) => state.movieReducer.inTheatres
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInTheatres());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`movie/` + id);
  };

  return inTheatres.length !== 0 ? (
    <>
      <h3 className={styles.title}>In Theatres</h3>
      <div className={styles.filmCards}>
        {inTheatres.map((item: IMovieCard) => {
          return (
            <InTheatresCard
              key={item.id}
              id={item.id}
              fullTitle={item.fullTitle}
              image={item.image}
              releaseState={item.releaseState}
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
