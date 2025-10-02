const audio = document.getElementById("ad1");
const btn = document.getElementById("playMusic");
const volumeSlider = document.getElementById("volume");

let isPlaying = false;

// Play / Pause
btn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play().then(() => {
      btn.textContent = "⏸ Pause Music";
    }).catch(err => console.log("Error play:", err));
  } else {
    audio.pause();
    btn.textContent = "🎵 Play Music";
  }
  isPlaying = !isPlaying;
});

const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Cek kalau user pernah simpan preferensi
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});
