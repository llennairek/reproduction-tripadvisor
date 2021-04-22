const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const wrapper = document.querySelector(".divert .carousel-wrapper");
const item = wrapper.querySelector(".carousel-item");
const items = wrapper.querySelectorAll(".carousel-item");

const restWrapper = document.querySelector(".rest .carousel-wrapper");
const eatWrapper = document.querySelector(".eat .carousel-wrapper");

let left = 0;
const width = item.offsetWidth;
const wrapperWidth = wrapper.offsetWidth;

const forward = (e) => {
  // console.log(e.target);
  const temp = left;
  left -= 2 * (width + 16);
  if (left < (width + 16) * -(items.length - 2)) {
    left = temp;
    return;
  }
  items.forEach((element) => {
    element.style.transform = `translateX(${left}px)`;
  });
};

const backward = () => {
  const temp = left;
  left += 2 * (width + 16);
  if (left > 0) {
    left = temp;
    return;
  }
  items.forEach((element) => {
    element.style.transform = `translateX(${left}px)`;
  });
};

previous.addEventListener("click", backward);
next.addEventListener("click", forward);

// transform: translateX(calc(-100% - 16px));
