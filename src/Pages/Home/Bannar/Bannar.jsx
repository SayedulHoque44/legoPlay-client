import React from "react";

const Bannar = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://www.lego.com/cdn/cs/set/assets/bltb48f30756ea18da8/Princess_Toys_OG.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5")`,
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-7xl font-bold">WELCOME TO LEGOPLAY</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Browes Toys</button>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
