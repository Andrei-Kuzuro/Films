import { useEffect } from "react";
import { fetchDescriptionFilms } from "../../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { IState } from "../../redux/store";
import { FullMovies } from "../FullCards/FullMovies";
import { IMovieCard } from "../../redux/redusers/movieReducer";
import { Preloader } from "../Preloader/Preloader";
import { Header } from "../../Header/Header";

export const DescriptionFilms = () => {
  const description = useSelector((state: IState) => state.movieReducer.movies);

  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchDescriptionFilms(params.id));
  }, []);

  return description ? (
    <>
      <Header />
      <div>
        {description.map((item: IMovieCard) => {
          return (
            <FullMovies
              key={item.id}
              id={item.id}
              image={item.image}
              fullTitle={item.fullTitle}
              contentRating={item.contentRating}
              releaseDate={item.releaseDate}
              genres={item.genres}
              runtimeStr={item.runtimeStr}
              plot={item.plot}
              imDbRating={item.imDbRating}
              tagline={item.tagline}
              writers={item.writers}
            />
          );
        })}
      </div>
    </>
  ) : (
    <Preloader />
  );
};
