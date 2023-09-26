import PropTypes from "prop-types";

import { useState } from "react";

export default function Test2({ children }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        click
      </div>
      <div className="h-screen bg-black overflow-y-hidden">
        <div className="relative">
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
        </div>
        <div
          className={
            !show
              ? "bg-white h-screen absolute top-10 translate-y-full w-full ease-in-out duration-700 rounded-xl"
              : "bg-white h-screen absolute top-10  w-full ease-in-out duration-700 translate-y-0 rounded-xl"
          }
        >
          {children}
        </div>
      </div>
    </>
  );
}

Test2.propTypes = {
  children: PropTypes.array.isRequired,
};
