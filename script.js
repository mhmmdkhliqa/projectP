//menu aktif saat scroll pake AI T_T//
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".menu a");

const pengamatMenu = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      links.forEach((l) => l.classList.remove("aktif"));
      const aktif = document.querySelector(`.menu a[href="#${entry.target.id}"]`);
      if (aktif) aktif.classList.add("aktif");
    }
  });
}, { threshold: 0.5 });

sections.forEach((s) => pengamatMenu.observe(s));

/* animasi muncul saat section terlihat */
const pengamatMuncul = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("muncul");
  });
}, { threshold: 0.2 });

document.querySelectorAll(".muncul-nanti").forEach((el) => pengamatMuncul.observe(el));

/* validasi form contact */
const form = document.getElementById("form-kontak");
const info = document.getElementById("info-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !email || !pesan) {
    info.style.color = "#ff6b6b";
    info.textContent = "Semua kolom harus diisi ya.";
    return;
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    info.style.color = "#ff6b6b";
    info.textContent = "Format email belum benar.";
    return;
  }

  info.style.color = "#7367ff";
  info.textContent = "Membuka aplikasi email...";

  const isi = `Nama: ${nama}\nEmail: ${email}\n\n${pesan}`;
  window.location.href =
    `mailto:mhmmdkhliqa@gmail.com?subject=${encodeURIComponent("Pesan dari " + nama)}&body=${encodeURIComponent(isi)}`;
});


//glow//
const glow = document.querySelector(".glow");

document.addEventListener("mousemove", (e) => {
  glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
});