import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../../redux/store";
import { useEffect } from "react";
import { fetchActors } from "../../../redux/actions/actorsAction";
import { useParams } from "react-router-dom";
import { IActors } from "../../../redux/redusers/actorReducer";
import { ActorCard } from "./ActorCard";

export const ActorCardList = () => {
  const actors = useSelector((state: IState) => state.actorReducer.actors);
  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchActors(params.id));
  }, []);

  return (
    <>
      {actors.map((item: IActors) => {
        return (
          <ActorCard
            key={item.id}
            image={item.image}
            name={item.name}
            asCharacter={item.asCharacter}
          />
        );
      })}
    </>
  );
};
