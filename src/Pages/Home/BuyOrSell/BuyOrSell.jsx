import React from "react";
import { Link } from "react-router-dom";

const BuyOrSell = () => {
  return (
    <div className="md:flex w-full overflow-hidden mb-6 md:h-96">
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <div
          className="hero h-full"
          style={{
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/0088/7986/5907/files/Lego_Toycra2_800x445.jpg?v=1659352079")`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Buy Exlcusive Toy For Your Kids
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to={"/allToys"}>
                <button className="btn btn-primary">Buy Toys</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">OR</div>
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
        <div
          className="hero h-full"
          style={{
            backgroundImage: `url("https://www.product-reviews.net/sale/wp-content/uploads/2017/03/tesco-toy-sale-half-price.jpg")`,
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-white">
                Toy For Sell
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link to={"/addAToy"}>
                <button className="btn btn-primary">Add A Toy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrSell;
