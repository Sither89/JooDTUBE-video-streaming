import { PlaylistCard } from "./PlaylistCard/PlaylistCard";
import { useAuth } from "../../../context/auth-context";

const PlaylistPane = () => {
  const {
    userState: {
      userDetails: { playlists },
    },
  } = useAuth();

  return (
    <div className="cards-layout">
      {playlists?.map((playlist) => (
        <PlaylistCard playlist={playlist} key={playlist.id} />
      ))}
    </div>
  );
};

export { PlaylistPane };
