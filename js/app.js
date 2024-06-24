const burgerIcon = document.getElementById("burgerIcon");
const burgerWrapper = document.getElementById("burgerList");

burgerIcon.addEventListener("click", () => {
  return burgerWrapper.classList.toggle("burger__active");
});
