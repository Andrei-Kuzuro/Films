import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IMovieState, movieReducer } from "./redusers/movieReducer";

export interface IState {
  movieReduser: IMovieState;
}

export const store = createStore(
  combineReducers({ movieReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
