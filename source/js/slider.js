const wrapperEl = document.querySelector(".experience__image");
const bottomEl = document.querySelector(".experience__fat");
const topEl = document.querySelector(".experience__slim");
const sliderEl = document.querySelector(".experience__slider");

const mouse = {
  isMouseDown: false,
  positionX: 0
};

sliderEl.addEventListener("mousedown", function () {
  mouse.isMouseDown = true;
});

document.addEventListener("mouseup", function () {
  mouse.isMouseDown = false;
});

document.addEventListener("mousemove", function (event) {
  event.preventDefault();
  const { clientX } = event;
  const wrapperElRect = wrapperEl.getBoundingClientRect();
  const { left, right, width } = wrapperElRect;

  function getXPosition () {
    if (left > clientX) {
      return left;
    }
    if (clientX > right) {
      return right;
    }
    return clientX;
  };

  if (mouse.isMouseDown) {
    mouse.positionX = getXPosition();
    sliderEl.style.left = `${mouse.positionX - left - 20}px`;
    topEl.style.width = `${right - mouse.positionX}px`;
    bottomEl.style.width = `${mouse.positionX - left}px`;
  }
});
