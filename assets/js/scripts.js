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

////// ------------------------------------------------- start modal ------------------------------------------------------------//////////////

const modal = document.getElementById("modal");
const openModal = () => {
  modal.classList.add("open-modal");
};
const closeModal = () => {
  modal.classList.remove("open-modal");
};
////// ------------------------------------------------- end modal ------------------------------------------------------------//////////////

////// ------------------------------------------------- start FAQ ------------------------------------------------------------//////////////

const faPlus = document.querySelectorAll(".fa-plus");
const answer = document.querySelectorAll(".answer");
faPlus.forEach((fa, index) => {
  fa.addEventListener("click", () => {
    answer[index].classList.toggle("active");
  });
});

////// ------------------------------------------------- end FAQ ------------------------------------------------------------//////////////

////------------------------------------------------- form validation ---------------------------------------------------//////////////

// form handling
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const subject = document.getElementById("subject");

const validateFullName = () => {
  const nameError = document.getElementById("name-error");
  if (fullName.value.trim() === "") {
    handleError(fullName, nameError, "Full name is required");
    return false;
  } else if (!fullName.value.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)) {
    handleError(fullName, nameError, "Invalid Name");
    return false;
  } else {
    handleValid(fullName, nameError, "Valid");
    return true;
  }
};
const validateEmail = () => {
  const emailError = document.getElementById("email-error");
  if (email.value.trim() === "") {
    handleError(email, emailError, "Email is required");
    return false;
  } else if (
    !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)
  ) {
    handleError(email, emailError, "Invalid email");
    return false;
  } else {
    handleValid(email, emailError);
    return true;
  }
};

const validatePhone = () => {
  const phoneError = document.getElementById("phone-error");
  if (phone.value.trim() === "") {
    handleError(phone, phoneError, "Phone is required");
    return false;
  } else if (!phone.value.match(/^\+212[6-7]\d{8}$/)) {
    handleError(phone, phoneError, "Invalid phone");
    return false;
  } else {
    handleValid(phone, phoneError);
    return true;
  }
};

const validateMessage = () => {
  const messageError = document.getElementById("msg-error");
  if (message.value.trim() === "") {
    handleError(message, messageError, "Message is required");
    return false;
  } else {
    handleValid(message, messageError);
    return true;
  }
};
const validateSubject = () => {
  const subjectError = document.getElementById("subject-error");
  if (subject.value.trim() === "") {
    handleError(subject, subjectError, "Subject is required");
    return false;
  } else {
    handleValid(subject, subjectError);
    return true;
  }
};

fullName.addEventListener("input", validateFullName);
email.addEventListener("input", validateEmail);
phone.addEventListener("input", validatePhone);
message.addEventListener("input", validateMessage);
subject.addEventListener("input", validateSubject);

const handleError = (input, err, errorMessage) => {
  err.innerHTML = errorMessage;
  err.classList.add("error");
  input.classList.add("error");
  err.classList.remove("valid");
  input.classList.remove("valid");
  input.classList.add("apply-shake");
  setTimeout(() => {
    input.classList.remove("apply-shake");
  }, 1000);
};

const handleValid = (input, valid) => {
  valid.innerHTML = "Valid";
  valid.classList.add("valid");
  input.classList.add("valid");
  valid.classList.remove("error");
  input.classList.remove("error");
};
form.addEventListener("submit",  (e)=> {
  e.preventDefault();
  if (
    validateFullName() &&
    validateEmail() &&
    validatePhone() &&
    validateMessage() &&
    validateSubject()
  ) {
    submit.removeAttribute("disabled");
    // alert("Form submitted successfully");
  } else {
    submit.setAttribute("disabled", true);
    // alert("Form validation failed");
  }
});