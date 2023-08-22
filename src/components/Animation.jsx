import { useEffect } from "react";

export default function Animation() {
  useEffect(() => {
    const animationRight = document.querySelectorAll(".animationRight");
    const animationLeft = document.querySelectorAll(".animationLeft");
    const animationBottom = document.querySelectorAll(".animationBottom");
    const animationTop = document.querySelectorAll(".animationTop");
    const animationPopUP = document.querySelectorAll(".animationPopUP");

    window.addEventListener("scroll", chackBoxs);

    function chackBoxs() {
      const triggerButton = (window.innerHeight / 5) * 4;

      animationRight.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationLeft.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationBottom.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationTop.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });

      animationPopUP.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerButton) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }

    chackBoxs();
  }, []);
}
