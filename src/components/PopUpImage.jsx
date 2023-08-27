/* eslint-disable react/prop-types */
import gallery_1 from "../assets/gallery_1.jpg";
import gallery_2 from "../assets/gallery_2.jpg";
import gallery_3 from "../assets/gallery_3.jpg";
import gallery_4 from "../assets/gallery_4.jpg";
import gallery_5 from "../assets/gallery_5.jpg";
import gallery_6 from "../assets/gallery_6.jpg";

const data = [
  { id: 1, div: gallery_1 },
  { id: 2, div: gallery_2 },
  { id: 3, div: gallery_3 },
  { id: 4, div: gallery_4 },
  { id: 5, div: gallery_5 },
  { id: 6, div: gallery_6 },
];

export default function PopUpImage({ imgID }) {
  console.log(imgID);
  return (
    <>
      <div className="bg-yellow-200 h-2 w-2">
        {data.map(
          ({ id, div }) => imgID == id && <img key={id} src={div} alt="" />
        )}
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
      </div>
    </>
  );
}
