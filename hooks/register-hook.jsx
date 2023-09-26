import { useContext } from "react";
import {RegisterContext} from "../context/user-register";

export default () => {
    return useContext(RegisterContext)
}