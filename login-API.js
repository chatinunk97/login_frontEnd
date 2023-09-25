import axios from "axios";
const baseURL = "http://localhost:8000/user/login";
import Swal from "sweetalert2";

export default async (username, password) => {
  if (!username || !password) {
    return;
  }
  const { data } = await axios({
    method: "post",
    url: baseURL,
    data: {
      user: username,
      pw: password,
    },
  });
  if (data.loginResult === "ok") {
    Swal.fire("Login Successful !", `Welcome ,  ${username.toUpperCase()} !`, "success");
  } else {
    Swal.fire({
      title: "Login Failed!",
      text: data.loginResult,
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
};
