import "./Signup.css";
import { useState } from "react";
import { requestSignUp } from "../../utils/server-request";
import { useAuth } from "../../context/auth-context";
import { useLocation, useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { userDispatch } = useAuth();

  const navigate = useNavigate();
  let location = useLocation();

  const handleSignUp = async (e) => {
    e.preventDefault();
    requestSignUp(
      userDispatch,
      {
        email: email,
        password: password,
        name: name,
      },
      navigate,
      location
    );
  };

  return (
    <main className="align-center">
      <div className="box-shadow form-box auto-container align-center">
        <h1 className="h2">SignUp</h1>
        <form className="flex-column" onSubmit={handleSignUp}>
          <div className="input-box">
            <label className="label p-md txt-wt-md" htmlFor="email">
              Enter your Name:
            </label>
            <input
              className="input-border input"
              placeholder="Abhi"
              type="Name"
              id="Name"
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label className="label p-md txt-wt-md" htmlFor="email">
              Enter your email:
            </label>
            <input
              className="input-border input"
              placeholder="Email *"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-box">
            <label className="label p-md txt-wt-md" htmlFor="pwd">
              Password:
            </label>
            <input
              className="input-border input"
              placeholder="Password*"
              type="password"
              id="pwd"
              name="pwd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-checkbox">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="align-right">
              Forgot your Password
            </a>
          </div>
          <button
            className="btn btn-fill btn-primary btn-lg"
            type="submit"
            value="Submit"
          >
            SignUp
          </button>
          <Link className="pd-y-base align-center" to="/login">
            Already have an account
          </Link>
        </form>
      </div>
    </main>
  );
};

export { SignUp };
