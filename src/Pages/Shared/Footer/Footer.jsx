import React from "react";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img
          className="w-40"
          src="https://i.ibb.co/qpvkHt1/LEGO-logo.png"
          alt=""
        />

        <p>
          LegoPlay
          <br />
          Providing reliable tech since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Toy</a>
        <a className="link link-hover">City</a>
        <a className="link link-hover">Friend</a>
        <a className="link link-hover">Star Wars</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">All Toys</a>
        <a className="link link-hover">Admin</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
