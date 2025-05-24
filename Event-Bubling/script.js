// DOM Event Bubbling
// secara default event yang di berikan pada element
// akan berlaku juga untuk element pembungkusnya
// contoh: kita buat event click pada element dengan class "close"
// maka element pembungkusnya yaitu div dengan kelas card

// pertama ambil semua tombol closenya
// const close = document.querySelectorAll(".close");
// const cards = document.querySelectorAll(".card");

// close.forEach((element) => {
//   element.addEventListener("click", function (event) {
//     event.target.parentElement.style.display = "none";
//     event.preventDefault(); // fungsi default tag <a></a> nya tidak dijalankan
//     event.stopPropagation();
//   });
// });

// cards.forEach((card) => {
//   card.addEventListener("click", function (event) {
//     alert("ok");
//   });
// });

// menerapkan event pada container agar yang dilakukan perubahan pada containernya
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  // cara kita tau lagi klik apa
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});
