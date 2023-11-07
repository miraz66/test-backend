import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

export default function MainHeader({ children }) {
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
                ? "text-white px-5 absolute pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
                : "absolute px-5 pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
            }
          >
            <div className="text-2xl font-bold">
              {isOpen ? (
                <a className="md:flex hidden" aria-label="Home" href="/">
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
                  mir@z
                </a>
              ) : (
                <a className="md:flex hidden" aria-label="Home" href="/">
                  <a
                    className="flex text-neutral-100"
                    aria-label="Home"
                    href="/"
                  >
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
                    mir@z
                  </a>
                </a>
              )}

              {isOpen ? (
                <a className="flex  md:hidden" aria-label="Home" href="/">
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
                </a>
              ) : (
                <a className="flex md:hidden" aria-label="Home" href="/">
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
                </a>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 9h16.5m-16.5 6.75h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="h-[50rem] md:h-[48rem] lg:h-[43rem] xl:h-[49rem] relative text-black bg-neutral-950">
          {/* ----Navigation Section---- */}
          <div className="text-white">hello</div>
          <div
            className={
              !isOpen
                ? "max-md:-mt-[5rem] h-[52rem] md:h-[43rem] lg:h-[40rem] xl:h-[47rem] absolute top-0 translate-y-full w-full ease-in-out duration-500"
                : "h-20 absolute top-2 w-full ease-in-out duration-500 translate-y-0"
            }
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

MainHeader.propTypes = {
  children: PropTypes.object.isRequired,
};
