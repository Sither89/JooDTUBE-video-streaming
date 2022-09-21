import { useData } from "../../context/data-context";
import { VideoCard } from "./VideoCard/VideoCard";
import { useLocation } from "react-router-dom";

const SearchResult = () => {
  const {
    dataState: { videos },
  } = useData();

  const query = new URLSearchParams(useLocation().search);
  const searchKeyword = query.get("search_query");

  const searchFilteredVideos = videos?.filter((video) =>
    video.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <main>
      <h1 className="pd-x-base">Search Result</h1>
      <div className="cards-layout">
        {searchFilteredVideos?.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
      {searchFilteredVideos.length === 0 && (
        <h2 className="pd-x-base">No videos matched</h2>
      )}
    </main>
  );
};

export { SearchResult };
