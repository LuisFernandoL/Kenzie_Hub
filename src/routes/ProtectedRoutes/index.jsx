import { useContext } from "react";
import { UserContext } from "../../components/providers/UserContext";
import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoutes = () => {
  console.log("fala fera");
  const { userLogin } = useContext(UserContext);
  return userLogin ? <Outlet /> : <Navigate to="/" />;
};
