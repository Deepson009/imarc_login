import React, { useState } from "react";
import "./login.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log("hi");
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <div className="label-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              
            />
          </div>
          <span className="error">{emailError}</span>
        </div>
        <div className="login-form">
          <div className="label-input">
            <label htmlFor="password">Email</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              
            />
          </div>
          <span className="error">{passwordError}</span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
