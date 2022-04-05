import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import {
  clearContent,
  fetchComingSoon,
} from "../../../redux/actions/movieAction";
import { ComingSoonCard } from "../../Cards/ComingSoonCard/ComingSoonCard";
import styles from "./ComingSoon.module.css";
import { useHistory } from "react-router-dom";
import { IMovieCard } from "../../../redux/redusers/movieReducer";
import { Preloader } from "../../Preloader/Preloader";

export const ComingSoon = () => {
  const comingSoon = useSelector(
    (state: IState) => state.movieReducer.comingSoon
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchComingSoon());

    return () => {
      dispatch(clearContent());
    };
  }, []);

  const fullMovie = (id: string) => {
    return history.push(`movie/` + id);
  };

  return comingSoon.length !== 0 ? (
    <>
      <h3 className={styles.title}>Coming Soon</h3>
      <div className={styles.filmCards}>
        {comingSoon.map((item: IMovieCard) => {
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
  ) : (
    <Preloader />
  );
};
