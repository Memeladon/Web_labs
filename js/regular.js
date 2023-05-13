const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;


emailField.addEventListener("input", () => {
    const isValidEmail = emailRegex.test(emailField.value);
    const isValidPhone = phoneRegex.test(phoneField.value);

    if (!isValidEmail) {
        emailField.setCustomValidity("Invalid email address");
    } else {
        emailField.setCustomValidity("");
    }

    if (!isValidPhone) {
        phoneField.setCustomValidity("Invalid phone number");
    } else {
        phoneField.setCustomValidity("");
    }
});