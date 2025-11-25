document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("musicPopup");
  const playBtn = document.getElementById("playMusic");
  const closeBtn = document.getElementById("closePopup");
  
  // === MODE MUSIK ===
  const USE_LOCAL_MUSIC = true;   // SET TRUE UNTUK MUSIK LOKAL
  
  // === PLAYER ===
  const yt = document.getElementById("ytPlayer");
  const audio = document.getElementById("audioPlayer");
  
  // File musik lokal
  audio.src = "musik.mp3";  // bebas ganti nama file
  
  // ID YouTube kalau mau aktifin YT
  const YT_ID = "VIDEO_ID_LAGU";

  playBtn.addEventListener("click", () => {
    if (USE_LOCAL_MUSIC) {
      audio.play().catch(() => {
        alert("Klik lagi bang, browser butuh izin.");
      });
    } else {
      yt.src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1`;
    }

    popup.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });

  
  // === TYPEWRITER ===
  const text = `Di depan kelas,
Ibu berdiri dengan senyum yang sama setiap hari.

Di tangan Ibu,
kapur yang perlahan habis.

Tapi di hati Ibu,
doa-doa yang tidak pernah putus.

Nama kami mungkin Ibu lupa satu per satu,
tapi kebaikan dan kesabaran Ibu
akan selalu kami bawa sampai kapanpun.

Terima kasih, Ibu.
Untuk semua hal yang tak bisa kami balas.`;

  const typewriter = document.getElementById("typewriter");
  let index = 0;

  function typing() {
    if (index < text.length) {
      typewriter.innerHTML += text[index];
      index++;
      setTimeout(typing, 35);
    }
  }

  typing();
});
