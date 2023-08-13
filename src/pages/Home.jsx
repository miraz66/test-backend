import { useEffect } from "react";
import TopOnclick from "../components/TopOnclick";
import Header from "../components/Header";

function Home() {
  useEffect(() => {
    const tiltElements = document.querySelectorAll(".tilt");

    tiltElements.forEach((el) => {
      const height = el.clientHeight;
      const width = el.clientWidth;

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseout", handleMouseOut);
      el.addEventListener("mousedown", handleMouseDown);
      el.addEventListener("mouseup", handleMouseUp);

      function handleMove(e) {
        const xVal = e.layerX;
        const yVal = e.layerY;

        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);

        const string =
          "perspective(500px) rotateX(" +
          xRotation +
          "deg) rotateY(" +
          yRotation +
          "deg)";

        el.style.transform = string;
      }

      function handleMouseOut() {
        el.style.transform = "rotateX(0) rotateY(0)";
      }

      function handleMouseDown() {
        el.style.transform = "rotateX(0) rotateY(0)";
      }

      function handleMouseUp() {
        el.style.transform = "rotateX(0) rotateY(0)";
      }
    });
  }, []);

  const count = [1, 3, 4, 6, 7, 8];

  return (
    <>
      <div className="max-w-6xl h-[200rem] flex flex-col gap-10 py-10 mx-auto text-gray-800 ">
        <Header />
        {count.map((index) => (
          <div key={index} className="tilt h-44">
            Hover me
          </div>
        ))}

        {count.map((index) => (
          <div key={index} className="tilt"></div>
        ))}
      </div>

      <TopOnclick />
    </>
  );
}

export default Home;
