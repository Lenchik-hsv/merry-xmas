function createSnowflake() {
  const flake = document.createElement("div");
  flake.className = "sneeuw";
  flake.textContent = "❄";

  flake.style.left = Math.random() * window.innerWidth + "px";
  flake.style.fontSize = 10 + Math.random() * 12 + "px";
  flake.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(flake);
  setTimeout(() => flake.remove(), 6000);
}

// Continu sneeuw
setInterval(() => createSnowflake(), 200);

// Extra flakes bij desktop-muis
document.addEventListener("mousemove", () => {
  if (Math.random() > 0.15) return;
  createSnowflake();
});

// Extra flakes bij mobiel tikken
document.addEventListener("touchstart", () => {
  for (let i = 0; i < 5; i++) createSnowflake();
});

