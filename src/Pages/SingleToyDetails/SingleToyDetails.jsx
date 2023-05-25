import React from "react";
import { useLoaderData } from "react-router-dom";
import { useTitle } from "../../useHooks/useTitle";

const SingleToyDetails = () => {
  useTitle("Details");
  const toy = useLoaderData();
  const {
    _id,
    picture,
    name,
    price,
    details,
    seller_name,
    seller_email,
    ratings,
    available_quantity,
  } = toy;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="px-10">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-3">{details}</p>
          <p className="py-3">Seller Name: {seller_name}</p>
          <p className="py-3">Seller Email: {seller_email}</p>
          <div>
            <div className="badge badge-outline">Price : ${price}</div>
            <div className="badge badge-outline mx-3">
              Quantity : {available_quantity}
            </div>
            <div className="badge badge-outline">Ratings : {ratings}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
