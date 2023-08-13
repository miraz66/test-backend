import { useState } from "react";
import { baseUrl } from "../utils/Sheare";
import PropTypes from "prop-types";
import UseFetch from "../hook/UseFetch";

const AddCustomer = ({ setAddCustomer, setShow }) => {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const url = baseUrl + "/customers/";
  const { appendData, errorStatus } = UseFetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"), //Bearar gap is importent
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    appendData(formData);

    if (!errorStatus) {
      setShow(false);
    }
  };

  return (
    <form className="w-96 mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="name"
        >
          Customer Name:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="name"
          name="name"
          placeholder="Google..."
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="industry"
        >
          Industry:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          id="industry"
          name="industry"
          placeholder="computing..."
          value={formData.industry}
          onChange={handleChange}
          required
        />
      </div>

      <button
        onClick={() => {
          setAddCustomer(false);
        }}
        type="submit"
        className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  );
};

AddCustomer.propTypes = {
  setAddCustomer: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default AddCustomer;
