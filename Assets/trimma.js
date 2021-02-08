let togglenavbar = document.querySelector("#togglenavbar");
let menu = document.querySelector("#menu");
let menutoggle = false;
const togglenavbarFunc = () => {
  menutoggle = !menutoggle;
  if (menutoggle) {
    togglenavbar.classList.add("button-active-home");
  } else {
    togglenavbar.classList.remove("button-active-home");
  }
};
togglenavbar.addEventListener("click", togglenavbarFunc);
document.querySelector("#home").classList.add("homenav");
