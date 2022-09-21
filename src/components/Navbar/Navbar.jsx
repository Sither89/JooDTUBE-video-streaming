import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { SearchBox } from "./SearchBox/SearchBox";

const Navbar = () => {
  const { userState, userDispatch } = useAuth();

  return (
    <header className="top-nav">
      <nav className="brand-nav navigation gap-1 box-shadow">
        <div className="flex-row wd-full">
          <Link className="logo-brand" to="/">
            PortalTube
          </Link>
          {userState.userToken ? (
            <button
              className="btn btn-primary-outline align-right mobile-element"
              onClick={() => userDispatch({ type: "LOG_OUT" })}
            >
              Logout
            </button>
          ) : (
            <Link
              className="btn btn-primary-outline align-right mobile-element"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>

        <SearchBox />

        {userState.userToken ? (
          <button
            className="btn btn-primary-outline desktop-element txt-md"
            onClick={() => userDispatch({ type: "LOG_OUT" })}
          >
            Logout
          </button>
        ) : (
          <Link
            className="btn btn-primary-outline desktop-element txt-md"
            to="/login"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Navbar };
