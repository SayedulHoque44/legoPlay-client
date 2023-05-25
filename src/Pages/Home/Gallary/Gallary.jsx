import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import GallaryCard from "./GallaryCard";

const Gallary = () => {
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`https://lego-play-server.vercel.app/toys?limit=6`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh(); // Call AOS.refresh() after initialization

    return () => {
      AOS.refresh({
        // Optionally, you can pass options to AOS.refresh() within the cleanup function
        debounceDelay: 50,
        throttleDelay: 99,
      });
    };
  }, []);
  return (
    <div className="w-2/3 mx-auto ">
      <SectionTitle
        title={"Gallary Section"}
        info={"Here Some Exclusive Toys For Yous Kids"}
      />
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-3 gap-3 aos-init">
        {toys.map((toy) => (
          <GallaryCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Gallary;
