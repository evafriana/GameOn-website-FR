// Topnav menu open management
const editNav = () => {
  const myTopnav = document.getElementById("myTopnav");
  if (myTopnav.className === "topnav") {
    document.body.style.overflowY = "hidden";
    myTopnav.className += " responsive";
  } else {
    document.body.style.overflowY = "";
    myTopnav.className = "topnav";
  }
};

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalBody = document.querySelector(".modal-body");
const modalSuccess = document.querySelector(".modal-success");
const modalClose = document.querySelectorAll(".close");
const formData = document.querySelectorAll(".formData");

// launch modal form
const launchModal = () => {
  // reset modal success if needed
  modalSuccess.style.display = "none";
  // then open modal form
  modalbg.style.display = "flex";
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
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const radios = document.getElementsByName("location");
  const checkBox = document.getElementById("checkbox1").checked;

  const namereg = /^[a-zA-Z][a-zA-Z- ]+[a-zA-Z]$/;
  const emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/;

  let valid = true;

  // reset error messages
  document.querySelectorAll(".err-txt").forEach((element) => {
    element.style.display = "none";
  });

  // reset border color
  [first, last, email, birthdate, quantity].forEach((input) => {
    input.style.border = "";
  });

  // check errors
  if (!first.value.match(namereg)) {
    first.style.border = "solid #f20";
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Le prénom n'est pas valide";
    valid = false;
  }
  if (first.value.trim() === "") {
    first.style.border = "solid #f20";
    document.getElementById("label-first").style.display = "inline";
    document.getElementById("label-first").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
  }

  if (!last.value.match(namereg)) {
    last.style.border = "solid #f20";
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML = "Le nom n'est pas valide";
    valid = false;
  }
  if (last.value.trim() === "") {
    last.style.border = "solid #f20";
    document.getElementById("label-last").style.display = "inline";
    document.getElementById("label-last").innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    valid = false;
  }

  if (!email.value.match(emailreg)) {
    email.style.border = "solid #f20";
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML =
      "Veuillez entrer un email valide.";
    valid = false;
  }
  if (email.value.trim() === "") {
    email.style.border = "solid #f20";
    document.getElementById("label-email").style.display = "inline";
    document.getElementById("label-email").innerHTML =
      "Veuillez entrer un email.";
    valid = false;
  }

  if (birthdate.value.trim() === "") {
    birthdate.style.border = "solid #f20";
    document.getElementById("label-birthdate").style.display = "inline";
    document.getElementById("label-birthdate").innerHTML =
      "Veuillez entrer votre date de naissance.";
    valid = false;
  }

  if (quantity.value.trim() === "") {
    quantity.style.border = "solid #f20";
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

  // final modal if valid form
  if (valid) {
    modalSuccess.style.display = "block";
    modalSuccess.innerHTML = `<div class="modal-success-text">Merci ! Votre réservation a été reçue.</div><button class="btn-submit button btn-close">Close</button>`;

    const btnClose = document.querySelector(".btn-close");

    if (btnClose) {
      btnClose.addEventListener("click", closeModal);
    }

    // reset form input values
    document.querySelectorAll(".text-control").forEach((element) => {
      element.value = "";
    });

    // reset form radio values
    radios.forEach((element) => {
      element.checked = false;
    });

    // TODO: send each formInputs value somewhere to be saved
    // then reset inputs
    document
      .querySelectorAll(".text-control")
      .forEach((input) => (input.value = ""));
    document
      .querySelectorAll(".checkbox-input")
      .forEach((checkbox) => (checkbox.checked = false));
    document.getElementById("checkbox1").checked = true;
  }

  // return false to prevent default action
  return false;
};
