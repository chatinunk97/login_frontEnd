import { createContext } from "react";
import { useState } from "react";
import registerAPI from "../API/register-API";

const LevelContext = createContext("Register Context Default");

export default function RegisterContext(props) {
  const [username, setUsername] = useState("");
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleMail = (event) => {
    setMail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    registerAPI(username, email, password);
  };
  const sharedObj = {
    username,
    password,
    email,
    handleUsername,
    handlePassword,
    handleMail,
    handleSubmit,
  };
  return (
    <LevelContext.Provider value={sharedObj}>
      {props.children}
    </LevelContext.Provider>
  );
}

export { LevelContext };
