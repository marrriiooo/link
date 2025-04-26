// untuk membuat setiap huruf di pecah pecah dam menambhkan span
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;

const menuToggle = document.querySelector(" .menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
