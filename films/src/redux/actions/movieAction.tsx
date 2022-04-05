import { Dispatch } from "redux";
import {
  ACTIONS,
  API_DATA_URL,
  API_KEY,
  COMING_SOON,
  IN_THEATRES,
  MOST_POPULAR_MOVIES,
  MOST_POPULAR_TVS,
  SEARCH,
  TITLE,
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

export const clearContent = () => {
  return {
    type: ACTIONS.CLEAR,
  };
};

export function fetchTop250Movies() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${TOP_250_MOVIES}${API_KEY}`);

    const data = await response.json();

    console.log("top250: ", data);

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

    dispatch(addMovie(data.items));
  };
}

export function fetchInTheatres() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${IN_THEATRES}${API_KEY}`);

    const data = await response.json();

    console.log("theatres: ", data);

    dispatch(addMovie(data.items));
  };
}

export function fetchComingSoon() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${COMING_SOON}${API_KEY}`);

    const data = await response.json();

    console.log("comingsoon: ", data);

    dispatch(addMovie(data.items));
  };
}

export function searchMovie(search: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `${API_DATA_URL}${SEARCH}${API_KEY}/${search}`
    );
    const data = await response.json();

    dispatch(addMovie(data.results));
  };
}

export function addMovieDetails(details: any) {
  return {
    type: ACTIONS.ADD_MOVIE_DETAILS,
    details,
  };
}

export function fetchDescriptionFilms(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${TITLE}${API_KEY}/${id}`);
    const data = await response.json();

    dispatch(addMovieDetails(data));
  };
}
