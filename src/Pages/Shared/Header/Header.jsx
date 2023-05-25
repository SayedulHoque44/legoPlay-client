import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { legoContext } from "../../../Provider/providerComp";
import "./Header.css";

const Header = () => {
  const { logOut, user } = useContext(legoContext);
  // console.log(user);
  const handleLogout = () => {
    logOut()
      .then(() => alert("LogOut !!"))
      .catch(() => alert("Somthing Wrong"));
  };
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/allToys"}>All Toys</Link>
              </li>
              {user && (
                <>
                  <li>
                    <Link to={"/myToys"}>My Toys</Link>
                  </li>
                  <li>
                    <Link to={"/addAToy"}>Add A Toys</Link>
                  </li>
                </>
              )}
              <li>
                <Link to={"/Blogs"}>Blogs</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to={"/"}>
            <img
              className="h-full"
              src="https://i.ibb.co/qpvkHt1/LEGO-logo.png"
              alt=""
            />
            <span>LegoPlay</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              {" "}
              <Link to={"/allToys"}>All Toys</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/myToys"}>My Toys</Link>
                </li>
                <li>
                  <Link to={"/addAToy"}>Add A Toys</Link>
                </li>
              </>
            )}
            <li>
              {" "}
              <Link to={"/Blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end  relative">
          <div>
            {user ? (
              <button onClick={handleLogout} className="btn bg-red-500">
                LogOut
              </button>
            ) : (
              <Link to={"/login"}>
                <button className="btn bg-blue-500">Login</button>
              </Link>
            )}
          </div>
          {user?.photoURL && (
            <>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar propileImg">
                <div className="w-10 rounded-full ">
                  <img src={user.photoURL} />
                </div>
              </label>
              <p className="absolute userName hidden -bottom-6">
                {user.displayName}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
