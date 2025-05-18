// DOM Selection
// 1. document.getElementById() --> mengembalikan element
// -- ini cara bacanya adalah dengan menggunakan id yang sudah kita buat di html
// -- contoh : saya ingin menyeleksi element html yang memiliki ID = "judul"
// -- buat variabel untuk menampung element yang akan kita seleksi
// const judul = document.getElementById("judul");
// -- contoh merubah property warna
// judul.style.color = "red"; // ini jadi menambahkan inline css berupa color red
// judul.style.backgroundColor = "blue"; // penulisan property css lebih dari 2 kata background-color salah, harus kamel-case backgroundColor
// judul.innerHTML = "hallo dunia"; // ini akan mengganti isi dari element judul

// 2. document.getElementByTagName() --> mengembalika HTMLCollection
// -- ini cara bacanya adalah dengan menggunakan tag yang sudah kita buat di html
// -- contoh : saya ingin menyeleksi semua tag p
// const p = document.getElementsByTagName("p");
// -- contoh merubah property warna
// -- karena p adalah HTMLCollection maka kita harus menggunakan loop untuk mengubahnya

// -- contoh ingiin ngambil 1 p saja
// p[0].style.backgroundColor = "lightblue";

// -- contoh menggunakan for
// for (let i = 0; i < p.length; i++) {
//   // -- contoh menggunakan forEach
//   p[i].style.backgroundColor = "lightblue";
// }

// 3. document.getElementByClassName() --> mengembalikan HTMLCollection
// -- ini cara bacanya adalah dengan menggunakan class yang sudah kita buat di html
// -- contoh : saya ingin menyeleksi semua tag p yang memiliki class "p1"
// const p1 = document.getElementsByClassName("p1");
// for (let i = 0; i < p1.length; i++) {
//     console.log(p1[i]);
//     p1[i].style.backgroundColor = "green";
//     p1[i].style.color = "white";
// }

// 4. document.querySelector() --> mengembalikan elemnet
// -- cara selecttor nya sama kaya kita menyelek  element di CSS
const p1 = document.querySelector(".p1");
const linkIG = document.querySelector("#a a");
// // -- contoh merubah property warna
linkIG.style.color = "green";
linkIG.style.fontSize = "20px";

const list2 = document.querySelector("#b ul li:nth-child(2)");
list2.style.backgroundColor = "green";

// // -- walau dalam kasus kita menyelector elemnet p dimana di CSS itu akan mempengaruhi semua elemnet p
// // -- Namun karena querySelector() --> mengembalikan elemnet
// // -- maka yang akan di ambil adalah element pertama saja di kasus ini paragraf satu saja
const p = document.querySelector("p"); // ini akan mengambil paragraf pertama saja

// // 5. document.querySelectorAll()
// // -- cara selectornya sama seperti querySelector()
// // -- tapi bedanya querySelector() mengembalikan elemnet
// // -- sedangkan querySelectorAll() mengembalikan NodeList
// // -- contoh : saya ingin menyeleksi semua tag p
const p2 = document.querySelectorAll("p");
// // -- contoh merubah property warna
// // -- karena p2 adalah NodeList maka kita tidak perlu menggunakan loop
// // -- contoh menggunakan forEach
p2.forEach((item) => (item.style.backgroundColor = "lightblue"));
