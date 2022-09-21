import "./RelatedVideoPane.css";
import { VideoCard } from "./RelatedVideoCard/RelatedVideoCard";

const RelatedVideoPane = ({ relatedVideos }) => {
  return (
    <aside className="related-video-bar">
      <h2 className="panel-title">Related Videos</h2>
      {relatedVideos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </aside>
  );
};

export { RelatedVideoPane };
