import axios from "axios";
const baseURL = "http://localhost:8000/user/register";
import Swal from "sweetalert2";

export default async (username, email, password) => {
  if (!username || !password) {
    console.log(" ##### Empty Value are not Allowed ######");
    return;
  }
  try {
    const { data } = await axios({
      method: "post",
      url: baseURL,
      data: {
        user: username,
        pw: password,
        mail: email,
      },
    });
    Swal.fire(
      "Register Successful !",
      `Nice to meet you ! ${data.username}`,
      "success"
    );
  } catch (error) {
    console.log(error);
  }
  console.log(username, email, password);
};
