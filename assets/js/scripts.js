////// ------------------------------------------------- start burger menu ------------------------------------------------------------//////////////

const menu = document.querySelector(".menu");
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  console.log("done");
});
////// ------------------------------------------------- start burger menu ------------------------------------------------------------//////////////

////// ------------------------------------------------- start services dropdown ------------------------------------------------------------//////////////

const dropDown = document.querySelector(".fa-caret-down");
const dropDownMenu = document.querySelector(".dropdown-menu");

dropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
});

////// ------------------------------------------------- end services dropdown ------------------------------------------------------------//////////////

////// ------------------------------------------------- start interactive search bar ------------------------------------------------------------//////////////

const search = document.querySelector(".search-field");
const searchIcon = document.querySelector("#search-bar");
searchIcon.addEventListener("click", () => {
  search.classList.toggle("active");
  console.log("operation done");
});
////// ------------------------------------------------- end interactive search bar ------------------------------------------------------------//////////////



