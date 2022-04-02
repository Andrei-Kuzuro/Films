import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchComingSoon,
} from "../../../redux/actions/movieAction";
import { ComingSoonCard } from "../../Cards/ComingSoonCard/ComingSoonCard";
import styles from "./ComingSoon.module.css";
import { API_KEY, TITLE } from "../../../redux/constants";
import { useHistory } from "react-router-dom";
import { IMovieCard } from "../../../redux/redusers/movieReducer";

export const ComingSoon = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchComingSoon());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`${TITLE}${API_KEY}/` + id);
  };

  return (
    <>
      <h3 className={styles.title}>Coming Soon</h3>
      <div className={styles.filmCards}>
        {movies.map((item: IMovieCard) => {
          return (
            <ComingSoonCard
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
