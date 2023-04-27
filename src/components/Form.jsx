import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

const Form = ({
  setSubmitted,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPwd,
  setconfirmPwd,
}) => {
  const [hasError, setHasError] = useState(false);
  const [passwordVisibility, setPwdVisibility] =useState(false)

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePwdChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPwdChange = (event) => {
    const value = event.target.value;
    setconfirmPwd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password && confirmPwd && password === confirmPwd) {
      setSubmitted(true);
    } else if (password !== confirmPwd) {
      console.log("error");
      setHasError(true);
    }
  };

  const handlePwdVisibility = () => {
    setPwdVisibility(true)
  }

  console.log();

  return (
    <div className="form-container">
      <div>
        <h1>Create Account <i></i></h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jean Dupont"
            onChange={handleNameChange}
            value={name}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            placeholder="jeandupont@lereacteur.io"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type={!passwordVisibility? "password": "text"}
            placeholder="YourPassword23"
            onChange={handlePwdChange}
            value={password}
            className={hasError && "inputError"}
          /> 
          {/* <i className="eye" onMouseDown={handlePwdVisibility}><AiFillEye/></i> */}
          <i className="eye" onMouseDown={(test)=>{
              console.log(test)
          }}><AiFillEye/></i>
        </label>
        
        <label htmlFor="confirmPwd">
          Confirm your password
          <input
            id="confirmPwd"
            type="password"
            placeholder="YourPassword23"
            onChange={handleConfirmPwdChange}
            value={confirmPwd}
            className={hasError && "inputError"}
          />
        </label>
        {hasError && <p style={{ color: "red" }}>Password are different</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
