window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

const button = document.querySelector("button");
const error = document.querySelectorAll(".error");

button.addEventListener("click", validateForm);

function validateForm(e) {
  e.preventDefault();
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let form = document.forms[0];
  let name = form.elements.name;
  let lastName = form.elements.lastname;
  let email = form.elements.email;
  let password = form.elements.password;

  if (name.value == "") {
    let para = document.getElementById("name").classList;
    let para2 = document.getElementById("name-icon").classList;
    para.add("show");
    para2.add("show");
  } else {
    let para = document.getElementById("name").classList;
    let para2 = document.getElementById("name-icon").classList;
    para.remove("show");
    para2.remove("show");
  }
  if (lastName.value == "") {
    let para = document.getElementById("lastname").classList;
    let para2 = document.getElementById("lastname-icon").classList;
    para.add("show");
    para2.add("show");
  } else {
    let para = document.getElementById("lastname").classList;
    let para2 = document.getElementById("lastname-icon").classList;
    para.remove("show");
    para2.remove("show");
  }
  if (email.value == "" || emailRegex.test(email.value) == false) {
    let para = document.getElementById("email").classList;
    let para2 = document.getElementById("email-icon").classList;
    para.add("show");
    para2.add("show");
  } else {
    let para = document.getElementById("email").classList;
    let para2 = document.getElementById("email-icon").classList;
    para.remove("show");
    para2.remove("show");
  }
  if (password.value == "") {
    let para = document.getElementById("password").classList;
    let para2 = document.getElementById("password-icon").classList;
    para.add("show");
    para2.add("show");
  } else {
    let para = document.getElementById("password").classList;
    let para2 = document.getElementById("password-icon").classList;
    para.remove("show");
    para2.remove("show");
  }
}
