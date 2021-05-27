// || SUBMIT FORM SENT CONFIRMATION ||
function submitButton() {
    document.getElementById("submit").innerHTML = "Sent";
}

// || NAVBAR/BURGER MENU ||
let burger = document.getElementById("burger-button");

burger.addEventListener("click", e => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});