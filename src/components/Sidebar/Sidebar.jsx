import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-container box-shadow">
      <nav className="navigation">
        <ul className="list-non-bullets aside-list gap-2">
          <li className="nav-list pd-y-base">
            <Link className="link" to="/">
              {" "}
              <i className="fa fa-home" aria-hidden="true" />
              Home
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link className="link" to="/playlist">
              <i className="fa fa-folder-open" aria-hidden="true" />
              Playlist
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link className="link" to="/liked">
              <i className="fa fa-thumbs-up" aria-hidden="true" />
              Liked
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link className="link" to="/watchlater">
              <i className="fa fa-bookmark" aria-hidden="true" />
              Watch Later
            </Link>
          </li>
          <li className="nav-list pd-y-base">
            <Link className="link" to="/history">
              <i className="fa fa-history" aria-hidden="true" />
              History
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export { Sidebar };
