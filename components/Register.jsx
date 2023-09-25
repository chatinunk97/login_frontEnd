export default function Register() {
  return (
    <div class="register">
      <p>Register Here</p>
      <label htmlFor="username">Username</label>
      <input type="text" id="username"></input>
      <label htmlFor="email">Email</label>
      <input type="text" id="email"></input>
      <label htmlFor="password">Password</label>
      <input type="password" id="password"></input>
      <input type="submit" value={"Login"}></input>
    </div>
  );
}
