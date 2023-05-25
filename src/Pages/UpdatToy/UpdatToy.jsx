import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useTitle } from "../../useHooks/useTitle";

const UpdatToy = () => {
  useTitle("Update Toy");
  //   const { user } = useContext(legoContext);
  const toy = useLoaderData();
  const navigate = useNavigate();
  //   console.log(toy);
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
  const handleUpdateToy = (event) => {
    // form
    event.preventDefault();
    const form = event.target;
    const name = form.toyName.value;
    const picture = form.picture.value;
    const category = form.subCategory.value;
    const seller_name = form.sellerName.value;
    const seller_email = form.sellerEmail.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const available_quantity = form.availableQuantity.value;
    const details = form.detailDescription.value;

    const updateToy = {
      name,
      picture,
      category,
      seller_name,
      seller_email,
      price,
      ratings,
      available_quantity,
      details,
    };
    // console.log(updateToy);
    fetch(`https://lego-play-server.vercel.app/myToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Toy Updated SuccessFull!");

          navigate("/myToys");
        } else {
          alert("Did Not Updated !");
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Update The Toy</h1>
        </div>
        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateToy} className="card-body">
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Toy Picture
                  </span>
                </label>
                <input
                  type="text"
                  name="picture"
                  defaultValue={picture}
                  required
                  placeholder="Picture Url"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Toy Name
                  </span>
                </label>
                <input
                  type="text"
                  name="toyName"
                  defaultValue={name}
                  required
                  placeholder="Toy Name"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Seller Name
                  </span>
                </label>
                <input
                  type="text"
                  name="sellerName"
                  defaultValue={seller_name}
                  required
                  placeholder="Seller Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Seller Email
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Seller Email"
                  name="sellerEmail"
                  defaultValue={seller_email}
                  required
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Sub-category
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Sub-category"
                  defaultValue={category}
                  name="subCategory"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  defaultValue={price}
                  name="price"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Rating
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Rating"
                  defaultValue={ratings}
                  name="ratings"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-blue-500">
                    Available quantity
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Available quantity"
                  name="availableQuantity"
                  defaultValue={available_quantity}
                  required
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-blue-500">
                  Detail description
                </span>
              </label>
              <input
                type="text"
                placeholder="Detail description"
                defaultValue={details}
                name="detailDescription"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatToy;
