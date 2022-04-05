import { Dispatch } from "redux";
import { ACTIONS, API_DATA_URL, API_KEY, FULL_CAST } from "../constants";

export const addActors = (actors: any) => {
  return {
    type: ACTIONS.ADD_ACTORS,
    actors: actors,
  };
};

export function fetchActors(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(`${API_DATA_URL}${FULL_CAST}${API_KEY}/${id}`);
    const data = await response.json();
    
    dispatch(addActors(data.actors));
  };
}
