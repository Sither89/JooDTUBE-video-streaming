import { WatchLaterVideoCard } from "./WatchLaterVideoCard/WatchLaterVideoCard";
import { useAuth } from "../../context/auth-context";

const WatchLater = () => {
  const {
    userState: {
      userDetails: { watchlater },
    },
  } = useAuth();
  return (
    <main>
      <h1>Watch Later Videos</h1>
      <div className="single-playlist-layout">
        {watchlater?.map((video) => (
          <WatchLaterVideoCard key={video._id} video={video} />
        ))}
      </div>
    </main>
  );
};

export { WatchLater };
