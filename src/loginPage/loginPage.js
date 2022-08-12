import React from "react";
import "../App.css";
import {Link} from 'react-router-dom'
export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <h2>Login</h2>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button className="login-button" type="submit">
            Login
          </button>
          <Link to='/registerPage'>

            <button className="login-button" type="submit">
              Create Account
            </button>
          </Link>
          
        </div>
      </form>
    </div>
  );
}
