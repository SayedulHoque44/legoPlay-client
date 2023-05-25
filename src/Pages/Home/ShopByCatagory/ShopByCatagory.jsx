import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CatagoryCard from "./CatagoryCard";

const ShopByCatagory = () => {
  const [tabValue, setTabValue] = useState("City");
  const [toys, setToys] = useState([]);
  //   console.log(tabValue);
  useEffect(() => {
    fetch(
      `https://lego-play-server.vercel.app/toys?category=${tabValue}&limit=2`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [tabValue]);
  return (
    <div>
      <SectionTitle
        title={"Shop By Catagory"}
        info={"Here Some Shop Catagory"}
      />

      <Tabs defaultIndex={0} className={"text-center"}>
        <TabList>
          <Tab onClick={() => setTabValue("City")}>City</Tab>
          <Tab onClick={() => setTabValue("Star Wars")}>Star Wars</Tab>
          <Tab onClick={() => setTabValue("Friends")}>Friends</Tab>
        </TabList>

        <TabPanel
          className={"grid grid-cols-1  md:grid-cols-2 gap-3 md:w-2/3 mx-auto"}>
          {toys.map((toy) => (
            <CatagoryCard key={toy._id} toy={toy} />
          ))}
        </TabPanel>
        <TabPanel
          className={"grid grid-cols-1  md:grid-cols-2 gap-3 md:w-2/3 mx-auto"}>
          {toys.map((toy) => (
            <CatagoryCard key={toy._id} toy={toy} />
          ))}
        </TabPanel>
        <TabPanel
          className={"grid grid-cols-1  md:grid-cols-2 gap-3 md:w-2/3 mx-auto"}>
          {toys.map((toy) => (
            <CatagoryCard key={toy._id} toy={toy} />
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCatagory;
