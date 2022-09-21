import { HistoryVideoCard } from "./HistoryVideoCard/HistoryVideoCard";
import { useAuth } from "../../context/auth-context";
import { requestDeleteAllHistory } from "../../utils/server-request";

const History = () => {
  const {
    userState: {
      userDetails: { history },
      userToken,
    },
    userDispatch,
  } = useAuth();

  const headers = { headers: { authorization: userToken } };

  const handleDeleteAllHistory = () => {
    requestDeleteAllHistory(headers, userDispatch);
  };
  return (
    <main>
      <div className="flex-row item-center">
        <h1 className="align-left">History Videos</h1>
        <button
          className="align-right mg-x-xl txt-xl btn"
          onClick={handleDeleteAllHistory}
        >
          Clear All History
        </button>
      </div>

      <div className="single-playlist-layout">
        {history?.map((video) => (
          <HistoryVideoCard key={video._id} video={video} />
        ))}
      </div>
    </main>
  );
};

export { History };
