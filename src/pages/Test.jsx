import { useState } from "react";

export default function Test() {
  const [show, setShow] = useState(true);

  console.log(show);
  return (
    <>
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        click
      </div>
      <div className="relative bg-black">
        <div className="h-screen">sdfsdf</div>
        <div className="">sdfsdf</div>
        <div className="">sdfsdf</div>
        <div className="">sdfsdf</div>
        <div
          className={
            !show
              ? "bg-white h-screen absolute top-10 w-full ease-in-out duration-300"
              : "bg-white h-screen w-full ease-in-out duration-300"
          }
        >
          dsfsdfsdfsdf
        </div>
      </div>
    </>
  );
}
