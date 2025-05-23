// hapus card jika hanya da satu card
// const close = document.querySelectorAll(".close");
// const card = document.querySelectorAll(".card");
// close.addEventListener("click", () => {
//   card.remove();
// });

// DOM Traversal
// pertama ambil semua tombol closenya
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");
// lalu setiap tombol close yang diklik maka hapus cardnya
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (event) {
//     // kita gunakan element.parentElement
//     // close[i].parentElement.style.display = "none";
//     // variabel event dalam parameter akan berisi macam-macam info dari event yang sedang terjadi, disini "click"
//     event.target.parentElement.style.display = "none";
//   });
// }

close.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
  });
});

event.target.parentElement.style.display = "none";
// Dom Traversal Method selain parentElement
// childElement --> untuk mencari child
// firstElementChild --> untuk mencari child pertama
// lastElementChild --> untuk mencari child terakhir
// previousElementSibling --> untuk mencari sibling sebelumnya
// previousSibling --> untuk mencari sibling sebelumnya
// nextElementSibling --> untuk mencari sibling berikutnya
// childNodes --> untuk mencari child
// firstChild --> untuk mencari child pertama
// lastChild --> untuk mencari child terakhir
// firstElementChild --> untuk mencari child pertama
// lastElementChild --> untuk mencari child terakhir
// parentNode --> untuk mencari parent
// parentElement --> untuk mencari parent
// nextSibling --> untuk mencari sibling berikutnya
