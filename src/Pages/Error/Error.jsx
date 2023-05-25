import React from "react";
import { Link } from "react-router-dom";
import { useTitle } from "../../useHooks/useTitle";

const Error = () => {
  useTitle("Error");
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <Link to={"/"}>
            <button className="btn btn-primary"> Go To Home Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
