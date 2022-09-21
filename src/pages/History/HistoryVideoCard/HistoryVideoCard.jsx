import "./HistoryVideoCard.css";
import { Link } from "react-router-dom";
import { requestDeleteVideoInHistory } from "../../../utils/server-request";
import { useAuth } from "../../../context/auth-context";

const HistoryVideoCard = ({ video }) => {
  const {
    userState: { userToken },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleRemoveVideo = (e) => {
    e.preventDefault();
    requestDeleteVideoInHistory(video._id, headers, userDispatch);
  };

  return (
    <Link className="card-container playlist-card" to={`/watch/${video._id}`}>
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
        <button className="align-right pd-x-sm btn" onClick={handleRemoveVideo}>
          <i className="fa fa-2x fa-trash" />
        </button>
      </div>
    </Link>
  );
};

export { HistoryVideoCard };
