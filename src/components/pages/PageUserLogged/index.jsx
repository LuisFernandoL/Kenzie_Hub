import { useContext } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { UserContext } from "../../providers/UserContext";



export const PageUserLogged = () => {
  
  return (
    <>
      <Header />
      <Main  />
    </>
  );
};
