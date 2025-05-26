function validateLogin(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "home.html";
  } else {
    document.getElementById("login-error").textContent = "Invalid username or password.";
  }
}
