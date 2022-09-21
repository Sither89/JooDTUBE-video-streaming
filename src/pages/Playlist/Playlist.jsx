import { PlaylistPane } from "./PlaylistComponents/PlaylistPane";
import { useAuth } from "../../context/auth-context";

const Playlist = () => {
  const {
    userState: {
      userDetails: { playlists },
    },
  } = useAuth();
  return (
    <main>
      <h1>Playlist</h1>
      {playlists?.length > 0 ? <PlaylistPane /> : <h2>No items in playlist</h2>}
    </main>
  );
};

export { Playlist };
