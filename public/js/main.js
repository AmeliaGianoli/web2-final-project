console.log("This is main.js...");

window.addEventListener("load", () => {

  const form = document.querySelector("#formContact");
  if (!form) return;
  
  const txtFirstName = form.querySelector("[name='firstName']");
  const txtLastName = form.querySelector("[name='lastName']");
  const txtEmail = form.querySelector("[name='email']");
  const txtComments = form.querySelector("[name='comments']");

  const vFirstName = form.querySelector("#vFirstName");
  const vLastName = form.querySelector("#vLastName");
  const vEmail = form.querySelector("#vEmail");
  const vComments = form.querySelector("#vComments");

  function validateEmailAddress(email) {
    var regExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regExp.test(email);
  };

  form.addEventListener("submit", (evt) => {
    if (validate()) {
      console.log("Everything is valid");
    } else {
      evt.preventDefault();
      console.log("Something is not valid");
    };
  });

  const validate = () => {
    // clear validation messages
    const spans = document.querySelectorAll(".validation");
    spans.forEach(span => span.innerHTML = "");
    let isValid = true;

    // validate firstName:
    if (txtFirstName.value.trim() === "") {
      isValid = false;
      vFirstName.textContent = "First name is required";
    };

    // validate lastName
    if (txtLastName.value.trim() === "") {
      isValid = false;
      vLastName.textContent = "Last name is required";
    };

    // validate email
    if (txtEmail.value.trim() === "") {
      isValid = false;
      vEmail.textContent = "Email is required";
    } else if (!validateEmailAddress(txtEmail.value)) {
      isValid = false;
      vEmail.textContent = "The email entered is not a valid email address";
    };

    // validate Comments:
    if (txtComments.value.trim() === "") {
      isValid = false;
      vComments.textContent = "Comments are required";
    };
    return isValid;
  }

});