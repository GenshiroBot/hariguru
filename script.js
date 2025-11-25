document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("musicModal");
  const btnPlay = document.getElementById("btnPlayMusic");
  const btnClose = document.getElementById("btnCloseMusic");
  const ytPlayer = document.getElementById("ytPlayer");
  const audioPlayer = document.getElementById("audioPlayer");

  // ====== PENGATURAN SUMBER MUSIK ======
  // mode = 'youtube' → pakai YouTube
  // mode = 'local'   → pakai file MP3 sendiri (audio tag)
  const MUSIC_MODE = "local"; audioPlayer.src = "musik.mp3";

  // Kalau pakai YouTube:
  // Ganti VIDEO_ID di bawah dengan ID asli lagu
  // Contoh url YouTube: https://www.youtube.com/watch?v=abc123
  // Berarti VIDEO_ID = "abc123"
  const YT_VIDEO_ID = "VIDEO_ID_LAGU_DI_SINI";

  // Kalau pakai file lokal:
  // Taruh file mp3 di folder yang sama lalu set:
  // audioPlayer.src = "terbuai-dengan-waktu.mp3";

  function playMusic() {
    if (MUSIC_MODE === "youtube") {
      if (!YT_VIDEO_ID || YT_VIDEO_ID === "VIDEO_ID_LAGU_DI_SINI") {
        alert(
          "Belum diisi VIDEO_ID YouTube-nya. Silakan edit script.js dan ganti YT_VIDEO_ID."
        );
        return;
      }
      const url =
        "https://www.youtube.com/embed/" +
        YT_VIDEO_ID +
        "?autoplay=1&rel=0";
      ytPlayer.src = url;
    } else if (MUSIC_MODE === "local") {
      if (!audioPlayer.src) {
        alert(
          "Belum diisi src untuk audio lokal. Edit script.js dan isi audioPlayer.src."
        );
        return;
      }
      audioPlayer.play().catch(() => {
        alert("Browser menolak autoplay, coba klik lagi.");
      });
    }
  }

  // Tombol PLAY di popup
  btnPlay.addEventListener("click", () => {
    playMusic();
    modal.style.display = "none";
  });

  // Tombol NANTI SAJA
  btnClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
});