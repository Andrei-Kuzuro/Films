import { ACTIONS } from "../constants";

export interface IMovieCard {
  id: string;
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  releaseState: string;

  contentRating: string;
  releaseDate: string;
  genres: string;
  runtimeStr: string;
  plot: string;
  tagline: string;
  writers: string;
}

export interface IMovieState {
  movies: IMovieCard[];
  currentMovie: IMovieCard | null;
  inTheatres: IMovieCard[];
  comingSoon: IMovieCard[];
  image: string;
  trailer: string;
}

export const defaultState: IMovieState = {
  movies: [],
  currentMovie: null,
  inTheatres: [],
  comingSoon: [],
  image: "",
  trailer: "",
};

export const movieReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_MOVIE) {
    return {
      ...state,
      movies: action.movies,
    };
  }

  if (action.type === ACTIONS.ADD_MOVIE_DETAILS) {
    return {
      ...state,
      currentMovie: action.details,
    };
  }

  if (action.type === ACTIONS.ADD_MOVIE_IN_THEATRES) {
    return {
      ...state,
      inTheatres: action.inTheatres,
    };
  }

  if (action.type === ACTIONS.ADD_MOVIE_COMING_SOON) {
    return {
      ...state,
      comingSoon: action.comingSoon,
    };
  }

  if (action.type === ACTIONS.ADD_IMAGE_MOVIE) {
    return {
      ...state,
      image: action.image,
    };
  }

  if (action.type === ACTIONS.ADD_YOUTUBE_TRAILER) {
    return {
      ...state,
      trailer: action.trailer,
    };
  }

  if (action.type === ACTIONS.CLEAR) {
    return {
      ...state,
      movies: [],
    };
  }

  return state;
};
