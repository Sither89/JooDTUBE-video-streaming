import { LikedVideoCard } from "./LikedVideoCard/LikedVideoCard";
import { useAuth } from "../../context/auth-context";

const Liked = () => {
  const {
    userState: {
      userDetails: { likes },
    },
  } = useAuth();
  return (
    <main>
      <h1>Liked Videos</h1>
      {likes?.length > 0 ? (
        <div className="single-playlist-layout">
          {likes?.map((video) => (
            <LikedVideoCard key={video._id} video={video} />
          ))}
        </div>
      ) : (
        <h2>No Liked Videos</h2>
      )}
    </main>
  );
};

export { Liked };
