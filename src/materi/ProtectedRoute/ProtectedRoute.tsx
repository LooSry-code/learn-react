import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({
  isAuthenticated,
  redirectPath = "/login",
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return;
  <div>
    <Outlet />
  </div>;
};

export default ProtectedRoute;
