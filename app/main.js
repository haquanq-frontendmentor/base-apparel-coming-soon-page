const mainForm = document.querySelector(".main__form");
const emailInput = document.querySelector("#email-address");
const emailErrorText = document.querySelector(".textbox__error-text");

mainForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value == "") {
        mainForm.classList.add("error");
        emailErrorText.textContent = "Can't be empty";
        emailInput.setAttribute("aria-invalid", "true");
        return;
    }

    alert("We have received your email! HAHAHAHAAHAHAHAHAH");
});

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    mainForm.classList.add("error");
    emailErrorText.textContent = "Please provide a valid email";
    emailInput.setAttribute("aria-invalid", "true");
    emailInput.focus();
});

emailInput.addEventListener("input", (e) => {
    mainForm.classList.remove("error");
    emailInput.setAttribute("aria-invalid", "false");
    emailErrorText.textContent = "";
});
