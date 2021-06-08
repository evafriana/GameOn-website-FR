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

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
};

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal form
const closeModal = () => {
  modalbg.style.display = "none";
};

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// is a radio btn checked ?
const isRadioChecked = (arr) => {
  let res = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].type === "radio" && arr[i].checked) {
      res = true;
    }
  }
  return res;
};

// form validation
const validate = () => {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let email = document.getElementById("email").value;
  let birthdate = document.getElementById("birthdate").value;
  let quantity = document.getElementById("quantity").value;
  let radios = document.getElementsByName("location");
  let checkBox = document.getElementById("checkbox1").checked;

  console.log(radios);

  let valid = true;

  let namereg = /^[a-zA-Z][a-zA-Z- ]+[a-zA-Z]$/;
  let emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

  // reset error messages
  [
    "label-first",
    "label-last",
    "label-email",
    "label-birthdate",
    "label-quantity",
    "messsage-checked",
    "messsage-checkbox1",
  ].forEach((element) => {
    if (document.getElementById(element)) {
      document.getElementById(element).style.display = "none";
    }
  });

  // check errors
  if (!first.match(namereg)) {
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Le prénom n'est pas valide";
    valid = false;
  }
  if (first.trim() === "") {
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
  }

  if (!last.match(namereg)) {
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML = "Le nom n'est pas valide";
    valid = false;
  }
  if (last.trim() === "") {
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
  }

  if (!email.match(emailreg)) {
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML =
      "Veuillez entrer un email valide.";
    valid = false;
  }
  if (email.trim() === "") {
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML =
      "Veuillez entrer un email.";
    valid = false;
  }

  if (birthdate.trim() === "") {
    document.getElementById("label-birthdate").style.display = "inline";
    document.getElementById("label-birthdate").innerHTML =
      "Veuillez entrer votre date de naissance.";
    valid = false;
  }

  if (quantity.trim() === "") {
    document.getElementById("label-quantity").style.display = "inline";
    document.getElementById("label-quantity").innerHTML =
      "Veuillez entrer un numero.";
    valid = false;
  }

  if (!isRadioChecked(radios)) {
    document.getElementById("messsage-checked").style.display = "inline";
    document.getElementById("messsage-checked").innerHTML =
      "Veuillez choisir une option.";
    valid = false;
  }

  if (!checkBox) {
    document.getElementById("messsage-checkbox1").style.display = "inline";
    document.getElementById("messsage-checkbox1").innerHTML =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
    valid = false;
  }

  return valid;
};
