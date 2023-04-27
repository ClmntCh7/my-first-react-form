const StepTwo = ({ setSubmitted, name, email, password }) => {
  const handleEditInfo = () => {
    setSubmitted(false);
  };
  return (
    <div className="stepTwo">
      <div>
        <h1>Results</h1>
      </div>
      <div className="results">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button type="submit" onClick={handleEditInfo}>
        Edit your information
      </button>
    </div>
  );
};

export default StepTwo;
