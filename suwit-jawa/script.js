// suwit v 0.1
// const tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   const p = prompt("pilih : gajah, semut, orang");

//   // menangkap pilihan computer
//   // membangkitkan bilangan random
//   const comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

//   // menentukan rules
//   const hasil = "";
//   if (p == comp) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     hasil = comp == "orang" ? "MENANG!" : "KALAH!";
//   } else if (p == "orang") {
//     hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
//   } else if (p == "semut") {
//     hasil = comp == "orang" ? "KALAH" : "MENANG!";
//   } else {
//     hasil = "memasukkan pilihan yang salah!";
//   }

//   // tampilkan hasilnya
//   alert(
//     "Kamu memilih : " +
//       p +
//       " dan Komputer memilih : " +
//       comp +
//       "\nMaka hasilnya : Kamu " +
//       hasil
//   );

//   tanya = confirm("lagi?");
// }

// alert("terimakasih sudah bermain.");

// suwit v 0.2

function pilihanComputer() {
  // menangkap pilihan computer
  // membangkitkan bilangan random
  const comp = Math.random();
  // jangkauan angka Math.random() adalah 0 - 1
  if (comp < 0.34) return "gajah"; // 0 - 0.34
  if (comp >= 0.34 && comp < 0.67) return "orang"; // 0.34 - 0.67
  return "semut"; // 0.67 - 1
}

function getHasil(comp, player) {
  // menentukan rules
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanPlayer = "gajah";
//   const pilihanComp = pilihanComputer();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   // memanipulasi info
//   const info = document.querySelector(".info");
//   info.innerHTML = `${hasil}`;
//   // manipulasi gambar pilihan komputer
//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${pilihanComp}.png`);
// });
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanPlayer = "orang";
//   const pilihanComp = pilihanComputer();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   // memanipulasi info
//   const info = document.querySelector(".info");
//   info.innerHTML = `${hasil}`;
//   // manipulasi gambar pilihan komputer
//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${pilihanComp}.png`);
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanPlayer = "semut";
//   const pilihanComp = pilihanComputer();
//   const hasil = getHasil(pilihanComp, pilihanPlayer);
//   // memanipulasi info
//   const info = document.querySelector(".info");
//   info.innerHTML = `${hasil}`;
//   // manipulasi gambar pilihan komputer
//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", `img/${pilihanComp}.png`);
// });
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  // set variabel waktu saat ini
  const waktuMulai = new Date().getTime();
  // set interval
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval();
      return;
    }
    imgComputer.setAttribute(`src`, `img/${gambar[i++]}.png`);
    if (i == gambar.length) i = 0;
  }, 100);
}
// membuat fungsi score
let currentScore = 0; // inisialisasi variabel score sebagai 0
function score(answer, score) {
  const nilai = document.querySelector(".score");

  if (answer === "MENANG!") {
    score++;
    nilai.innerHTML = `Score: ${score}`;
  }
  return score;
}
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanPlayer = pil.className;
    const pilihanComp = pilihanComputer();
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    // fungsi putar
    putar(); // fungsi ini akan bekerja selama 1 detik
    // set untuk menunggu melakukan block ini selama 1 detik sama dengan interval putar
    setTimeout(() => {
      // memanipulasi info
      const info = document.querySelector(".info");
      info.innerHTML = `${hasil}`;
      // manipulasi gambar pilihan komputer
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", `img/${pilihanComp}.png`);
      // panggil function score dengan parameter yang benar
      currentScore = score(hasil, currentScore);
    }, 1000);
  });
});
