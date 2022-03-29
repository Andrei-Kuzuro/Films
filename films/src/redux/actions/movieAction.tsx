import { Dispatch } from "redux";
import {
  ACTIONS,
  API_DATA_URL,
  API_KEY,
  MOST_POPULAR_MOVIES,
  MOST_POPULAR_TVS,
  TOP_250_MOVIES,
  TOP_250_TVS,
} from "../constants";
import { IMovieState } from "../redusers/movieReducer";

export const addMovie = (movies: IMovieState) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    movies: movies,
  };
};

export function fetchTop250Movies() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${TOP_250_MOVIES}${API_KEY}`);

    const data = await response.json();

    dispatch(addMovie(data.items));
  };
}

export function fetchTop250TVs() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${TOP_250_TVS}${API_KEY}`);

    const data = await response.json();

    dispatch(addMovie(data.items));
  };
}

export function fetchMostPopularMovies() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `${API_DATA_URL}${MOST_POPULAR_MOVIES}${API_KEY}`
    );

    const data = await response.json();

    dispatch(addMovie(data.items));
  };
}

export function fetchMostPopularTVs() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `${API_DATA_URL}${MOST_POPULAR_TVS}${API_KEY}`
    );

    const data = await response.json();

    console.log(data);

    dispatch(addMovie(data.items));
  };
}
