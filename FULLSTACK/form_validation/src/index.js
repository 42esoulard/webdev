import "./style.css";

const inputs = Array.from(document.querySelectorAll("input"));
let password = '';
let passwordConfirmation = '';
let valid = true;


inputs.forEach((input) =>
  input.addEventListener("input", function () {
    valid = true;
    switch (input.id) {
      case "email":
        if (!input.checkValidity())
          valid = false;
        break;
      case "country":
        if (input.validity.rangeOverflow || input.validity.typeMismatch
          || input.validity.tooLong || input.validity.tooShort
          || !(/[a-zA-Z]/).test(input.value)) {
          input.setCustomValidity('Please enter a valid country');
          valid = false
        } else {
          input.setCustomValidity('');
          valid = true;
        }
        break;
      case "zip":
        if (input.validity.rangeOverflow || input.validity.typeMismatch
          || input.validity.tooLong || input.validity.tooShort
          || !(/[0-9]/).test(input.value)) {
          input.setCustomValidity('Please enter a valid zipcode');
          valid = false
        } else {
          input.setCustomValidity('');
          valid = true;
        }
        break;
      case "password":
        password = input.value;
        if (passwordConfirmation !== ''
        && input.value !== passwordConfirmation) {
          input.setCustomValidity('Password and password confirmation do not match');
          valid = false;
        }
        else {
          input.setCustomValidity('');
          valid = true;
        }
        break;
      case "passwordConfirmation":
        passwordConfirmation = input.value;
        if (input.value !== password) {
          input.setCustomValidity('Password and password confirmation do not match');
          valid = false;
        }
        else {
          input.setCustomValidity('');
          valid = true;
        }
        break;
      default:
        return;
    }
    if (!valid)
      input.classList.add('invalid');
    else
      input.classList.remove('invalid');
  })
);
