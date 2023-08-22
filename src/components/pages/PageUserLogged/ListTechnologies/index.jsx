import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { MOdalEddit } from "../ModalEddit";
import { StylesListTechnologie } from "./StylesListTechnologies";

export const ListTechnologies = () => {
  const { techs, edditOpen, setEdditOpen, setTechsId } = useContext(UserContext);
  const handleEddit = (id) =>{
    setTechsId(id)
    setEdditOpen(true)
  }
  return (
    <StylesListTechnologie>
      {techs.map((tech) => (
        <li onClick={()=> handleEddit(tech.id)} key={tech.id}>
          <p>{tech.title}</p>
          <span>{tech.status}</span>
        </li>
      ))}
      {edditOpen ? <MOdalEddit/> :null}
    </StylesListTechnologie>
  );
};

