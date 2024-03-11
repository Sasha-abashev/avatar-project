// Додає нам доступ до чекбоксу

const checkbox = document.getElementById("username");
const eng = "../eng/index.html";

checkbox.addEventListener("change", () => {
  if (!checkbox.checked) {
    window.location.href = eng;
  }
});
