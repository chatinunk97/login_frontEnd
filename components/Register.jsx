import RegisterObj from "../hooks/register-hook";
export default function Register() {
  const { handleUsername, handlePassword, handleMail, handleSubmit } =
    RegisterObj();
  return (
    <form className="register" onSubmit={handleSubmit}>
      <p>Register Here</p>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={handleUsername}></input>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"  onChange={handleMail}></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={handlePassword}></input>
      <input type="submit" value={"Submit"}></input>
    </form>
  );
}
