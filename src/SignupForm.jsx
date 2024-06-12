import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false)
  const passwordInput = useRef(null);
  const confirmPasswordInput = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (username && password && confirmPassword && email) {
        setIsSubmitted(true)
        passwordInput.current.type ="hidden"; 
        passwordInput.current.value =""; 
        confirmPasswordInput.current.type ="hidden"; 
        confirmPasswordInput.current.value ="";
        setPassword("");
        setConfirmPassword("")
      }
    }, 300);
  };

    useEffect(() =>{
        if(isSubmitted){
            navigate("/login")
        }
    },[isSubmitted])

 
return (
    <div className="container">
        <div className="signUpform">
            <h1>Login form</h1>
            <input type="text"  placeholder="Enter id" value={email} onChange={(e) => setEmail(e.target.value)} id="new-userid" autoComplete={"off"}/>
                <input type="text"  placeholder="Enter User Name" value={username} onChange={(e) => setUsername(e.target.value)} id="country" autoComplete={"off"}/>
                <input type="text" id="userId" className="controlled"/>
                <input type="text" className="controlled"/>
                <input 
                    autoComplete="one-time-code"
                    readOnly={true}
                    ref={passwordInput}
                    onFocus={() => {passwordInput.current.type="password";passwordInput.current.readOnly=false}}
                    placeholder="Enter Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                  <input 
                    autoComplete="one-time-code"
                    readOnly={true}
                    ref={confirmPasswordInput}
                    onFocus={() => {confirmPasswordInput.current.type="password";confirmPasswordInput.current.readOnly=false}}
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button 
                    onClick={handleSubmit}
                >
                    login
                </button>
            <form  noValidate autoComplete="off" className="signUpform">
                <div className="controlled">
                    <input type="password" />
                </div>
            </form>
        </div>
    </div>
  );
};

export default SignUpForm;






