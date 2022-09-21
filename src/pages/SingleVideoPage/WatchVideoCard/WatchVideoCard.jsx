import "./WatchVideoCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdOutlineWatchLater, MdWatchLater } from "react-icons/md";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useAuth } from "../../../context/auth-context";
import { PlaylistModal } from "../../../components/PlaylistModal/PlaylistModal";
import {
  requestAddVideoInWatchLater,
  requestDeleteVideoInWatchLater,
  requestAddVideoInLikes,
  requestDeleteVideoInLikes,
} from "../../../utils/server-request";
import { getNumberInFormat } from "../../../utils/number-format";

const WatchVideoCard = ({ video }) => {
  const [isAddToPlaylistActive, setIsAddToPlaylistActive] = useState(false);

  const navigate = useNavigate();

  const {
    userState: {
      userToken,
      userDetails: { watchlater, likes },
    },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleAddToWatchLater = () => {
    if (!userToken) {
      navigate("/login");
    }
    requestAddVideoInWatchLater(video, headers, userDispatch);
  };

  const handleDeleteVideoInWatchLater = () => {
    requestDeleteVideoInWatchLater(video._id, headers, userDispatch);
  };

  const handleAddToPlaylist = (e) => {
    e.stopPropagation();
    if (!userToken) {
      navigate("/login");
    }
    setIsAddToPlaylistActive(true);
  };
  const handleAddToLikes = () => {
    if (!userToken) {
      navigate("/login");
    }
    requestAddVideoInLikes(video, headers, userDispatch);
  };

  const handleDeleteVideoInLikes = () => {
    requestDeleteVideoInLikes(video._id, headers, userDispatch);
  };

  return (
    <div className="card-container watch-video-card mg-y-xl">
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${video._id}`}
          controls={true}
          playing={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="card-info">
        <h1 className="card-title video-title">{video.title}</h1>
      </div>
      <div className="card-action">
        <span className="alight-left">
          {getNumberInFormat(video.views)} views
        </span>
        <div className="align-right flex-row gap-2">
          {likes?.some((item) => item._id === video._id) ? (
            <button
              className="action-icon btn txt-md flex-row item-center"
              onClick={handleDeleteVideoInLikes}
            >
              <AiFillLike />
              <span className="desktop-element">Like</span>
            </button>
          ) : (
            <button
              className="action-icon btn txt-md flex-row item-center"
              onClick={handleAddToLikes}
            >
              <AiOutlineLike />
              <span className="desktop-element">Like</span>
            </button>
          )}

          {watchlater?.some((item) => item._id === video._id) ? (
            <button
              className="action-icon btn txt-md flex-row item-center"
              onClick={handleDeleteVideoInWatchLater}
            >
              <MdWatchLater />{" "}
              <span className="desktop-element">Watch Later</span>
            </button>
          ) : (
            <button
              className="action-icon btn txt-md flex-row item-center"
              onClick={handleAddToWatchLater}
            >
              <MdOutlineWatchLater />{" "}
              <span className="desktop-element">Watch Later</span>
            </button>
          )}

          <button
            className="action-icon btn txt-md flex-row item-center"
            onClick={handleAddToPlaylist}
          >
            <RiPlayListAddFill />{" "}
            <span className="desktop-element">Add To Playlist</span>
          </button>
        </div>
      </div>
      <div className="card-body pd-y-base">
        <div className="flex-row gap-2 item-center">
          <img
            width="35"
            height="35"
            className="img-responsive img-round"
            src={video.channelThumbnail}
            alt={video.channelName}
          />
          <span>{video.channelName}</span>
        </div>
        <p className="description">{video.description}</p>
      </div>
      {isAddToPlaylistActive && (
        <PlaylistModal
          video={video}
          setIsAddToPlaylistActive={setIsAddToPlaylistActive}
        />
      )}
    </div>
  );
};
export { WatchVideoCard };
