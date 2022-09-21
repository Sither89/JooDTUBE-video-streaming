import { VideoCard } from "./VideoCard/VideoCard";
import { useData } from "../../../../context/data-context";
import { filterVideos } from "../../../../utils/filter-videos";

const VideosPane = () => {
  const {
    dataState: { videos, selectedCategory },
  } = useData();
  const filteredVideos = filterVideos(videos, selectedCategory);
  return (
    <div className="cards-layout">
      {filteredVideos.map((video) => (
        <VideoCard video={video} key={video._id} />
      ))}
    </div>
  );
};

export { VideosPane };
