import { useState } from "react";
import { baseUrl } from "../utils/Sheare";
// import { useLocation, useNavigate } from "react-router-dom";
import UseFetch from "../hook/UseFetch";

function Singin() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const url = baseUrl + "/register/";
  const {
    appendData,
    data: { customers } = {},
    errorStatus,
  } = UseFetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  console.log(customers, errorStatus);
  console.log(formData);

  function Singin(e) {
    e.preventDefault();

    appendData(formData);
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="w-96 mt-8" onSubmit={Singin}>
        <div className="mb-4">
          <label
            className="block mb-2 text-xl font-bold text-gray-700"
            htmlFor="name"
          >
            UserName
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="name"
            name="username"
            placeholder="mahfuz"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-xl font-bold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            id="email"
            name="email"
            placeholder="hello@gamil.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-xl font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            id="password"
            name="password"
            placeholder="password..."
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-xl font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-200 focus-visible:ring-opacity-50"
        >
          Sing in
        </button>

        <a
          className="text-white font-bold bg-slate-400 px-10 py-1"
          href="/login"
        >
          login
        </a>
      </form>
    </div>
  );
}

export default Singin;
