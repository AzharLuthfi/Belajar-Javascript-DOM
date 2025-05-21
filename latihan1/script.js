// merubah warna background
const button = document.querySelector("#button");
button.addEventListener("click", function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "lightgreen";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("merah");
});

// buat button di js
const acakWarna = document.createElement("button");
acakWarna.textContent = "acak warna!"; // text content
acakWarna.setAttribute("id", "acakwarna"); // id
acakWarna.setAttribute("type", "button"); // type
acakWarna.setAttribute("class", "biru-muda"); // class
// document.body.insertBefore(button, document.body.children[1]); --> ini cara lama
button.after(acakWarna); // --> ini cara baru element.after(elementBaru);
// perlu diperhatikan!!:
// Pengaturan style inline memiliki prioritas lebih tinggi daripada class CSS, sehingga ketika
// Anda mengklik tombol pertama untuk toggle class "merah", class memang ditambahkan/dihapus
// tetapi perubahan warnanya tidak terlihat karena tertimpa oleh style inline yang diterapkan oleh tombol "acak warna".
acakWarna.addEventListener("click", function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// sliderColorChange
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
// pake event input agar realtime
// sMerah.addEventListener("input", function () {})
sMerah.addEventListener("input", function () {
  // mengambil nilai dalam elemnet input sebagi berikut input.value;
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // mengubah warna background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// sHijau.addEventListener("input", function () {})
sHijau.addEventListener("input", function () {
  // mengambil nilai dalam elemnet input sebagi berikut input.value;
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // mengubah warna background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
// mengambil nilai dalam elemnet input sebagi berikut input.value;
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  // mengubah warna background
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const body = document.body;
body.addEventListener("mousemove", function (event) {
  // ukuran browser
  const w = window.innerWidth;
  // posisi mouse
  const x = Math.round((event.clientX / w) * 255);
  const y = Math.round((event.clientY / w) * 255);
  // mengubah warna background
  document.body.style.backgroundColor = `rgb(${x},${y},100)`;
});
