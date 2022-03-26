import { Dispatch } from "redux";
import { ACTIONS, KEY } from "../constants";
import { IMovieState } from "../redusers/movieReducer";

export const addMovie = (movies: IMovieState) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    movies: movies,
  };
};

export function fetchMovie() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://imdb-api.com/API/Top250Movies/${KEY}`
    );

    const result = await response.json();

    console.log(result);

    dispatch(addMovie(result.items));
  };
}
