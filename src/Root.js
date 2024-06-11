import React, { useRef, useEffect } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { useNavigate } from "react-router-dom";
import "./index.css"


const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const navigate = useNavigate();   
  const userNameInput = useRef(null);
  const passwordInput = useRef(null);

  function login() {
    props.parentCallback(true);
    // return navigate("/default");
    setTimeout(() => navigate("/default"), 1000);
  }
  const disableAutocomplete = () => {
    if (userNameInput.current) {
      userNameInput.current.setAttribute("autoComplete", "off");
    }
    if (passwordInput.current) {
      passwordInput.current.setAttribute("autoComplete", "off");
    }
  };

  const handleFocus = (inputRef) => {
    if (inputRef.current.hasAttribute('readonly')) {
      inputRef.current.removeAttribute('readonly');
      // Fix for mobile Safari to show virtual keyboard
      inputRef.current.blur();
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    disableAutocomplete();
    userNameInput.current.setAttribute("readonly", true);
    passwordInput.current.setAttribute("readonly", true);
    passwordInput.current.removeAttribute("name");
    userNameInput.current.removeAttribute("name");
    setTimeout(() =>{
        passwordInput.current.setAttribute("name", "password");
        userNameInput.current.setAttribute("name","email");
    },500)
    
  }, []);

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-6 is-offset-3">   
          <div className="box">
            <h1>Login</h1>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    ref={userNameInput}
                    className={`input ${errors.email && "is-danger"}`}
                    readOnly={true}
                    onFocus={() => handleFocus(userNameInput)}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    autoComplete="off"
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    _ngcontent-c24=""
                    tabIndex="-1"
                    autoComplete="new-password"
                    name="password0"
                    className="stealthy"
                    style={{ display: "none" }}
                    readOnly={true}
                    type="password"
                    value="Dummy@123"
                  />
                  <input
                    _ngcontent-c24=""
                    role="presentation"
                    id="pass"
                    placeholder="Enter Password"
                    aria-invalid="true"
                    aria-required="false"
                    aria-describedby="mat-error-2"
                    ref={passwordInput}
                    readOnly={true}
                    type="text"
                    onFocus={() =>{ passwordInput.current.type = "password";handleFocus(passwordInput)}}
                    className={`input ${errors.password && "is-danger"}`}
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <input
                    _ngcontent-c24=""
                    autoComplete="new-password"
                    readOnly={true}
                    name="password1"
                    style={{ display: "none" }}
                    type="password"
                    value="Dummy@123"
                  />

                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                onClick={(e) =>{
                handleSubmit(e)
            }}
              >
                Login
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
