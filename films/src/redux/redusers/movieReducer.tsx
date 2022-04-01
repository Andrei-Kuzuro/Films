import { ACTIONS } from "../constants";

export interface IMovieCard {
  title: string;
  fullTitle: string;
  year: string;
  image: string;
  crew: string;
  imDbRating: string;
  releaseState: string;
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

  return state;
};
