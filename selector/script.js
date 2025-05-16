// DOM Selection
// 1. document.getElementById() --> mengembalikan element
// ini cara bacanya adalah dengan menggunakan id yang sudah kita buat di html
// contoh : saya ingin menyeleksi element html yang memiliki ID = "judul"
// buat variabel untuk menampung element yang akan kita seleksi
const judul = document.getElementById("judul");
// contoh merubah property warna
judul.style.color = "red"; // ini jadi menambahkan inline css berupa color red
judul.style.backgroundColor = "blue"; // penulisan property css lebih dari 2 kata background-color salah, harus kamel-case backgroundColor
judul.innerHTML = "hallo dunia"; // ini akan mengganti isi dari element judul

// 2. document.getElementByTagName() --> mengembalika HTMLCollection
// ini cara bacanya adalah dengan menggunakan tag yang sudah kita buat di html
// contoh : saya ingin menyeleksi semua tag p
const p = document.getElementsByTagName("p");
// contoh merubah property warna
// karena p adalah HTMLCollection maka kita harus menggunakan loop untuk mengubahnya

// contoh ingiin ngambil 1 p saja
// p[0].style.backgroundColor = "lightblue";

// contoh menggunakan for
for (let i = 0; i < p.length; i++) {
  // contoh menggunakan forEach
  p[i].style.backgroundColor = "lightblue";
}

// 3. document.getElementByClassName() --> mengembalikan HTMLCollection
// ini cara bacanya adalah dengan menggunakan class yang sudah kita buat di html
// contoh : saya ingin menyeleksi semua tag p yang memiliki class "p1"
const p1 = document.getElementsByClassName("p1");
for (let i = 0; i < p1.length; i++) {
  p1[i].style.backgroundColor = "green";
  p1[i].style.color = "white";
}
