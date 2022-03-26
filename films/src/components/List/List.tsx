import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { IMovieCard, Title } from "../Title";
import { useEffect } from "react";
import { fetchMovie } from "../../redux/actions/movieAction";

export const List = () => {
  const movies = useSelector((state: IState) => state.movieReduser.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovie());
  }, []);

  return (
    <div>
      {movies.map((item: IMovieCard) => {
        return (
          <Title
            key={item.id}
            title={item.title}
            fullTitle={item.fullTitle}
            year={item.year}
            image={item.image}
            crew={item.crew}
            imDbRating={item.imDbRating}
          />
        );
      })}
    </div>
  );
};
