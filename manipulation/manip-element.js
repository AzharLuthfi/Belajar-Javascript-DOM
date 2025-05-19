// DOM MANIPULATION -- Manipulasi Element

// <<-- 1. Mengubah isi element -->>
// -- element.innerHTML = "apa yang mau dirubah"
// const judul = document.getElementById("judul");
// judul.innerHTML = "Belajar DOM Manipulation Dengan Javascript"; // Mengubah isi element judul

// const paragraf1 = document.getElementsByClassName("p1");
// paragraf1[0].innerHTML = "Nama saya adalah Azhar"; // Mengubah isi element paragraf1

// const sectionB = document.querySelector("section#b");
// sectionB.innerHTML = "<div><p>ini adalah section 2</p></div>"; // Mengubah isi section dengan id b

// <<-- 2. Mengubah style element -->>
// -- element.style.propertyCSS -- > bila nama property CSS lebih dari satu kata pake "camelCase"
// const judul = document.getElementById("judul");
// judul.style.color = "red"; // Mengubah warna judul
// judul.style.fontSize = "40px"; // Mengubah ukuran judul
// judul.style.backgroundColor = "blue"; // Mengubah warna latar belakang judul

// <<-- 3. menambah atribut pada tag html -->>
// const judul = document.getElementById("judul");
// // -- element.setAttribute("nama atribut", "nilai atribut")
// // -- set atribut baru bernama class isinya judul-baru
// // -- namun perlu diingat ini akan menimpah kelas yang sudah ada
// judul.setAttribute("class", "judul-baru");
// judul.setAttribute(
//   "style",
//   "color: red; font-size: 40px; background-color: blue;"
// );
// // -- cara kita tau isi atribut
// // -- element.getAtribut("nama atribut");
// console.log(judul.getAttribute("id")); // mengambil nilai atribut id
// // -- menghapus atribut
// // -- element.removeAttribute("nama atribut");
// judul.removeAttribute("class");

// mengatur class
// -- element.classList.add("nama class");
// -- element.classList.remove("nama class");
// -- element.classList.toggle("nama class"); --> kalo ada kelasnya dihapus, kalo ga ada keasnya ditambahin
// -- element.classList.contains("nama class");
// -- element.classList.item("urutan nama class dimulai dari 0") --> mengembalikan nama kelas berdasar urutan
// -- element.classList.replace("nama class", "nama class baru");
// judul.classList.add("nama class"); // menambah class
// judul.classList.add("judul-baru"); // menambah class judul-baru
// judul.classList.add("h1"); // menambah class h1
// judul.classList.remove("judul-baru"); // menghapus class judul-baru
// judul.classList.toggle("judul-baru"); // menambah class judul-baru jika belum ada
// judul.classList.contains("judul-baru"); // mengecek apakah class judul-baru ada
// judul.classList.replace("h1", "h2"); // mengganti class h1 dengan h2
// judul.classList.toggle("judul-baru"); //  menghapus class "judul-baru" yg sudah ada
