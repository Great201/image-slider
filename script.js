const slideContainer = document.querySelector(".slider");
// const deleteBtn = document.querySelector(".delete-btn");
const btnLeft = document.querySelector(".slider-btn-left");
const btnRight = document.querySelector(".slider-btn-right");

let sliderImages = [
  "https://images.unsplash.com/photo-1696110774237-96ea0301473c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1695982206556-b24503f14a0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1682687982049-b3d433368cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1695653420780-468f6918d460?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  "https://images.unsplash.com/photo-1695389016426-d4fc3305365a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
  "https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  'https://images.unsplash.com/photo-1683533876788-5b7b1e165a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[0]})`;
};

const updateSlider = () => {
  slideContainer.style.backgroundImage = `linear-gradient(
      to right,
      rgba(34, 34, 34, 0.4),
      rgba(68, 68, 68, 0.4)
    ), url(${sliderImages[slideCounter]})`;
};

btnRight.addEventListener("click", () => {
  slideCounter = (slideCounter + 1) % sliderImages.length;
  updateSlider();
});

btnLeft.addEventListener("click", () => {
  slideCounter = (slideCounter - 1 + sliderImages.length) % sliderImages.length;
  updateSlider();
});

// deleteBtn.addEventListener("click", () => {
//   if (sliderImages.length > 1) {
//     sliderImages.splice(slideCounter, 1);

//     if (slideCounter === sliderImages.length) {
//       slideCounter = 0;
//     }

//     updateSlider();
//   } else {
//     slideContainer.style.backgroundImage = "none";
//     sliderImages = [];
//   }
// });

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") {
    slideCounter =
      (slideCounter - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
  }

  if (e.code == "ArrowRight") {
    slideCounter = (slideCounter + 1) % sliderImages.length;
    updateSlider();
  }

  if (e.code == "Delete") {
    if (sliderImages.length > 1) {
      sliderImages.splice(slideCounter, 1);

      if (slideCounter === sliderImages.length) {
        slideCounter = 0;
      }

      updateSlider();
    } else {
      slideContainer.style.backgroundImage = "none";
      sliderImages = [];
    }
  }
});

document.addEventListener("DOMContentLoaded", startSlider);
