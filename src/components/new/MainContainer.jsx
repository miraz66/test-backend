import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import Nav from "./Nav";

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
                ? "text-white px-5 absolute pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
                : "absolute px-5 pt-16 pb-10 w-full left-0 flex justify-between items-center z-50 ease-in-out duration-500"
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
                  <svg
                    viewBox="0 0 130 32"
                    aria-hidden="true"
                    className="group/logo h-8 max-sm:hidden"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      preserveAspectRatio="xMinYMid meet"
                    >
                      <rect
                        clipPath="url(#:rn:-clip)"
                        className="h-8 transition-all duration-500 fill-neutral-50 w-0 group-hover/logo:w-8"
                      ></rect>
                      <use
                        href="#:rn:-path"
                        className="stroke-neutral-50"
                        fill="none"
                        strokeWidth="1.5"
                      ></use>
                      <defs>
                        <path
                          id=":rn:-path"
                          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
                        ></path>
                        <clipPath id=":rn:-clip">
                          <use href="#:rn:-path"></use>
                        </clipPath>
                      </defs>
                    </svg>
                    <path
                      className="fill-neutral-50"
                      d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
                    ></path>
                  </svg>
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
                    : "bg-white text-black px-5 py-0.5 md:py-2 text-sm md:text-base rounded-full font-medium hover:bg-gray-100"
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

        <div className="h-screen md:h-[48rem] lg:h-[43rem] xl:h-[53rem] 2xl:h-screen relative text-black bg-neutral-950">
          {/* ----Navigation Section---- */}
          <Nav />

          <div
            className={
              !isOpen
                ? "bg-white h-[50rem] md:h-[43rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-screen absolute top-0 translate-y-full w-full ease-in-out duration-500 rounded-t-[2rem]"
                : "bg-white h-[50rem] md:h-[43rem] lg:h-[40rem] xl:h-[50rem] 2xl:h-screen absolute top-2  w-full ease-in-out duration-500 translate-y-0 rounded-t-[2rem]"
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
