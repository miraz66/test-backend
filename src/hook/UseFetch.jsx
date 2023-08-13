import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

export default function UseFetch(url, { method, headers, body } = {}) {
  const [data, setData] = useState();
  const [errorStatus, setErrorStatus] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const [, setLoggedIn] = useContext(LoginContext);

  function request() {
    fetch(url, {
      method: method,
      headers: headers,
      body: body,
    })
      .then((response) => {
        if (response.status == 401) {
          navigate("/login", { state: { previousUrl: location.pathname } });
        }
        if (!response.ok) {
          throw response.status;
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoggedIn(true);
      })
      .catch((e) => {
        setErrorStatus(e);
      });
  }

  function appendData(newData) {
    fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(newData),
    })
      .then((response) => {
        if (response.status == 401) {
          navigate("/login", { state: { previousUrl: location.pathname } });
        }

        if (!response.ok) {
          throw response.status;
        }

        if (response.status == 201) {
          navigate("/customers");
        }

        return response.json();
      })
      .then((d) => {
        // const sub = Object.values(d)[0];
        // console.log(data);
        // const newState = { ...data };

        // Object.values(newState)[0].push(sub);
        // console.log("In the then..", newState);

        // setData(newState);
        // console.log(":hlello");

        localStorage.setItem("access", d.access);
        localStorage.setItem("refresh", d.refresh);
        console.log(d);
      })
      .catch((e) => {
        setErrorStatus(e);
      });
  }

  return { request, appendData, data, errorStatus };
}
