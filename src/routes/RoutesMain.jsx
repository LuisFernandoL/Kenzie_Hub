import { Route, Routes } from "react-router-dom";
import { HomePage } from "../components/pages/Homepage";
import { RegisterPage } from "../components/pages/RegisterPage";
import { PageUserLogged } from "../components/pages/PageUserLogged";
import { TechnologiesProvider } from "../components/providers/TechnologiesContext";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/pageuser"
          element={
            <TechnologiesProvider>
              <PageUserLogged />
            </TechnologiesProvider>
          }
        />
      </Route>
    </Routes>
  );
};
