import LoginObj from "../hooks/login-hook";

export default function Login() {
  const { handlePassword, handleUsername, handleSubmit, username, password } =
    LoginObj();

  return (
    <form className="login" onSubmit={handleSubmit}>
      <p>Login</p>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleUsername}></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={handlePassword}></input>
      <input type="submit" value={"Login"}></input>
    </form>
  );
}
