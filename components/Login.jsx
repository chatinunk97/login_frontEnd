import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <p>Login</p>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleUsername}></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={handlePassword}></input>
      <input type="submit" value={"Login"}></input>
    </div>
  );
}
