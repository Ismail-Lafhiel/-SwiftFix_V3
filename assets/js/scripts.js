//burger menu
const menu = document.querySelector('.menu');
const burger = document.querySelector('.hamburger');

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    menu.classList.toggle("active")
    console.log("done");
})
//end burger menu

/* services dropdown */

const dropDown = document.querySelector(".fa-caret-down")
const dropDownMenu = document.querySelector(".dropdown-menu")

dropDown.addEventListener("click", () => {
    dropDownMenu.classList.toggle("active")
})

/* end services dropdown */

// interactive search bar

const search = document.querySelector(".search-field");
const searchIcon = document.querySelector("#search-bar");
searchIcon.addEventListener("click", () => {
    search.classList.toggle("active");
    console.log("operation done");
})
//end interactive search bar
// start modal
const modal = document.getElementById("modal")
const openModal = () => {
    modal.classList.add("open-modal");
}
const closeModal = () => {
    modal.classList.remove("open-modal");   
}
// end modal
// start FAQ

const faPlus = document.querySelectorAll(".fa-plus")
const answer = document.querySelectorAll(".answer")
faPlus.forEach((fa, index) => {
    fa.addEventListener('click', () => {
        answer[index].classList.toggle("active")
    });
});

// end FAQ
// form handling
const form = document.getElementById("form");
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

});

// error messages
const nameError = document.getElementById("name-error")
const phoneError = document.getElementById("phone-error")
const emailError = document.getElementById("email-error")
const subjError = document.getElementById("subj-error")
const msgError = document.getElementById("msg-error")
//icons
const xmark = document.querySelector(".fa-xmark");
const check = document.querySelector(".fa-check");
const handleName = (xmark, check) => {
    const fullName = document.getElementById("full-name").value
    if (fullName == "") {
        nameError.innerHTML = "Name is required"
        nameError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Invalid name"
        nameError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false
    }
    nameError.innerHTML = "Valid"
    nameError.style.color = 'green'
    xmark.style.visibility = "hidden"
    check.style.visibility = "visible"
    return true;
}

const handleEmail = (xmark, check) => {
    const email = document.getElementById("email").value
    if (email == "") {
        emailError.innerHTML = "Email is required"
        emailError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g)) {
        emailError.innerHTML = "Invalid email"
        emailError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    emailError.innerHTML = "Valid"
    emailError.style.color = 'green'
    xmark.style.visibility = "hidden"
    check.style.visibility = "visible"
    return true;
}

const handlePhone = (xmark, check) => {
    const phone = document.getElementById("phone").value
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is required"
        phoneError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    else if (phone.length !== 10) {
        phoneError.innerHTML = "Phone should be 10 digits"
        phoneError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "You should only enter digits"
        phoneError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false;
    }
    else {
        phoneError.innerHTML = "Valid"
        phoneError.style.color = 'green'
        xmark.style.visibility = "hidden"
        check.style.visibility = "visible"
        return true
    }
}

const handleMsg = (xmark, check) => {
    const msg = document.getElementById("message").value;
    let require = 30
    let left = require - msg.length
    if (msg.length > 0 && msg.length < require) {
        msgError.innerHTML = left + " more characters required"
        msgError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false
    }
    else if(msg.length == 0){
        msgError.innerHTML = "You have to enter a message"
        msgError.style.color = 'red'
        xmark.style.visibility = "visible"
        check.style.visibility = "hidden"
        return false
    }
    msgError.innerHTML = "Valid"
    msgError.style.color = 'green'
    xmark.style.visibility = "hidden"
    check.style.visibility = "visible"
    return true
}
