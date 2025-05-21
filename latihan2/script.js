// select div
const kotak = document.querySelector("div");
// select icon
const iconElement = document.querySelector(".icon");
// select p
const textElement = document.querySelector(".text");

// State untuk melacak kondisi kotak
let isAngry = false;
// Menambahkan event listener untuk klik
kotak.addEventListener("click", function () {
  if (!isAngry) {
    // Mengubah ke keadaan marah
    kotak.style.backgroundColor = "red";
    textElement.textContent = "I'm Angry!";
    iconElement.textContent = "😡";
    isAngry = true;
  } else {
    // Mengembalikan ke keadaan awal
    kotak.style.backgroundColor = "lightgreen";
    textElement.textContent = "Click me!";
    iconElement.textContent = "😁";
    isAngry = false;
  }
  console.log(isAngry);
});
