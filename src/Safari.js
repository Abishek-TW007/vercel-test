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
    //   if (username && password) {
        navigate("/default");
    //   }
    }, 300);
  };

  const handleKeys=(e) =>{
    console.log(e.target.value,"====>key")
  }


  return (
    <>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} id="country"/>
        <input 
        // autoComplete="new-password"
        readOnly={true}
        ref={passwordInput}
        onFocus={() => passwordInput.current.readOnly=false}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeys}
        />

        <form  noValidate autoComplete="off" >
            <div className="control">
                <input type="text" defaultValue=""/>
                <input type="password" autoComplete="new-password" defaultValue=""/>
            </div>
            <button onClick={handleSubmit}>login</button>
        </form>
    </>
  );
};

export default LoginForm;
