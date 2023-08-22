import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const TechnologiesContext = createContext({});

export const TechnologiesProvider = ({ children }) => {
  const { setTechs, setIsOpen, techs, techsId, setEdditOpen } =
    useContext(UserContext);

  const newTechnologie = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, data]);
      setIsOpen(false);
      toast.success("Tecnologia criada com sucesso", { autoClose: 4000 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar tecnologia");
    }
  };

  const edditTechs = async (formData) => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.put(`/users/techs/${techsId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const getTechsEddit = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updat = getTechsEddit.data.techs;
      setTechs(updat);
      toast.success("Tecnologia editada com sucesso", { autoClose: 4000 });
      setEdditOpen(false);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar tecnologia");
    }
  };

  const deleteTechs = async () => {
    try {
      const token = localStorage.getItem("@TOKEN");
      await api.delete(`/users/techs/${techsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newList = techs.filter((tech) => tech.id !== techsId);
      toast.success("Tecnologia excluida com sucesso", { autoClose: 4000 });
      setEdditOpen(false);
      setTechs(newList);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechnologiesContext.Provider
      value={{ newTechnologie, deleteTechs, edditTechs }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
};
