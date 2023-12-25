const form = document.querySelector("form");

const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("email-error");

const countryInput = document.getElementById("country-input");
const countryError = document.getElementById("country-error");

const zipCodeInput = document.getElementById("zip-code-input");
const zipCodeError = document.getElementById("zip-code-error");

const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");

function showError(input)
{
    if(input.validity.valueMissing){
        if (input === emailInput){
            emailError.textContent = "You need to enter an Email Address";
        }
        else if (input === countryInput){
            countryError.textContent = "You need to enter a Country";
        }
        else if (input === zipCodeInput){
            zipCodeError.textContent = "You need to enter a Zip Code";
        }
        else if (input === passwordInput){
            passwordError.textContent = "You need to enter a Password";
        }
    }
    else if(input.validity.typeMismatch)
    {
        if (input === emailInput){
            emailError.textContent = "Entered value needs to be an email address";
        }
        if (input === countryInput){
            countryError.textContent = "Entered value needs to be a country";
        }
        if (input === zipCodeInput){
            zipCodeError.textContent = "Entered value needs to be a zip code";
        }
        if (input === passwordInput){
            passwordError.textContent = "Entered value needs to be a password";
        }
    }
    else if (input.validity.tooShort)
    {
        if (input === emailInput){
            emailError.textContent = `Email should be at least ${input.minLength} 
            characters; you entered ${input.value.length}.`;
        }
        if (input === countryInput){
            countryError.textContent = `Country should be at least ${input.minLength} 
            characters; you entered ${input.value.length}.`;
        }
        else if (input === zipCodeInput){
            zipCodeError.textContent = `Zip Code should be at least ${input.minLength} 
            characters; you entered ${input.value.length}.`;
        }
        else if (input === passwordInput){
            passwordError.textContent = `Password should be at least ${input.minLength} 
            characters; you entered ${input.value.length}.`;
        }
    }

    if (input === emailInput)
    {
        emailError.className = "error active";
    }
    else if (input === countryInput)
    {
        countryError.className = "error active";
    }
    else if (input === zipCodeInput)
    {
        zipCodeError.className = "error active";
    }
    else if (input === passwordInput)
    {
        passwordError.className = "error active";
    }

}


emailInput.addEventListener("input", (event) => 
{
    if (emailInput.validity.valid)
    {
        emailError.textContent = "";
        emailError.className = "error";
    }
    else
    {
        showError(emailInput);
    }

});

emailInput.addEventListener("focusout", (event) => 
{
    if (emailInput.validity.valid)
    {
        emailError.textContent = "";
        emailError.className = "error";
    }
    else
    {
        showError(emailInput);
    }

});

countryInput.addEventListener("input", (event) => 
{
    if (countryInput.validity.valid)
    {
        countryError.textContent = "";
        countryError.className = "error";
    }
    else
    {
        showError(countryInput);
    }

});

countryInput.addEventListener("focusout", (event) => 
{
    if (countryInput.validity.valid)
    {
        countryError.textContent = "";
        countryError.className = "error";
    }
    else
    {
        showError(countryInput);
    }

});

zipCodeInput.addEventListener("input", (event) =>
{
    if (zipCodeInput.validity.valid)
    {
        zipCodeError.textContent = "";
        zipCodeError.className = "error";
    }
    else
    {
        showError(zipCodeInput);
    }
});

zipCodeInput.addEventListener("focusout", (event) =>
{
    if (zipCodeInput.validity.valid)
    {
        zipCodeError.textContent = "";
        zipCodeError.className = "error";
    }
    else
    {
        showError(zipCodeInput);
    }
});

passwordInput.addEventListener("input", (event) =>
{
    if (passwordInput.validity.valid)
    {
        passwordError.textContent = "";
        passwordError.className = "error";
    }
    else
    {
        showError(passwordInput);
    }
});

passwordInput.addEventListener("focusout", (event) =>
{
    if (passwordInput.validity.valid)
    {
        passwordError.textContent = "";
        passwordError.className = "error";
    }
    else
    {
        showError(passwordInput);
    }
});



form.addEventListener("submit", (event) => 
{
    if (!emailInput.validity.valid){
        showError(emailInput);
        event.preventDefault();
    }

    if (!countryInput.validity.valid){
        showError(countryInput);
        event.preventDefault();
    }

    if (!zipCodeInput.validity.valid){
        showError(zipCodeInput);
        event.preventDefault();
    }

    if (!passwordInput.validity.valid){
        showError(passwordInput);
        event.preventDefault();
    }

});

