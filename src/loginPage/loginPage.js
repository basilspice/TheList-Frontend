import React from 'react'
import '../App.css'
export default function LoginPage() {
  return (
    <div className='login-wrapper'>

    <h2>Login / Create Account</h2>
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
  <button className='login-button' type='submit'>Login</button>
  <button className='login-button' type='submit'>Create Account </button>
</div>
    </form>
    </div>

  )
}
