import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./index.css"; // Import your CSS file here

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)
  const passwordInput = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (username && password) {
        setIsSubmitted(true)
        passwordInput.current.type ="hidden"; 
        passwordInput.current.value =""; 
        setPassword("");
      }
    }, 300);
  };

    useEffect(() =>{
        if(isSubmitted){
            // const timer = setTimeout(() => {
            //     window.location.href = 'http://127.0.0.1:3000/default';
            //   }, 1000); // Redirects after 5 seconds
          
            //   return () => clearTimeout(timer);

            //   window.location.href = 'http://127.0.0.1:3000/default';

            navigate("/default")
             
            // try {
            //     const response =  axios.post('http://127.0.0.1:5000/login', {
            //       username,
            //       password
            //     }, { withCredentials: true });
            //    navigate("/default")
            //   } catch (error) {
            //     console.error('Login failed', error);
            //   }
        }
    },[isSubmitted])

 

  return (
    <>
        <input type="text"  placeholder="new-display-name" value={username} onChange={(e) => setUsername(e.target.value)} id="country" autoComplete={"off"}/>
        <input type="text" id="userId" className="controlled"/>
        <input type="text" className="controlled"/>
       
        {<input 
            autoComplete="one-time-code"
            readOnly={true}
            ref={passwordInput}
            onFocus={() => {passwordInput.current.type="password";passwordInput.current.readOnly=false}}
            placeholder="new-display-word" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />}

        <form  noValidate autoComplete="off" >
            <div className="controlled">
                <input type="password" />
            </div>
            <button 
            onClick={handleSubmit}>login</button>
        </form>
    </>
  );
};

export default LoginForm;






