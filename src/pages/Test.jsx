import { useState } from "react";

export default function Test() {
  const [show, setShow] = useState(true);

  console.log(show);
  return (
    <>
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        click
      </div>
      <div className="relative bg-black h-screen"></div>
      <div
        className={
          !show
            ? "bg-white h-screen w-full absolute top-10 translate-y-full ease-in-out duration-300"
            : "bg-white h-screen w-full absolute top-10 translate-y-0 ease-in-out duration-300"
        }
      ></div>
    </>
  );
}
