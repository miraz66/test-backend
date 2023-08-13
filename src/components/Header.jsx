import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../App";

const navigation = [
  { name: "Home", href: "/" },
  { name: "about", href: "/about" },
  { name: "Customers", href: "/customers" },
  { name: "Blog", href: "/blog" },
  { name: "Grid", href: "/grid" },
];

export default function Header() {
  const [loggedIn] = useContext(LoginContext);

  return (
    <>
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto bg-white max-full py-3 px-2 2xl:py-5 sm:px-8 lg:px-10">
              <div className="relative md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl  mx-auto flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex items-center">
                    <img className="w-10 md:w-16 xl:w-20" src={""} alt="" />
                    <a
                      className="text-green-400 font-bold text-3xl lg:text-5xl 2xl:text-7xl"
                      href="http://localhost:5173/"
                    >
                      E-Bus
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              "rounded-md text-lg font-medium py-1 px-5" +
                              (!isActive
                                ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                                : " no-underline bg-gray-900 text-white")
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static 
                              sm:inset-auto sm:ml-6 sm:pr-0 gap-3 cursor-pointer"
                >
                  <NavLink
                    to="/login"
                    className="text-white px-8 py-2 rounded-md bg-slate-600"
                    onClick={() => localStorage.clear()}
                  >
                    <span className="sr-only">View notifications</span>
                    {!loggedIn ? <span>Login</span> : <span>Log out</span>}
                  </NavLink>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-700">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "block rounded-md px-3 py-2 text-base font-medium" +
                        (!isActive
                          ? " no-underline text-gray-300 hover:bg-gray-700 hover:text-white"
                          : " no-underline bg-gray-900 text-white")
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
