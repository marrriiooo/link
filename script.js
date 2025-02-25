// untuk membuat setiap huruf di pecah pecah dam menambhkan span
const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
nama.innerHTML = huruf;
