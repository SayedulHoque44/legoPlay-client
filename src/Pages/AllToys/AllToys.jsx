import React, { useEffect, useState } from "react";
import { useTitle } from "../../useHooks/useTitle";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import TableRow from "./TableRow";

const AllToys = () => {
  useTitle("All Toys");
  // const Toys = useLoaderData();
  const [Toys, setToys] = useState([]);
  const [render, setRender] = useState(true);
  useEffect(() => {
    fetch(`https://lego-play-server.vercel.app/allToys?limit=20`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [render]);
  // console.log(Toys);
  // search By Toy Name
  const handleSearch = (event) => {
    event.preventDefault();
    const name = event.target.searchValue.value;
    fetch(`https://lego-play-server.vercel.app/allToys?name=${name}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <div>
      <SectionTitle title={"All Toys"} />
      <form onSubmit={handleSearch} className="flex justify-center py-3">
        <input
          type="text"
          name="searchValue"
          placeholder="Enter Toy Name"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <button className="btn">Search</button>
      </form>
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
            {Toys.map((toy, index) => (
              <TableRow
                toy={toy}
                index={index + 1}
                key={toy._id}
                setRender={setRender}
                render={render}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
