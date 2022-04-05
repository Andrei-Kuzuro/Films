import { Dispatch } from "redux";
import {
  ACTIONS,
  API_DATA_URL,
  API_KEY,
  COMING_SOON,
  IMAGES,
  IN_THEATRES,
  MOST_POPULAR_MOVIES,
  MOST_POPULAR_TVS,
  SEARCH,
  TITLE,
  TOP_250_MOVIES,
  TOP_250_TVS,
  YOUTUBE_TRAILER,
} from "../constants";
import { IMovieState } from "../redusers/movieReducer";

export const addMovie = (movies: IMovieState) => {
  return {
    type: ACTIONS.ADD_MOVIE,
    movies: movies,
  };
};

export const addMovieDetails = (details: any) => {
  return {
    type: ACTIONS.ADD_MOVIE_DETAILS,
    details: details,
  };
};

export const addMovieInTheatres = (inTheatres: IMovieState) => {
  return {
    type: ACTIONS.ADD_MOVIE_IN_THEATRES,
    inTheatres: inTheatres,
  };
};

export const addMovieComingSoon = (comingSoon: IMovieState) => {
  return {
    type: ACTIONS.ADD_MOVIE_COMING_SOON,
    comingSoon: comingSoon,
  };
};

export const addImageMovie = (image: any) => {
  return {
    type: ACTIONS.ADD_IMAGE_MOVIE,
    image: image,
  };
};

export const addYoutubeTrailer = (trailer: any) => {
  return {
    type: ACTIONS.ADD_YOUTUBE_TRAILER,
    trailer: trailer,
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

    dispatch(addMovieInTheatres(data.items));
  };
}

export function fetchComingSoon() {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${COMING_SOON}${API_KEY}`);

    const data = await response.json();

    dispatch(addMovieComingSoon(data.items));
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

export function fetchDescriptionFilms(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${TITLE}${API_KEY}/${id}`);
    const data = await response.json();

    dispatch(addMovieDetails(data));
  };
}

export function fetchImageMovie(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${IMAGES}${API_KEY}/${id}`);
    const data = await response.json();

    dispatch(addImageMovie(data.items[3].image));
  };
}

export function fetchYoutubeTrailer(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `${API_DATA_URL}${YOUTUBE_TRAILER}${API_KEY}/${id}`
    );
    const data = await response.json();

    dispatch(addYoutubeTrailer(data.videoId));
  };
}
