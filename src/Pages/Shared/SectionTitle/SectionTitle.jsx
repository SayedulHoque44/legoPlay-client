import React from "react";

const SectionTitle = ({ title, info }) => {
  return (
    <div className="py-6 space-y-3 text-center">
      {title && <h1 className="text-5xl text-white">{title}</h1>}
      {info && <p>{info}</p>}
    </div>
  );
};

export default SectionTitle;
