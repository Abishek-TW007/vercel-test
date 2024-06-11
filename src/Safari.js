import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; // Import your CSS file here

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const passwordInput = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      if (username && password) {
        navigate("/default");
      }
    }, 300);
  };


  return (
    <>
        <input type="text" name="email" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete={"off"}/>
        <input type="text" className="controlled"/>
        <input type="text" className="controlled"/>
        <input 
            autoComplete="off"
            name="password"
            readOnly={true}
            ref={passwordInput}
            onFocus={() => {passwordInput.current.type="password";passwordInput.current.readOnly=false}}
            placeholder="password" 
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <form  noValidate autoComplete="off" >
            <div className="controlled">
                <input type="password" value="dummy"/>
            </div>
            <button onClick={handleSubmit}>login</button>
        </form>
    </>
  );
};

export default LoginForm;




