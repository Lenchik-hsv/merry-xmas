document.addEventListener("mousemove", () => {
  if (Math.random() > 0.15) return;  // niet te veel flakes

  const flake = document.createElement("div");
  flake.className = "sneeuw";
  flake.textContent = "❄";

  // willekeurige horizontale positie
  flake.style.left = Math.random() * window.innerWidth + "px";

  // willekeurige grootte en snelheid
  flake.style.fontSize = 10 + Math.random() * 12 + "px";
  flake.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.body.appendChild(flake);

  // automatisch verwijderen na animatie
  setTimeout(() => flake.remove(), 6000);
});
