import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import StepTwo from "./components/stepTwo";

const App = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setconfirmPwd] = useState("");

  return (
    <div className="app">
      {!submitted ? (
        <Form
          submitted={submitted}
          setSubmitted={setSubmitted}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPwd={confirmPwd}
          setconfirmPwd={setconfirmPwd}
        />
      ) : (
        <StepTwo
          setSubmitted={setSubmitted}
          name={name}
          email={email}
          password={password}
        />
      )}
    </div>
  );
};

export default App;
