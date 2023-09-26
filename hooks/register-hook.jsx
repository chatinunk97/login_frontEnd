import { useContext } from "react";
import { LevelContext } from "../context/user-register";

export default  ()=>{
    return useContext(LevelContext)
}