import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchInTheatres,
} from "../../../redux/actions/movieAction";
import { InTheatresCard } from "../../Cards/InTheatresCard/InTheatresCard";
import styles from "./inTheatres.module.css";
import { API_KEY, TITLE } from "../../../redux/constants";
import { useHistory } from "react-router-dom";
import { IMovieCard } from "../../../redux/redusers/movieReducer";

export const InTheatres = () => {
  const theatres = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchInTheatres());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`${TITLE}${API_KEY}/` + id);
  };

  return (
    <>
      <h3 className={styles.title}>In Theatres</h3>
      <div className={styles.filmCards}>
        {theatres.map((item: IMovieCard) => {
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
  );
};
