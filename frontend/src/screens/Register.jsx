import { useState } from "react";
import FormContainer from "../components/FormContainer";
import { Link } from "react-router-dom";

export const Register = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return false;
    if (password !== confirmPassword) {
      setError("Mkae sure the password and confirm password are correct match");
      setTimeout(() => {
        setError("");
      }, 1000);
    }

    console.log("Login", email + ": " + password);
  };

  return (
    <FormContainer>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="col-lg-5 col-md-8 col-12 mx-auto shadow-sm p-5">
          {error && (
            <div className="alert alert-danger text-center mb-3">{error}</div>
          )}
          <h1 className="text-center title">Registeration form</h1> <hr />
          <div className="mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control"
              id="email"
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="password"
              value={password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              value={confirmPassword}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="register">I have Alread An Account? </label>
            <Link to={"/register"}> Login</Link>
          </div>
          <button className="btn btn-primary w-100 text-light">REGISTER</button>
        </div>
      </form>
    </FormContainer>
  );
};
