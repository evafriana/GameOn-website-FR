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
  resetModal();
};

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// is a radio btn checked ?
const isRadioChecked = (arr) => {
  let res = false;
  arr.forEach((element) => {
    if (element.type === "radio" && element.checked) {
      res = true;
    }
  });

  return res;
};

const resetModal = () => {
  // reset error messages
  document.querySelectorAll(".err-txt").forEach((element) => {
    element.innerHTML = "";
  });

  // reset border color
  document.querySelectorAll(".formData").forEach((element) => {
    element.dataset.errorVisible = false;
  });
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
  const emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]{2,}$/;

  let valid = true;

  // Validate birth date some time before today's date
  /**
   * @param {string} str birthdate
   * @return {boolean}
   */
  const validateBirthdate = (str) => {
    const date = Date.parse(str);
    const now = new Date();

    return date > now;
  };

  resetModal();

  // check errors
  /**
   * @param {HTMLElement} element DOM element
   * @param {string} name name of the element (label)
   * @param {string} message error message
   */
  const handleErrors = ({ element, name, message }) => {
    element.parentElement.dataset.errorVisible = true;
    const errorLabel = document.getElementById(`label-${name}`);
    errorLabel.innerHTML = message;
    valid = false;
  };

  if (!first.value.match(namereg)) {
    const message = "Le prénom n'est pas valide";
    handleErrors({ element: first, name: "first", message });
  }
  if (first.value.trim().length < 2) {
    const message = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    handleErrors({ element: first, name: "first", message });
  }

  if (!last.value.match(namereg)) {
    const message = "Le nom n'est pas valide";
    handleErrors({ element: last, name: "last", message });
  }
  if (last.value.trim().length < 2) {
    const message = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    handleErrors({ element: last, name: "last", message });
  }

  if (!emailreg.test(email.value)) {
    const message = "Veuillez entrer un email valide";
    handleErrors({ element: email, name: "email", message });
  }
  if (email.value.trim() === "") {
    const message = "Veuillez entrer un email";
    handleErrors({ element: email, name: "email", message });
  }

  if (validateBirthdate(birthdate.value.trim())) {
    const message = "Enter a valid birth date";
    handleErrors({ element: birthdate, name: "birthdate", message });
  }
  if (birthdate.value.trim() === "") {
    const message = "Veuillez entrer votre date de naissance";
    handleErrors({ element: birthdate, name: "birthdate", message });
  }

  if (quantity.value.trim() === "") {
    const message = "Veuillez entrer un numero";
    handleErrors({ element: quantity, name: "quantity", message });
  }

  if (!isRadioChecked(radios)) {
    document.getElementById("messsage-checked").innerHTML =
      "Veuillez choisir une option.";
    valid = false;
  }

  if (!checkBox) {
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

    // TODO: send each formInputs value somewhere to be saved
    // then reset inputs
    radios.forEach((element) => {
      element.checked = false;
    });
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
