import Header from "../components/Header";
// import Modal from "../utils/Modal";
import PopUpImage from "../components/PopUpImage";

// images
import gallery_1 from "../assets/gallery_1.jpg";
import gallery_2 from "../assets/gallery_2.jpg";
import gallery_3 from "../assets/gallery_3.jpg";
import gallery_4 from "../assets/gallery_4.jpg";
import gallery_5 from "../assets/gallery_5.jpg";
import gallery_6 from "../assets/gallery_6.jpg";
import { useState } from "react";

const data = [
  { id: 1, div: gallery_1 },
  { id: 2, div: gallery_2 },
  { id: 3, div: gallery_3 },
  { id: 4, div: gallery_4 },
  { id: 5, div: gallery_5 },
  { id: 6, div: gallery_6 },
];

function Test() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagesId, setImagesId] = useState();

  return (
    <>
      <Header />
      <div className="grid grid-cols-6  gap-5">
        {data.map(({ div, id }) => {
          return (
            <div
              className="h-32 w-full"
              key={id}
              onClick={() => setImagesId(id)}
            >
              <img className="w-full h-full" src={div} alt="" />

              {imagesId == id && <PopUpImage imgID={id} />}
            </div>
          );
        })}
      </div>

      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </>
  );
}

export default Test;
