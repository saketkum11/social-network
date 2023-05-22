import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { token, user } = useSelector((store) => store.auth);

  return token ? (
    children
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};
export { RequireAuth };
