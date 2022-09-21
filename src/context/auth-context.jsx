import { createContext, useContext, useReducer, useEffect } from "react";
import { authReducer, initialUserState } from "../utils/auth-reducer";
import { fetchPlaylists, fetchWatchLater } from "../utils/server-request";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userState, userDispatch] = useReducer(authReducer, initialUserState);
  useEffect(() => {
    const headers = {
      headers: { authorization: userState.userToken },
    };
    fetchPlaylists(headers, userDispatch);
    fetchWatchLater(headers, userDispatch);
  }, [userState.userToken]);
  return (
    <AuthContext.Provider value={{ userState, userDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
