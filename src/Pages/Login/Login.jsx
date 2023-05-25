import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { legoContext } from "../../Provider/providerComp";
import { useTitle } from "../../useHooks/useTitle";

const Login = () => {
  const location = useLocation();
  const path = location.state?.from || "/";
  useTitle("LogIn");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { logIn, googleIn } = useContext(legoContext);
  const navigate = useNavigate();

  //   handleLogin
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password);

    // logIn
    logIn(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // console.log(loggedUser);
        setError("");
        setSuccess("Login Succesfull!");
        form.reset();
        navigate(path);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  // googleIn
  const handleGooglin = () => {
    googleIn()
      .then(() => {
        setError("");
        setSuccess("Registration Succesfull!");
        navigate(path);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              {success && <p className="text-green-600">{success}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <p>
              Not Register Yet?
              <Link className="text-blue-500" to={"/register"}>
                Register
              </Link>
            </p>
          </form>
          <div className="form-control mt-6">
            <button
              className="btn bg-orange-500 text-white"
              onClick={handleGooglin}>
              Google In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
