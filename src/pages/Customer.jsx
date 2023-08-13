import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import NotFound from "../components/NotFound";
import { baseUrl } from "../utils/Sheare";
import AddCustomer from "../components/AddCustomer";

export default function Customer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState(null);
  const [tempCustomer, setTempCustomer] = useState(null);
  const [notFound, setNotFound] = useState(null);
  const [addCustomer, setAddCustomer] = useState(false);
  const [change, setChange] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!customer) return;
    if (!customer) return;

    let equal = true;
    if (customer.name !== tempCustomer.name) equal = false;
    if (customer.industry !== tempCustomer.industry) equal = false;

    if (equal) setChange(false);
  });

  useEffect(() => {
    const url = baseUrl + "/customers/" + id;

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"), //Bearar gap is importent
      },
    })
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        } else if (response.status === 401) {
          navigate("/login", {
            state: { previousUrl: location.pathname },
          });
        }

        if (!response.ok)
          throw new Error("Something went worng, try again leter");

        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setTempCustomer(data.customer);
        setError(undefined);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  function updateCustomer(e) {
    e.preventDefault();
    const url = baseUrl + "/customers/" + id;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access"), //Bearar gap is importent
      },
      body: JSON.stringify(tempCustomer),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Someting went worng...");
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
        setChange(false);
        setError(undefined);
      })
      .catch((e) => {
        setError(e.message);
      });
  }

  return (
    <div className="max-w-7xl mx-auto">
      {!notFound ? (
        <>
          {customer ? (
            <>
              <div className="py-10">
                <p>ID: {tempCustomer.id}</p>
                <form id="customer" onSubmit={updateCustomer}>
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    className="px-3 py-2 block my-2"
                    type="text"
                    value={tempCustomer.name}
                    onChange={(e) => {
                      setChange(true);
                      setTempCustomer({
                        ...tempCustomer,
                        name: e.target.value,
                      });
                    }}
                  />
                  <label htmlFor="industry">Industry</label>
                  <input
                    id="industry"
                    className="px-3 py-2 block"
                    type="text"
                    value={tempCustomer.industry}
                    onChange={(e) => {
                      setChange(true);
                      setTempCustomer({
                        ...tempCustomer,
                        industry: e.target.value,
                      });
                    }}
                  />
                </form>

                {change ? (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        setChange(false);
                        setTempCustomer({ ...customer });
                      }}
                      className="bg-gray-500 text-white px-5 rounded-sm"
                    >
                      Cancel
                    </button>
                    <button
                      form="customer"
                      className="bg-gray-500 text-white px-5 rounded-sm"
                    >
                      Save
                    </button>
                    <br />
                  </div>
                ) : null}
              </div>

              <div className="flex gap-5">
                <button
                  className="bg-amber-500 px-4 py-1 rounded-md active:bg-amber-200"
                  onClick={() => {
                    const url = baseUrl + "/customers/" + id;

                    fetch(url, {
                      method: "DELETE",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization:
                          "Bearer " + localStorage.getItem("access"), //Bearar gap is importent
                      },
                    })
                      .then((response) => {
                        if (!response.ok) {
                          throw new Error("Someting went worng......");
                        }
                        setError(undefined);
                        navigate("/customers");
                      })
                      .catch((e) => {
                        setError(e.message);
                      });
                  }}
                >
                  Delete
                </button>

                <button
                  onClick={() => setAddCustomer(!addCustomer)}
                  className="bg-amber-500 px-4 py-1 rounded-md active:bg-amber-200"
                >
                  Add Customer
                </button>
              </div>
            </>
          ) : null}

          {addCustomer ? <AddCustomer setAddCustomer={setAddCustomer} /> : null}
        </>
      ) : (
        <NotFound />
      )}

      {error ? <p className="text-red-500">{error}</p> : null}

      <div className="my-5 text-2xl">
        <Link className="bg-red-200 px-10 py-2  rounded-md" to={"/customers/"}>
          ← Go back
        </Link>
      </div>
    </div>
  );
}
