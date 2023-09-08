import { useState } from "react";

export default function Test() {
  const [show, setShow] = useState(true);

  console.log(show);
  return (
    <div className="">
      <div onClick={() => setShow(!show)} className="cursor-pointer">
        click
      </div>
      <div className="relative">
        <div className="h-screen ease-in-out duration-500">
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
          <div className="">sdfsdf</div>
        </div>

        <div
          className={
            show
              ? "bg-white h-screen absolute top-0 translate-y-0 w-full ease-in-out duration-300"
              : "bg-white h-screen w-full ease-in-out duration-300"
          }
        ></div>
      </div>
    </div>
  );
}
