import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { IMovieState, movieReducer } from "./redusers/movieReducer";
import { actorReducer, IActorsState } from "./redusers/actorReducer";

export interface IState {
  movieReducer: IMovieState;
  actorReducer: IActorsState;
}

export const store = createStore(
  combineReducers({ movieReducer, actorReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
