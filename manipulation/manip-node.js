// MANIPULASI NODE

// <-- 1. document.createElement() -- buat element baru -->
const pBaru = document.createElement("p"); // membuat element pBaru baru
pBaru.textContent = "paragraf baru"; // menambahkan text ke element p
const sectionA = document.querySelector("section");
sectionA.appendChild(pBaru); // menambahkan element p ke tempat yang kita inginkan
// pake elemnt.appendChild() --> nyimpen diakhir

const liBaru = document.createElement("li"); // membuat element li baru
liBaru.textContent = "Baru"; // menambahkan text ke element li
const ul = document.querySelector("ul");
// menambahkan li baru di posisi awal
// ul.insertBefore(liBaru, ul.firstChild); // menambahkan element li baru di awal
// pake elemnt.insertBefore() --> nyimpen diawal

// menambahkan li baru di posisi diposisi kedua
ul.insertBefore(liBaru, ul.children[1]); // menambahkan element li baru di pos

// <-- 2. elemnt.remove() -- menghapus element -->
const link = document.getElementsByTagName("a")[0];
// menghapus element a pertama
link.remove(); // menghapus element a pertama

// <-- 3. elemnt.replaceWith() -- mengganti element -->
const h1 = document.querySelector("h1");
// mengganti element h1 dengan element p
const p = document.createElement("p");
p.textContent = "Ini Judul Halaman";
h1.replaceWith(p); // mengganti element h1 dengan element p
// bisa pake elemnt.replaceChild() --> nyimpen di childnya
