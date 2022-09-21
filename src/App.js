import "./styles/index.css";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout/AppLayout";
import { Toaster } from "react-hot-toast";
import {
  Home,
  Login,
  SignUp,
  Playlist,
  SinglePlaylist,
  WatchLater,
  SingleVideoPage,
  History,
  Liked,
  PageNotFound,
  SearchResult,
} from "./pages";
import { RequiresAuth } from "./RequireAuth/RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:watchid" element={<SingleVideoPage />} />
          <Route path="/results" element={<SearchResult />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
          <Route element={<RequiresAuth />}>
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/playlist/:playlistid" element={<SinglePlaylist />} />
            <Route path="/watchlater" element={<WatchLater />} />
            <Route path="/history" element={<History />} />
            <Route path="/liked" element={<Liked />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={true} />
    </>
  );
}

export default App;
