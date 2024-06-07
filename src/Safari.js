import React, { useRef } from "react";

const LoginForm = () => {
  const passwordInputRef = useRef(null);

  const handlePasswordFocus = () => {
    passwordInputRef.current.type = "password";
  };

  return (
    <form>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        ref={passwordInputRef}
        onFocus={handlePasswordFocus}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
