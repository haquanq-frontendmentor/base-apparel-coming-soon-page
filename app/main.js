const subscribeForm = document.querySelector(".subscribe__form");
const emailInput = document.querySelector("#email-input");
const emailHint = document.querySelector("#email-input-hint");

const validateEmail = () => {
    let errorMessage = "";
    if (emailInput.value == "") {
        errorMessage = "Please fill out this field.";
    } else if (/^[^@]+@[^@]+\.[^@]+$/.test(emailInput.value) === false) {
        errorMessage = "Please provide a valid email address.";
    }

    if (errorMessage !== "") {
        emailInput.setAttribute("aria-invalid", "true");
        emailHint.textContent = errorMessage;
        emailInput.focus();
        return false;
    }
    emailHint.textContent = "";
    emailInput.setAttribute("aria-invalid", "false");
    return true;
};

subscribeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateEmail() === true) {
        alert("Subcribed!");
        subscribeForm.reset();
    }
});
