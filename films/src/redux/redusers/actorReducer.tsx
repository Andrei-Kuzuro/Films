import { ACTIONS } from "../constants";

export interface IActors {
  id: string;
  image: string;
  name: string;
  asCharacter: string;
}

export interface IActorsState {
  actors: IActors[];
}

export const defaultState: IActorsState = {
  actors: [],
};

export const actorReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_ACTORS) {
    return {
      ...state,
      actors: action.actors,
    };
  }

  return state;
};
