import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import "./LogIn.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleEmailOnBlur=(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordOnBlur=(e)=>{
    setPassword(e.target.value)
  }

  if(user){
    navigate('/')
  }

  const handleSignIn=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input onBlur={handleEmailOnBlur} type="text" name="email" id="email" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input onBlur={handlePasswordOnBlur} type="password" name="password" id="password" />
            </div>
          </div>
          <p style={{color:'red'}}>{error?.message}</p>
          {loading && <p>loading...</p>}
          <button type="submit" className="auth-form-submit">
            Login
          </button>
        </form>
        <p className="redirect">
          New to Ema john? <span><Link to={'/signup'}>Create New Account</Link></span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button className="google-auth">
          <span className="img-icon"><FcGoogle/></span>
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
