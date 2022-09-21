import axios from "axios";
import toast from "react-hot-toast";

const notify = (msg) => toast(msg);

const fetchVideos = async (dispatch) => {
  try {
    const response = await axios.get("/api/videos");
    dispatch({ type: "FETCH_VIDEOS", payload: response.data.videos });
  } catch (error) {
    console.log(error);
  }
};

const fetchCategories = async (dispatch) => {
  try {
    const response = await axios.get("/api/categories");
    dispatch({ type: "FETCH_CATEGORIES", payload: response.data.categories });
  } catch (error) {
    console.log(error);
  }
};

const requestLogin = async (dispatch, body, navigate, location) => {
  try {
    const response = await axios.post("/api/auth/login", body);
    dispatch({ type: "LOG_IN", payload: response.data });
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

const requestSignUp = async (dispatch, requestBody, navigate, location) => {
  try {
    const response = await axios.post("/api/auth/signup", requestBody);
    dispatch({ type: "SIGN_UP", payload: response.data });
    navigate(location?.state?.from?.pathname || "/", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

const fetchPlaylists = async (headers, dispatch) => {
  try {
    const response = await axios.get("/api/user/playlists", headers);
    dispatch({ type: "UPDATE_PLAYLIST", payload: response.data.playlists });
  } catch (error) {
    console.log(error);
  }
};

const requestAddPlaylist = async (requestBody, headers, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      requestBody,
      headers
    );
    dispatch({ type: "UPDATE_PLAYLIST", payload: response.data.playlists });
    notify("Playlist Created");
  } catch (error) {
    notify("Some Error Occured");
    console.log(error);
  }
};

const requestDeletePlaylist = async (playlistId, headers, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}`,
      headers
    );
    dispatch({ type: "UPDATE_PLAYLIST", payload: response.data.playlists });
    notify("Playlist Deleted");
  } catch (error) {
    console.log(error);
    notify("Some Error Occured");
  }
};

const fetchSinglePlaylist = async (playlistId, headers) => {
  try {
    const response = await axios.get(
      `/api/user/playlists/${playlistId}`,
      headers
    );
    return response.data.playlist;
  } catch (error) {
    console.log(error);
  }
};
const requestAddVideoInPlaylist = async (
  playlistId,
  requestBody,
  headers,
  dispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video: requestBody },
      headers
    );
    dispatch({
      type: "UPDATE_SINGLE_PLAYLIST",
      payload: response.data.playlist,
    });
    notify("Added Video in Playlist");
  } catch (error) {
    notify("Some Error occured");
    console.log(error);
  }
};

const requestDeleteVideoInPlaylist = async (
  playlistId,
  videoId,
  headers,
  dispatch
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      headers
    );
    dispatch({
      type: "UPDATE_SINGLE_PLAYLIST",
      payload: response.data.playlist,
    });
    notify("Deleted Video from Playlist");
  } catch (error) {
    console.log(error);
  }
};

const fetchWatchLater = async (headers, dispatch) => {
  try {
    const response = await axios.get("/api/user/watchlater", headers);
    dispatch({
      type: "UPDATE_WATCHLATER",
      payload: response.data.watchlater,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestAddVideoInWatchLater = async (requestBody, headers, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video: requestBody },
      headers
    );
    dispatch({
      type: "UPDATE_WATCHLATER",
      payload: response.data.watchlater,
    });
    notify("Added in watchlater");
  } catch (error) {
    notify("Some Error Occured");
    console.log(error);
  }
};

const requestDeleteVideoInWatchLater = async (videoId, headers, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/watchlater/${videoId}`,
      headers
    );
    dispatch({
      type: "UPDATE_WATCHLATER",
      payload: response.data.watchlater,
    });
    notify("Removed from watchlater");
  } catch (error) {
    notify("Some Error Occured");
    console.log(error);
  }
};

const fetchVideo = async (videoId) => {
  try {
    const response = await axios.get(`/api/video/${videoId}`);
    return response.data.video;
  } catch (error) {
    console.log(error);
  }
};

const fetchRelatedVideos = async (videoid, category) => {
  try {
    const response = await axios.get("/api/videos");
    return response.data.videos.filter(
      (item) => item.category.includes(category) && item._id !== videoid
    );
  } catch (error) {
    console.log(error);
  }
};

const fetchHistory = async (headers, dispatch) => {
  try {
    const response = await axios.get("/api/user/history", headers);
    dispatch({
      type: "UPDATE_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchLikes = async (headers, dispatch) => {
  try {
    const response = await axios.get("/api/user/likes", headers);
    dispatch({
      type: "UPDATE_LIKES",
      payload: response.data.likes,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestAddVideoInHistory = async (requestBody, headers, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video: requestBody },
      headers
    );
    dispatch({
      type: "UPDATE_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestAddVideoInLikes = async (requestBody, headers, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video: requestBody },
      headers
    );
    dispatch({
      type: "UPDATE_LIKES",
      payload: response.data.likes,
    });
    notify("Added in Likes");
  } catch (error) {
    notify("Some Error Occured");
    console.log(error);
  }
};

const requestDeleteVideoInHistory = async (videoId, headers, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/history/${videoId}`,
      headers
    );
    dispatch({
      type: "UPDATE_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestDeleteAllHistory = async (headers, dispatch) => {
  try {
    const response = await axios.delete("/api/user/history/all", headers);
    dispatch({
      type: "UPDATE_HISTORY",
      payload: response.data.history,
    });
  } catch (error) {
    console.log(error);
  }
};

const requestDeleteVideoInLikes = async (videoId, headers, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${videoId}`, headers);
    dispatch({
      type: "UPDATE_LIKES",
      payload: response.data.likes,
    });
    notify("Removed from Likes");
  } catch (error) {
    notify("Some Error Occured");
    console.log(error);
  }
};

export {
  fetchVideos,
  fetchCategories,
  requestLogin,
  requestSignUp,
  fetchPlaylists,
  requestAddPlaylist,
  requestDeletePlaylist,
  fetchSinglePlaylist,
  requestAddVideoInPlaylist,
  requestDeleteVideoInPlaylist,
  fetchWatchLater,
  requestAddVideoInWatchLater,
  requestDeleteVideoInWatchLater,
  fetchVideo,
  fetchRelatedVideos,
  fetchHistory,
  requestAddVideoInHistory,
  requestDeleteVideoInHistory,
  requestDeleteAllHistory,
  fetchLikes,
  requestAddVideoInLikes,
  requestDeleteVideoInLikes,
};
