import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { legoContext } from "../../Provider/ProviderComp";
import { useTitle } from "../../useHooks/useTitle";

const AddAToy = () => {
  useTitle("Add A Toy");
  const { user } = useContext(legoContext);
  const navigate = useNavigate();
  // handleAddToy
  const handleAddToy = (event) => {
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

    const newToy = {
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
    // console.log(newToy);
    fetch(`https://lego-play-server.vercel.app/toys`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert(`${name} is Added`);
          form.reset();
          navigate("/myToys");
        }
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add A Toy</h1>
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleAddToy} className="card-body">
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
                    defaultValue={user?.displayName}
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
                    defaultValue={user?.email}
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
                  name="detailDescription"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add A Toy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAToy;
