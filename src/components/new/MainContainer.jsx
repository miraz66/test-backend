import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "./Nav";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MainContainer({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        {/* ----Header Section---- */}
        <div className="relative md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto font-sans">
          <div
            className={
              !isOpen
                ? "text-white px-5 absolute pt-10 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
                : "absolute px-5 pt-10 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
            }
          >
            <div className="text-2xl font-bold">
              {isOpen ? (
                <a className="flex items-" aria-label="Home" href="/">
                  <svg
                    className="w-14 h-14"
                    viewBox="0 0 93 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.441528 57.1661C2.74403 49.2945 5.80364 42.3799 10.6899 35.806C13.4217 32.1307 16.6328 28.0531 20.8114 25.9005C27.3346 22.5401 24.3263 31.45 23.3651 34.5262C21.1688 41.5559 19.1946 48.627 17.1407 55.6984C16.7376 57.0861 15.5582 61.2538 15.8656 59.8418C16.5865 56.5301 18.1765 53.1466 19.6704 50.1315C23.8163 41.7643 29.6943 32.3539 36.9179 26.2513C39.3361 24.2084 41.1917 23.9172 40.5228 27.8639C38.7095 38.5636 34.0796 48.6849 31.5722 59.2372C31.0117 61.5964 30.6634 62.8382 32.3445 60.1926C36.5442 53.583 41.0762 47.2348 46.1918 41.2999C54.0891 32.1376 62.5831 23.3559 71.6703 15.3677C78.0002 9.80325 84.6755 4.28555 92.2461 0.513092"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M90.1126 0.685474C85.3914 2.4363 80.67 4.17214 75.9325 5.87885"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                    ></path>
                    <path
                      d="M74.7472 6.91321C78.7247 7.08814 81.4453 7.12379 84.7777 9.15913C85.7829 9.77312 87.5776 11.2244 88.8196 11.2015C89.7424 11.1845 89.4334 8.33619 89.4708 7.75364C89.6306 5.26606 90.7651 3.55425 92.1383 1.569"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  miraz
                </a>
              ) : (
                <a aria-label="Home" href="/">
                  <a className="flex items-" aria-label="Home" href="/">
                    <svg
                      className="w-14 h-14"
                      viewBox="0 0 93 63"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.441528 57.1661C2.74403 49.2945 5.80364 42.3799 10.6899 35.806C13.4217 32.1307 16.6328 28.0531 20.8114 25.9005C27.3346 22.5401 24.3263 31.45 23.3651 34.5262C21.1688 41.5559 19.1946 48.627 17.1407 55.6984C16.7376 57.0861 15.5582 61.2538 15.8656 59.8418C16.5865 56.5301 18.1765 53.1466 19.6704 50.1315C23.8163 41.7643 29.6943 32.3539 36.9179 26.2513C39.3361 24.2084 41.1917 23.9172 40.5228 27.8639C38.7095 38.5636 34.0796 48.6849 31.5722 59.2372C31.0117 61.5964 30.6634 62.8382 32.3445 60.1926C36.5442 53.583 41.0762 47.2348 46.1918 41.2999C54.0891 32.1376 62.5831 23.3559 71.6703 15.3677C78.0002 9.80325 84.6755 4.28555 92.2461 0.513092"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M90.1126 0.685474C85.3914 2.4363 80.67 4.17214 75.9325 5.87885"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M74.7472 6.91321C78.7247 7.08814 81.4453 7.12379 84.7777 9.15913C85.7829 9.77312 87.5776 11.2244 88.8196 11.2015C89.7424 11.1845 89.4334 8.33619 89.4708 7.75364C89.6306 5.26606 90.7651 3.55425 92.1383 1.569"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    miraz
                  </a>
                </a>
              )}

              {isOpen ? (
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-8 sm:hidden"
                >
                  <rect
                    clipPath="url(#:r8:-clip)"
                    className="h-8 transition-all duration-300 fill-neutral-950 w-0 group-hover/logo:w-8"
                  ></rect>
                  <use
                    href="#:r8:-path"
                    className="stroke-neutral-950"
                    fill="none"
                    strokeWidth="1.5"
                  ></use>
                  <defs>
                    <path
                      id=":r8:-path"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id=":r8:-clip">
                      <use href="#:r8:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  className="h-8 sm:hidden"
                >
                  <rect
                    clipPath="url(#:ra:-clip)"
                    className="h-8 transition-all duration-300 fill-white w-0 group-hover/logo:w-8"
                  ></rect>
                  <use
                    href="#:ra:-path"
                    className="stroke-white"
                    fill="none"
                    strokeWidth="1.5"
                  ></use>
                  <defs>
                    <path
                      id=":ra:-path"
                      d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                    ></path>
                    <clipPath id=":ra:-clip">
                      <use href="#:ra:-path"></use>
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>

            <div className="flex justify-center gap-5 md:gap-10">
              <button
                onClick={() => navigate("/contact")}
                className={
                  isOpen
                    ? "bg-gray-900 text-white px-5 py-0.5 md:py-2 text-sm md:text-base rounded-full font-medium hover:bg-gray-600"
                    : "bg-white text-black px-5 py-0.5 md:py-1 text-sm md:text-base rounded-full font-medium hover:bg-gray-100"
                }
              >
                Contact us
              </button>
              <button className="" onClick={toggleMenu}>
                {isOpen ? (
                  <Bars2Icon className="w-7 h-10" />
                ) : (
                  <XMarkIcon className="w-7 h-10" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="h-screen  relative text-black bg-neutral-950 overflow-x-hidden">
          {/* ----Navigation Section---- */}
          <Nav />

          <div
            style={{ clipPath: "polygon(100% 0, 0% 100%, 0 0)" }}
            className={
              !isOpen
                ? "bg-white w-9/12 h-screen absolute top-0 left-0 -translate-x-full ease-in-out duration-500"
                : "bg-white w-full h-screen absolute top-0 left-0 ease-in-out duration-500"
            }
          >
            {children}
          </div>

          <div
            style={{
              clipPath: "polygon(100% -1px, -1% 100%, 100% 100%)",
            }}
            className={
              !isOpen
                ? "bg-white w-9/12 h-screen absolute top-0 right-0 translate-x-full ease-in-out duration-500"
                : "bg-white w-full h-screen absolute top-0 right-0 ease-in-out duration-500"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

MainContainer.propTypes = {
  children: PropTypes.array.isRequired,
};
