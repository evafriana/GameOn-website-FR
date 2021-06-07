function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
function validate() {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  // let radios = document.getElementsByName("location");
  // let checkBox = document.getElementById("checkbox1").checked;

  let valid = 1;

  let namereg = /^[a-zA-Z]+$/;
  let emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

  if (first.trim() == "" && valid == 1) {
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = 0;
  }
  if (!first.match(namereg) && valid == 1) {
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Le prénom n'est pas valide";
    valid = 0;
  }

  if (last.trim() == "" && valid == 1) {
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = 0;
  }
  if (!last.match(namereg) && valid == 1) {
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML = "Le nom n'est pas valide";
    valid = 0;
  }

  if (email.trim() == "" && valid == 1) {
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML =
      "Please enter your email";
    valid = 0;
  }
  if (!email.match(emailreg) && valid == 1) {
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML = "Invalid email";
    valid = 0;
  }

  if (birthdate.trim() == "" && valid == 1) {
    document.getElementById("label-birthdate").style.display = "inline";
    document.getElementById("label-birthdate").innerHTML =
      "Vous devez entrer votre date de naissance.";
    valid = 0;
  }

  if (quantity.trim() == "" && valid == 1) {
    document.getElementById("label-quantity").style.display = "inline";
    document.getElementById("label-quantity").innerHTML =
      "Vous devez entrer le numero";
    valid = 0;
  }

  // for (let i = 0; i < radios.length; i++) {
  //   if (radios[i].type == "radio" && radios[i].checked && valid == 1) {
  //     document.getElementById("label-location").style.display = "inline";
  //     document.getElementById("label-location").innerHTML =
  //       "Vous devez choisir une option.";
  //     valid = 0;
  //   }
  // }

  // if (checkBox.checked == false && valid == 1) {
  //   document.getElementById("label-checkbox1").style.display = "inline";
  //   document.getElementById("label-checkbox1").innerHTML =
  //     "Vous devez vérifier que vous acceptez les termes et conditions.";
  //   valid = 0;
  // }

  if (valid == 1) {
    return true;
  } else {
    return false;
  }
}
