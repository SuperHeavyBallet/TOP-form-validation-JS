const emailInput = document.getElementById("email-input");
console.log(emailInput);

emailInput.addEventListener("input", (event) =>{
   console.log("HEEEEE");
   if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity("I am expecting an email address!");
} else {
    emailInput.setCustomValidity("");
}
});
