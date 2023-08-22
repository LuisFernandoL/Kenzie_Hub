import { useContext } from "react";
import { UserContext } from "../../components/providers/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const { userLogin } = useContext(UserContext);
  return !userLogin ? <Outlet /> : <Navigate to="/pageuser" />;
};
