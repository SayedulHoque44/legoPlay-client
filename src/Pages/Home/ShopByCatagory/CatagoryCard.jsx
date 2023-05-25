import React from "react";
import { Link } from "react-router-dom";

const CatagoryCard = ({ toy }) => {
  const { _id, picture, name, price, ratings } = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">${price}</div>
        </h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Ratings : {ratings}</div>
        </div>
        <Link to={`/singleToyDetails/${_id}`}>
          <button className="btn btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CatagoryCard;
