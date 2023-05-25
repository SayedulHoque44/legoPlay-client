import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const About = () => {
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
    <div className="hero min-h-screen bg-base-200 py-48">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.lego.com/cdn/cs/set/assets/blt4a7ccd2874fe8e72/MakingWonder-202304-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5"
          className="max-w-lg rounded-lg shadow-2xl aos-init"
          data-aos="fade-left"
        />
        <div data-aos="fade-right" className="aos-init">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            optio dicta beatae ad soluta sequi pariatur atque?
          </p>
          <button className="btn btn-primary">More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
