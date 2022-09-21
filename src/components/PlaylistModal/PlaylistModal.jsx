import { useState } from "react";
import { useAuth } from "../../context/auth-context";
import {
  requestAddPlaylist,
  requestAddVideoInPlaylist,
  requestDeleteVideoInPlaylist,
} from "../../utils/server-request";
import "./PlaylistModal.css";

const PlaylistModal = ({ video, setIsAddToPlaylistActive }) => {
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [playlistDescription, setPlaylistDescription] = useState("");
  const [isCreatePlaylistActive, setIsCreatePlaylistActive] = useState(false);
  const {
    userState: {
      userToken,
      userDetails: { playlists },
    },
    userDispatch,
  } = useAuth();
  const headers = {
    headers: { authorization: userToken },
  };

  const handleCreateNewPlaylist = () => {
    setIsCreatePlaylistActive((previous) => !previous);
  };

  const handleAddPlaylist = () => {
    requestAddPlaylist(
      {
        playlist: {
          title: playlistTitle,
          description: "",
        },
      },
      headers,
      userDispatch
    );
    setPlaylistTitle("");
    setPlaylistDescription("");
  };

  const handleVideoInPlaylist = (playlist) => {
    playlist.videos.some((item) => item._id === video._id)
      ? requestDeleteVideoInPlaylist(
          playlist._id,
          video._id,
          headers,
          userDispatch
        )
      : requestAddVideoInPlaylist(playlist._id, video, headers, userDispatch);
  };

  return (
    <div className="modal fade show">
      <div className="modal-content">
        <div className="modal-container pd-x-lg">
          <button
            id="modal-close"
            className="modal-close btn btn-circle-bg"
            onClick={() => setIsAddToPlaylistActive(false)}
          >
            <i className="fa fa-times" aria-hidden="true" />
          </button>

          <h3>Save to...</h3>

          {playlists.map((playlist) => (
            <li key={playlist._id}>
              <label htmlFor={playlist._id}>
                <input
                  id={playlist._id}
                  name={playlist.title}
                  value={playlist.title}
                  type="checkbox"
                  onChange={() => handleVideoInPlaylist(playlist)}
                  checked={playlist.videos.some(
                    (item) => item._id === video._id
                  )}
                />
                {playlist.title}
              </label>
            </li>
          ))}

          {isCreatePlaylistActive && (
            <div className="flex-column gap-1 mg-y-sm">
              <input
                type="text"
                placeholder="Title"
                value={playlistTitle}
                onChange={(e) => setPlaylistTitle(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Description"
                value={playlistDescription}
                onChange={(e) => setPlaylistDescription(e.target.value)}
              />
              <button className="btn btn-primary " onClick={handleAddPlaylist}>
                create
              </button>
            </div>
          )}

          {!isCreatePlaylistActive && (
            <button
              onClick={handleCreateNewPlaylist}
              className="btn btn-primary mg-y-sm wd-full"
            >
              create new playlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
