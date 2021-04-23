/*---------------------*/
/* CAROUSEL */
/*---------------------*/

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
  left -= width + 16;
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
  left += width + 16;
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

/*---------------------*/
/* MODAL*/
/*---------------------*/

const modal = document.querySelector(".modal");
const button = document.querySelector(".nav-button");
const close = document.querySelector("#close-modal");

button.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("hidden");
});

close.addEventListener("click", () => {
  modal.classList.add("hidden");
});
/*---------------------*/
/* FORM SUBMIT*/
/*---------------------*/

const form = document.querySelector("#contact-form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const url = "https://reproduct-tripadvisor-backend.herokuapp.com/form-submit";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };
  try {
    const response = await axios.post(url, data);
    modal.classList.add("hidden");
    alert("Form submitted. Thank you for your message");
    // console.log(response);
  } catch (error) {
    console.log(error);
  }

  firstName.value = "";
  lastName.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
});
