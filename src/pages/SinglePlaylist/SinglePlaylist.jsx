import { PlaylistVideoCard } from "./PlaylistVideoCard/PlaylistVideoCard";
import { useAuth } from "../../context/auth-context";
import { useParams } from "react-router-dom";

const SinglePlaylist = () => {
  const { playlistid } = useParams();
  const {
    userState: {
      userDetails: { playlists },
    },
  } = useAuth();

  const currentPlaylist = playlists.find(
    (playlist) => playlist._id === playlistid
  );

  return (
    <div className="single-playlist-layout">
      {currentPlaylist?.videos?.map((video) => (
        <PlaylistVideoCard key={video._id} video={video} />
      ))}
    </div>
  );
};

export { SinglePlaylist };
