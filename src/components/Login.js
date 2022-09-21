import React from "react";

const Login = ({ setLoggedIn }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setLoggedIn(true)}>Get Login</button>
    </div>
  );
};

export default Login;
