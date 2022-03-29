import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { useEffect } from "react";
import { fetchTop250Movies } from "../../redux/actions/movieAction";
import { FilmCard, IMovieCard } from "../FilmCard/FilmCard";
import { NavBar } from "../NavBar/NavBar";

export const Top250Movies = () => {
  const movies = useSelector((state: IState) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTop250Movies());
  }, []);

  return (
    <div>
      <NavBar />
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
  );
};
