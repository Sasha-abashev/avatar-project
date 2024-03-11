const checkbox = document.getElementById("username");
const ua = "../uk-language/uk.html";

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    window.location.href = ua;
  }
});
