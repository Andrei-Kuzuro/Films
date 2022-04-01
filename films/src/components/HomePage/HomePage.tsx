import { InTheatres } from "../Movies/InTheatres/InTheatres";
import { ComingSoon } from "../Movies/ComingSoon/ComingSoon";
import { Header } from "../../Header/Header";
import styles from "./HomePage.module.css";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ChangeEvent, useCallback, useState } from "react";
import { IState, store } from "../../redux/store";
import { searchMovie } from "../../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { FilmCard, IMovieCard } from "../Cards/FilmCard/FilmCard";

function debounce(fun: (text: string) => void, ms: number) {
  let isCooldown = false;
  let prevSearchText = "";

  return function (searchText: string) {
    prevSearchText = searchText;

    if (isCooldown) {
      return;
    }

    fun(searchText);
    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;

      if (prevSearchText !== searchText) {
        fun(prevSearchText);
      }
    }, ms);
  };
}

const delayedSearch = debounce(
  (text: string) => store.dispatch(searchMovie(text)),
  1111
);

export const HomePage = () => {
  const dispatch = useDispatch();
  const searchMovies = useSelector(
    (state: IState) => state.movieReducer.movies
  );

  const [search, setSearch] = useState("");

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
      delayedSearch(event.target.value);
    },
    [setSearch]
  );

  const onKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(searchMovie(search));
        setSearch("");
      }
    },
    [searchMovies]
  );

  return (
    <>
      <Header />
      <div className={styles.search}>
        <h1>Добро пожаловать!</h1>
        <div className={styles.form}>
          <Input
            type={"text"}
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={search}
          />
          <Button text={"Искать"} onClick={() => {}} />
        </div>
      </div>
      <div className={styles.searchMovies}>
        {search ? (
          searchMovies.map((item: IMovieCard) => {
            return (
              <FilmCard
                key={item.id}
                fullTitle={item.fullTitle}
                image={item.image}
                imDbRating={item.imDbRating}
              />
            );
          })
        ) : (
          <div className={styles.containerMovie}>
            <InTheatres />
            <ComingSoon />
          </div>
        )}
      </div>
    </>
  );
};
