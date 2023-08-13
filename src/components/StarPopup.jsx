// StarPopup.js
import { useEffect } from "react";

const StarPopup = () => {
  // const [stars, setStars] = useState([]);

  useEffect(() => {
    // Function to create a random star element
    const createStar = () => {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      document.body.appendChild(star);

      // Remove the star after 2 seconds
      setTimeout(() => {
        document.body.removeChild(star);
      }, 2000);
    };

    // Function to generate stars periodically
    const generateStars = () => {
      const intervalId = setInterval(() => {
        createStar();
      }, 300);

      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    };

    // Start generating stars on component mount
    generateStars();
  }, []);

  return <></>;
};

export default StarPopup;
