import React, { useState, useRef } from 'react';

const PasswordInput = (props) => {
  const [inputType, setInputType] = useState('text');
  const iframeRef = useRef(null);
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.readOnly = false
    setInputType('password');
  };

  const handleBlur = () => {
    if (inputRef.current.value === '') {
      setInputType('text');
    }
  };

  return (

    <div>
  <input
        ref={inputRef}
        type={inputType}
        name="oekfejpj"
        autoComplete="new-password"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Password"
        readOnly={true}
        className={`input ${props.errors.oekfejpj && "is-danger"}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        onChange={props.handleChange}
        value={props.value || ""}
        required
    />
    </div>
  );
};

export default PasswordInput;


// import React, { useRef, useEffect } from 'react';

// const PasswordInput = () => {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     const input = inputRef.current;
//     const shadowRoot = input.attachShadow({ mode: 'closed' });

//     const inputField = document.createElement('input');
//     inputField.setAttribute('type', 'password');
//     inputField.setAttribute('placeholder', 'Password');
//     inputField.setAttribute('autocomplete', 'new-password');

//     shadowRoot.appendChild(inputField);

//     inputField.addEventListener('input', (e) => {
//       input.value = e.target.value;
//     });
//   }, []);

//   return <div ref={inputRef}></div>;
// };

// export default PasswordInput;



// import React, { useState, useRef } from 'react';

// const PasswordInput = () => {
//   const [password, setPassword] = useState('');
//   const iframeRef = useRef(null);

//   const handleChange = (e) => {
//     setPassword(e.target.value);
//   };

//   return (
//     <iframe
//       ref={iframeRef}
//       title="Password Input Frame"
//       style={{ border: 'none', width: '100%', height: '3rem' }} // Adjust height as needed
//       srcDoc={`
//         <html>
//           <head></head>
//           <body>
//             <input
//               type="password"
//               value="${password}"
//               placeholder="Password"
//               autoComplete="new-password"
//               style="width: 100%; height: 100%; padding: 0.5rem; font-size: 1rem;"
//             />
//           </body>
//         </html>
//       `}
//     />
//   );
// };

// export default PasswordInput;

