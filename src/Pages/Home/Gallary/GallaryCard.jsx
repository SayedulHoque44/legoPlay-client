import React from "react";

const GallaryCard = ({ toy }) => {
  const { _id, picture, name } = toy;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default GallaryCard;
