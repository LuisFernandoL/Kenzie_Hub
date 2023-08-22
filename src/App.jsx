import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./components/providers/UserContext";
import GlobalStyles from "./components/Styles/GlobalStyles";

export const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <div>
      <ToastContainer />
      <GlobalStyles/>
      {loading ? <p> Carregando...</p> : <RoutesMain />}
    </div>
  );
};
