import { useContext } from "react";
import { LevelContext } from "../context/login-context";

export default ()=>{
  return useContext(LevelContext)
}