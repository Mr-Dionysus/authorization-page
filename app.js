const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const btnSubmit = document.querySelector("#btn-submit");
const passwordsError = document.querySelector(".b-middle small");

btnSubmit.addEventListener("click", (e) => {
    if (password.value !== confirmPassword.value) {
        password.classList.add("input-invalid");
        confirmPassword.classList.add("input-invalid");
        passwordsError.classList.remove("not-visible");
    } else {
        password.classList.remove("input-invalid");
        confirmPassword.classList.remove("input-invalid");
        passwordsError.classList.add("not-visible");
    }
});
