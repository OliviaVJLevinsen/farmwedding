const weddingDate = new Date("2026-08-08T14:00:00+02:00");
const el = document.getElementById("countdown");

function updateCountdown() {
  if (!el) return;
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    el.textContent = "I dag er dagen.";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  el.textContent = `${days} dage, ${hours} timer, ${minutes} minutter tilbage`;
}

updateCountdown();
setInterval(updateCountdown, 60000);
