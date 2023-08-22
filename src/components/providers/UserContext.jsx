import {  useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userLogin, setUserlogin] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [techs, setTechs] = useState([]);
  const [edditOpen, setEdditOpen] = useState(false);
  const [techsId, setTechsId] = useState("");
  const [loading, setLoading] = useState(false);

  const currentPath = window.location.pathname;
  const navigate = useNavigate();

  const createNewUser = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/users", formData);
      navigate("/");
      toast.success("Login criado com sucesso!", { autoClose: 4000 });
    } catch (error) {
      toast.error("Erro ao criar login");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (formData) => {
    try {
      setLoading(true);
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem("@TOKEN", data.token);
      localStorage.setItem("@USERID", data.user.id);
      setUserlogin(data.user);
      navigate(currentPath);
      toast.success("Login feito com sucesso!", { autoClose: 4000 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer login, senha e/ou email envalidos");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUserlogin(null);
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const loadUser = async () => {
      try {
        const { data } = await api.get(`/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserlogin(data);
        setTechs(data.techs);
      } catch (error) {
        console.log(error);
      }
    };

    if (token) {
      loadUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        userLogin,
        login,
        createNewUser,
        logout,
        isOpen,
        setIsOpen,
        techs,
        setTechs,
        edditOpen,
        setEdditOpen,
        techsId,
        setTechsId,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
