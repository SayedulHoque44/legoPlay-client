import React from "react";
import { useTitle } from "../../../useHooks/useTitle";
import About from "../About/About";
import Bannar from "../Bannar/Bannar";
import BuyOrSell from "../BuyOrSell/BuyOrSell";
import Gallary from "../Gallary/Gallary";
import ShopByCatagory from "../ShopByCatagory/ShopByCatagory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Bannar />
      <Gallary />
      <ShopByCatagory />
      <About />
      <BuyOrSell />
    </div>
  );
};

export default Home;
