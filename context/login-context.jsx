import { createContext } from "react";
import { useState } from "react";
import loginAPI from "../API/login-API";

const LevelContext = createContext("DEFAULT from Context.js");

export default function LoginContext(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event)=>{
    loginAPI(username,password)
    event.preventDefault()
  }

  const sharedObj = {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit
  };
  return (
    <LevelContext.Provider value={sharedObj}>
      {props.children}
    </LevelContext.Provider>
  );
}

export { LevelContext };
