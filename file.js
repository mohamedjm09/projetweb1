function validateForm() {
  // Get the form element
  const form = document.getElementById("myForm");

  // Get the input fields
  const firstNameInput = form.elements["firstName"];
  const lastNameInput = form.elements["lastName"];
  const phoneNumberInput = form.elements["phoneNumber"];
  const emailInput = form.elements["email"];
  const addressInput = form.elements["address"];

  // Check the first name input
  if (firstNameInput.value === "") {
    alert("Please enter your first name.");
    return false;
  }

  // Check the last name input
  if (lastNameInput.value === "") {
    alert("Please enter your last name.");
    return false;
  }

  // Check the phone number input
  if (phoneNumberInput.value.length !== 8) {
    alert("Please enter a valid 8-digit phone number.");
    return false;
  }

  // Check the email input
  if (emailInput.value === "") {
    alert("Please enter your email address.");
    return false;
  }

  // Check the address input
  if (addressInput.value === "") {
    alert("Please enter your address.");
    return false;
  }

  // If all inputs are valid, submit the form

  alert("You receive your order in 7 days");
  return true;
}
filterObjects("all");
function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}



