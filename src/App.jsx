import { BrowserRouter, Route, Routes } from "react-router-dom";
import Animation from "./components/Animation";
import { createContext, useEffect, useState } from "react";

//pages
import Customers from "./pages/Customers";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Grid from "./pages/tailwindTricks/Grid";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { baseUrl } from "./utils/Sheare";
import Singin from "./components/Singin";
import Test from "./pages/Test";

export const LoginContext = createContext();

function App() {
  Animation();
  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  useEffect(() => {
    function refreshToken() {
      if (localStorage.refresh) {
        const url = baseUrl + "/token/refresh/";

        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            refresh: localStorage.refresh,
          }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            localStorage.access = data.access;
            localStorage.refresh = data.refresh;
          });
      }
    }

    refreshToken();
    const minutes = 1000 * 60;
    setInterval(() => refreshToken, minutes * 5);
  });

  return (
    <>
      <div className="text-gray-800 bg-gradient-to-br from-sky-300 via-green-300 to-sky-300">
        <LoginContext.Provider value={[loggedIn, setLoggedIn]}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:id" element={<Customer />} />

              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/grid" element={<Grid />} />
              <Route path="/test" element={<Test />} />

              <Route path="/login" element={<Login />} />
              <Route path="/singin" element={<Singin />} />

              <Route path="/404" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LoginContext.Provider>
        <div className="mx-auto">
          <a
            className="py-3 text-3xl font-bold bg-yellow-300 text-center block"
            href="http://localhost:5173/"
          >
            Back
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
