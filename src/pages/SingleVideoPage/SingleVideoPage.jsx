import "./SingleVideoPage.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WatchVideoCard } from "./WatchVideoCard/WatchVideoCard";
import { RelatedVideoPane } from "./RelatedVideoPane/RelatedVideoPane";
import { useAuth } from "../../context/auth-context";
import {
  fetchVideo,
  fetchRelatedVideos,
  requestAddVideoInHistory,
} from "../../utils/server-request";

const SingleVideoPage = () => {
  const [video, setVideo] = useState({});
  const [relatedVideos, setRelatedVideos] = useState([]);

  const { watchid } = useParams();

  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  useEffect(() => {
    (async () => {
      const currentVideo = await fetchVideo(watchid);
      setVideo(currentVideo);
      const relatedVideos = await fetchRelatedVideos(
        currentVideo._id,
        currentVideo.category[0]
      );
      setRelatedVideos(relatedVideos.slice(0, 3));
      if (userToken) {
        requestAddVideoInHistory(currentVideo, headers, userDispatch);
      }
    })();
  }, [watchid]);

  return (
    <main className="wrapper wrapper-video-page">
      <WatchVideoCard video={video} />
      <RelatedVideoPane relatedVideos={relatedVideos} />
    </main>
  );
};

export { SingleVideoPage };
