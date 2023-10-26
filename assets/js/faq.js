////// ------------------------------------------------- start FAQ ------------------------------------------------------------//////////////

const faPlus = document.querySelectorAll(".fa-plus");
const answer = document.querySelectorAll(".answer");
faPlus.forEach((fa, index) => {
  fa.addEventListener("click", () => {
    answer[index].classList.toggle("active");
  });
});

////// ------------------------------------------------- end FAQ ------------------------------------------------------------//////////////