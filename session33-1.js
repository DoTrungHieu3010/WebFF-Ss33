function togglePassword() {
    let passwordInput = document.getElementById("password");
    let icon = document.querySelector(".icon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.add("fa-eye")
        icon.classList.remove("fa-eye-slash")
    } else {
        passwordInput.type = "password";
        icon.classList.add("fa-eye-slash")
        icon.classList.remove("fa-eye")
    }
}