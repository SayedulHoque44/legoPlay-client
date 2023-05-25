import React, { useContext, useEffect, useState } from "react";
import { legoContext } from "../../Provider/providerComp";
import { useTitle } from "../../useHooks/useTitle";
import TableRow from "../AllToys/TableRow";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const MyToys = () => {
  useTitle("My Toys");
  const { user } = useContext(legoContext);
  const [toys, setToys] = useState([]);
  const [render, setRender] = useState(true);
  const [value, setValue] = useState(true);
  useEffect(() => {
    fetch(`https://lego-play-server.vercel.app/myToys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [render]);
  // console.log(toys);
  const handleSorting = () => {
    setValue(!value);
    let sortConditon = value ? 1 : -1;
    fetch(
      `https://lego-play-server.vercel.app/myToys?email=${user?.email}&sortValue=${sortConditon}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <SectionTitle title={"My Toys"} />
      <button className="btn bg-purple-500 mb-3" onClick={handleSorting}>
        {value ? "Accending By Price" : "Deaccending By Price"}
      </button>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <TableRow
                toy={toy}
                index={index + 1}
                setRender={setRender}
                render={render}
                key={toy._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
