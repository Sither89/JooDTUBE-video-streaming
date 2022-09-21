import "./PlaylistVideoCard.css";
import { requestDeleteVideoInPlaylist } from "../../../utils/server-request";
import { useAuth } from "../../../context/auth-context";
import { useParams } from "react-router-dom";

const PlaylistVideoCard = ({ video }) => {
  const { playlistid } = useParams();

  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleRemoveVideo = () =>
    requestDeleteVideoInPlaylist(playlistid, video._id, headers, userDispatch);

  return (
    <div className="card-container playlist-card">
      <div className="card-part-1">
        <img
          className="card-img-top"
          src={video.videoThumbnail}
          alt={video.title}
        />
        <div className="card-info">
          <h3 className="card-title">{video.title}</h3>
          <p className="card-author">{video.channelName}</p>
        </div>
        <button className="align-right pd-x-sm" onClick={handleRemoveVideo}>
          <i className="fa fa-2x fa-trash" />
        </button>
      </div>
    </div>
  );
};

export { PlaylistVideoCard };
