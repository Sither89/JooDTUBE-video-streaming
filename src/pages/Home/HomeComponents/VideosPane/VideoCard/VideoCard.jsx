import { getNumberInFormat } from "../../../../../utils/number-format";
import "./VideoCard.css";
import { useState } from "react";
import { useAuth } from "../../../../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { PlaylistModal } from "../../../../../components/PlaylistModal/PlaylistModal";
import {
  requestAddVideoInWatchLater,
  requestDeleteVideoInWatchLater,
} from "../../../../../utils/server-request";

const VideoCard = ({ video }) => {
  const [isVideoOptionsActive, setIsVideoOptionsActive] = useState(false);
  const [isAddToPlaylistActive, setIsAddToPlaylistActive] = useState(false);
  const {
    userState: {
      userToken,
      userDetails: { watchlater },
    },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const navigate = useNavigate();

  const toggleVideoOption = (e) => {
    e.stopPropagation();
    setIsVideoOptionsActive((previous) => !previous);
  };

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    if (!userToken) {
      navigate("/login");
    }
    setIsAddToPlaylistActive(true);
    setIsVideoOptionsActive(false);
  };

  const handleAddToWatchLater = (e) => {
    e.stopPropagation();
    if (!userToken) {
      navigate("/login");
    }
    requestAddVideoInWatchLater(video, headers, userDispatch);
  };

  const handleDeleteVideoInWatchLater = (e) => {
    e.stopPropagation();
    if (!userToken) {
      navigate("/login");
    }
    requestDeleteVideoInWatchLater(video._id, headers, userDispatch);
  };

  return (
    <>
      <div
        className="card-container"
        onClick={() => navigate(`/watch/${video._id}`)}
      >
        <img
          className="card-img-top"
          src={video.videoThumbnail}
          alt={video.title}
          width="280"
        />
        <div className="card-info flex-row gap-1">
          <div>
            <h3 className="card-title txt-base">{video.title}</h3>
            <p className="card-author txt-base">{video.channelName}</p>
            <div className="card-author flex-row gap-1 txt-base">
              <span>{getNumberInFormat(video.views)} views</span>
              <span>{getNumberInFormat(video.likes)} likes</span>
            </div>
          </div>
          <button
            className="align-right pd-x-xsm btn btn-circle-bg"
            onClick={toggleVideoOption}
          >
            <i className="fas fa-ellipsis-v" />
          </button>

          {isVideoOptionsActive && (
            <ul className="additional-options box-shadow pd-y-sm">
              {watchlater.some((item) => item._id === video._id) ? (
                <li
                  className="pd-x-base pd-y-xs"
                  onClick={handleDeleteVideoInWatchLater}
                >
                  Remove from watchlater
                </li>
              ) : (
                <li
                  className="pd-x-base pd-y-xs"
                  onClick={handleAddToWatchLater}
                >
                  Add to watch later
                </li>
              )}
              <li className="pd-x-base pd-y-xs" onClick={handleAddToPlaylist}>
                Add to playlist
              </li>
            </ul>
          )}
        </div>
      </div>
      {isAddToPlaylistActive && (
        <PlaylistModal
          video={video}
          setIsAddToPlaylistActive={setIsAddToPlaylistActive}
        />
      )}
    </>
  );
};
export { VideoCard };
