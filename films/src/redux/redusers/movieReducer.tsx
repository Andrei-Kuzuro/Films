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
}

export const defaultState: IMovieState = {
  movies: [],
};

export const movieReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_MOVIE) {
    return {
      ...state,
      movies: action.movies,
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
