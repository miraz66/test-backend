import { useState } from "react";

export default function Test() {
  const [show, setShow] = useState(true);

  console.log(show);
  return (
    <>
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        click
      </div>
      <div className="relative h-screen bg-black overflow-y-hidden">
        <div className="">
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
        </div>
        <div
          className={
            !show
              ? "bg-white h-screen translate-y-full w-full ease-in-out duration-300 "
              : "bg-white h-screen w-full ease-in-out duration-300 translate-y-0"
          }
        >
          dsfsdfsdfsdf
        </div>
      </div>
      {!show && <div className="h-screen bg-white"></div>}
    </>
  );
}
