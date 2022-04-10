import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfrmPass, setCnfrmPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

  if(user){
    navigate('/')
  }

  const handleEmailOnBlur=(e)=>{
    setEmail(e.target.value)
  }
  const handlePassOnBlur=(e)=>{
    setPassword(e.target.value)
  }
  const handleConfrmPassOnBlur=(e)=>{
    setCnfrmPass(e.target.value)
  }

 

  const createUsers=(e)=>{
    e.preventDefault();
    if(password !== cnfrmPass){
      setError("Your password didn't match");
      return;
    }
    if(password.length <5){
      setError("Your password should 5 characters or longer")
      return;
    }

    

    createUserWithEmailAndPassword(email, password)
    
  }

  return (
    <div className="auth-form-container ">
      <div className="auth-form">
        <h1>Login</h1>
        <form onSubmit={createUsers}>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <div className="input-wrapper">
              <input onBlur={handleEmailOnBlur} type="text" name="email" id="email" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input onBlur={handlePassOnBlur} type="password" name="password" id="password" />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="password">Confirm Password</label>
            <div className="input-wrapper">
              <input onBlur={handleConfrmPassOnBlur} type="password" name="password" id="password" />
            </div>
          </div>
          <p style={{color:'red'}}>{error}</p>
          <button type="submit" className="auth-form-submit">
            Sign Up
          </button>
        </form>
        <p className="redirect">
          Already have account?
          <span>
            <Link to={"/login"}  className="redirect-span">Log In</Link>
          </span>
        </p>
        <div className="horizontal-divider">
          <div className="line-left" />
          <p>or</p>
          <div className="line-right" />
        </div>
        <div className="input-wrapper">
          <button className="google-auth">
            <span className="img-icon">
              <FcGoogle />
            </span>
            <p> Continue with Google </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
