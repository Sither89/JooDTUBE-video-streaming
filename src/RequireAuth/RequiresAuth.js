import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-context";

const RequiresAuth = () => {
  const location = useLocation();
  const { userState } = useAuth();

  return userState.userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export { RequiresAuth };
