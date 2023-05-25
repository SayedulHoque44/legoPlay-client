import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { legoContext } from "../../Provider/providerComp";

const TableRow = ({ toy, index, setRender, render }) => {
  const { user } = useContext(legoContext);
  const navigate = useNavigate();
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
    category,
  } = toy;

  //
  const handleDelete = (id, name) => {
    const diciiton = confirm("Are You Sure Delele It?");
    if (diciiton) {
      fetch(`https://lego-play-server.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${name} is Delete`);
            setRender(!render);
          } else {
            alert("Somting Wrong");
          }
        });
    }
  };
  // handleUpdate
  const handleUpdate = (id) => {
    console.log("up");
    <Navigate to={"/addAToy"} />;
  };
  return (
    <tr>
      <th>{index}</th>
      <td>{seller_name}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{available_quantity}</td>

      {user?.email === seller_email ? (
        <td>
          <button
            className="btn bg-purple-500 mr-3"
            onClick={() => navigate(`/updateToy/${_id}`)}>
            Update
          </button>
          <button
            className="btn bg-red-500"
            onClick={() => handleDelete(_id, name)}>
            Delete
          </button>
        </td>
      ) : (
        <td>
          <Link to={`/singleToyDetails/${_id}`}>
            <button className="btn bg-blue-700">View Details</button>
          </Link>
        </td>
      )}
    </tr>
  );
};

export default TableRow;
