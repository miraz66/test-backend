import { useState } from "react";
import { baseUrl } from "../utils/Sheare";
import { useLocation, useNavigate } from "react-router-dom";
import UseFetch from "../hook/UseFetch";

function Login() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
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

  const url = baseUrl + "/token/";
  const { appendData, errorStatus } = UseFetch(url, {
    headers: { "Content-Type": "application/json" },
  });

  function login(e) {
    e.preventDefault();

    appendData(formData);

    if (!errorStatus) {
      navigate("/customers");
    }

    // fetch(url, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     localStorage.setItem("access", data.access);
    //     localStorage.setItem("refresh", data.refresh);
    //     navigate(
    //       location?.state?.previousUrl
    //         ? location.state.previousUrl
    //         : "/customers"
    //     );
    //   });
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <form className="w-96 mt-8" onSubmit={login}>
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
              placeholder="Google..."
              value={formData.username}
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
            Login
          </button>

          <a
            className="text-white font-bold bg-slate-400 px-10 py-1"
            href="/singin"
          >
            Sing in
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
