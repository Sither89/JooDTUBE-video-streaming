import "./PlaylistCard.css";
import { Link } from "react-router-dom";
import { requestDeletePlaylist } from "../../../../utils/server-request";
import { useAuth } from "../../../../context/auth-context";

const PlaylistCard = ({ playlist }) => {
  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleDeletePlaylist = (e) => {
    e.preventDefault();
    requestDeletePlaylist(playlist._id, headers, userDispatch);
  };

  return (
    <Link className="card-container pd-x-base" to={`/playlist/${playlist._id}`}>
      <h3>{playlist.title}</h3>
      <button className="cross-icon" onClick={handleDeletePlaylist}>
        x
      </button>
      <div>{playlist.videos.length} videos</div>
    </Link>
  );
};

export { PlaylistCard };
