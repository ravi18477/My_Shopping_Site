import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='main'>
      <form action="">
        <label htmlFor="username">Username</label>
        <br />
        <input type="text" id='name' placeholder='ravib18477@gmail.com' />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" id='name' />
      <br /><br />
         <input type="submit"  value={"Login"} name='login' id='submit'/>
      </form>

      <Link to='/registration'><p>Register for New User</p></Link>
          

    </div>
  )
}

export default Login
