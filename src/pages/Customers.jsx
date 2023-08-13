import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/Sheare";
import AddCustomer from "../components/AddCustomer";
import useFetch from "../hook/UseFetch";

function Customers() {
  const [show, setShow] = useState(false);

  // Fetching  for data
  const url = baseUrl + "/customers/";
  const {
    request,
    data: { customers } = {},
    errorStatus,
  } = useFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access"), //Bearar gap is importent
    },
  });

  useEffect(() => {
    console.log(errorStatus);
    request();
  }, []);

  return (
    <>
      <div className="h-[50rem] w-screen bg-pink-100 overflow-hidden">
        <Header />
        <div className="max-w-6xl mx-auto m-20">
          {customers
            ? customers.map((data) => (
                <div key={data.id}>
                  <Link to={"/customers/" + data.id}>
                    {data.name}
                    <hr />
                  </Link>
                </div>
              ))
            : null}

          <button
            className="bg-gray-300 px-5 py-2"
            onClick={() => setShow(!show)}
          >
            AddCustomer
          </button>

          {show ? <AddCustomer setShow={setShow} /> : null}
        </div>
      </div>
    </>
  );
}
export default Customers;
