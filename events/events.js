// // DOM Events
// // event di js merepresentasikan sebuah kejadian yang terjadi di dalam DOM
// // kejadian tersebut bisa dilakukan oleh user
// // ataupun dilakukan secara otomatis oleh API

// // saya klik paragraf 3 dan warna backgroundnya berubah
// const p3 = document.querySelector(".p3");

// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }
// // saya klik paragraf 2 dan warna backgroundnya berubah
// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }
// const p2 = document.querySelector(".p2");
// // tambah event hendler onclik untuk p2
// p2.onclick = ubahWarnaP2;

// const p4 = document.querySelector("section#b p");
// // pake addEventListener("event", function())
// p4.addEventListener("click", function () {
//   // ambil parentnya
//   const ul = document.querySelector("section#b ul");
//   // create node berupa li baru
//   const liBaru = document.createElement("li");
//   // tambahkan text pada li baru
//   liBaru.textContent = "item baru";
//   // simpan  liBaru kedalam parentnya ul
//   ul.appendChild(liBaru);
// });

// perbedaan pake event-Hendler dengan addEventListener()
// Event Hendler
const p3 = document.querySelector(".p3");
p3.onclick = function rubahBacground() {
  p3.style.backgroundColor = "lightblue";
};
p3.onclick = function rubahWarna() {
  p3.style.color = "red"; // ini akan menimpah onclick untuk background color
};

// add eventListener()
const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function ubahWarnaP4() {
  p4.style.backgroundColor = "lightblue";
});
p4.addEventListener("click", function ubahWarnaP4() {
  p4.style.color = "red"; // ini tidak akan menimpah addEventListener sebelumnya
});
