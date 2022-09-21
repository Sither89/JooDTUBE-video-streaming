const initialUserState = {
  userToken: localStorage.getItem("userToken"),
  userDetails: JSON.parse(localStorage.getItem("userDetails")) || {
    createdAt: "",
    updatedAt: "",
    email: "",
    firstName: "",
    lastName: "",
    id: "",
    _id: "",
    likes: [],
    playlists: [],
    history: [],
    watchlater: [],
  },
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "SIGN_UP":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userDetails: payload.foundUser,
        userToken: payload.encodedToken,
      };

    case "LOG_IN":
      localStorage.setItem("userToken", payload.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(payload.foundUser));
      return {
        ...state,
        userDetails: payload.foundUser,
        userToken: payload.encodedToken,
      };

    case "LOG_OUT":
      localStorage.removeItem("userToken");
      localStorage.removeItem("userDetails");
      return { ...initialUserState };

    case "UPDATE_PLAYLIST":
      return {
        ...state,
        userDetails: { ...state.userDetails, playlists: payload },
      };

    case "UPDATE_SINGLE_PLAYLIST": {
      const newPlaylists = state.userDetails.playlists.map((item) =>
        item._id === payload._id ? payload : item
      );
      return {
        ...state,
        userDetails: { ...state.userDetails, playlists: newPlaylists },
      };
    }
    case "UPDATE_WATCHLATER":
      return {
        ...state,
        userDetails: { ...state.userDetails, watchlater: payload },
      };
    case "UPDATE_HISTORY":
      return {
        ...state,
        userDetails: { ...state.userDetails, history: payload },
      };

    case "UPDATE_LIKES":
      return {
        ...state,
        userDetails: { ...state.userDetails, likes: payload },
      };

    default:
      return state;
  }
};
export { authReducer, initialUserState };
