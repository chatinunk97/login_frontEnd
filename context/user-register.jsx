import { createContext } from "react";

const LevelContext = createContext("Register Context Default");

export default function RegisterContext(props) {
  return (
    <LevelContext.Provider value={"Provider"}>
      {props.children}
    </LevelContext.Provider>
  );
}

export {LevelContext}