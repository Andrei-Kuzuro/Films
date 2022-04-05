import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchYoutubeTrailer } from "../../redux/actions/movieAction";
import styles from "./YoutubeTrailer.module.css";

export const YoutubeTrailer = () => {
  const youtubeTrailer = useSelector(
    (state: IState) => state.movieReducer.trailer
  );

  console.log("here: ", youtubeTrailer);

  const dispatch = useDispatch();
  const params: { id: string } = useParams();

  useEffect(() => {
    dispatch(fetchYoutubeTrailer(params.id));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.video_container}>
          <iframe
            width={500}
            height={300}
            src={`http://www.youtube.com/embed/${youtubeTrailer}`}
            title="Youtube Video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"
            allowFullScreen
          />
        </div>
      </div>
    </>
  );
};
