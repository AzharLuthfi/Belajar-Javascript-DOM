// DOM Prevent Default
// menghilangkan aksi default dari event
// contoh: menghilangkan aksi default dari event click pada button close
// dimana sekarang tag <span></span> diganti jadi <a harf=""></a>
// ini akan membuat tombol close diklik akan mereload ulang halaman
// dan aksi close tidak berjalan semestinya
// pertama ambil semua tombol closenya
const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

close.forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentElement.style.display = "none";
    event.preventDefault(); // fungsi default tag <a></a> nya tidak dijalankan
  });
});
