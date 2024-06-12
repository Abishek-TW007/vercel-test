import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"; 

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
            navigate("/default")
        }
    },[isSubmitted])

 

  return (
    <div className="container">
        <div className="loginform">
            <h1>Login form</h1>
            <input type="text"  placeholder="Enter User Name" value={username} onChange={(e) => setUsername(e.target.value)} id="country" autoComplete={"off"}/>
            <input type="text" id="userId" className="controlled"/>
            <input type="text" className="controlled"/>
            {<input 
                autoComplete="one-time-code"
                readOnly={true}
                ref={passwordInput}
                onFocus={() => {passwordInput.current.type="password";passwordInput.current.readOnly=false}}
                placeholder="Enter Password" 
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
        </div>
    </div>
  );
};



// return (
//     <div className="container">
//         <div className="loginform">
//             <h1>Login form</h1>
//             <form  noValidate autoComplete="off" className="loginform">
//                 <div className="controlled">
//                     <input type="password" />
//                 </div>
//                 <input type="text"  placeholder="Enter User Name" value={username} onChange={(e) => setUsername(e.target.value)} id="country" autoComplete={"off"}/>
//                 <input type="text" id="userId" className="controlled"/>
//                 <input type="text" className="controlled"/>
//                 <input 
//                     autoComplete="one-time-code"
//                     readOnly={true}
//                     ref={passwordInput}
//                     onFocus={() => {passwordInput.current.type="password";passwordInput.current.readOnly=false}}
//                     placeholder="Enter Password" 
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button 
//                     type="submit"
//                     onClick={handleSubmit}
//                 >
//                     login
//                 </button>
//             </form>
//         </div>
//     </div>
//   );
// };

export default LoginForm;






