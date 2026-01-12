(() => {
  const video = document.getElementById("introVideo");
  const intro = document.getElementById("intro");
  const catalogue = document.getElementById("catalogue");
  const showCatalogue = () => {
    if (!intro || !catalogue) return;
    intro.style.display = "none";
    catalogue.classList.remove("hidden");
  };

  video?.addEventListener("ended", showCatalogue);

  // Fallback after 8 seconds (change to 6000/10000 as needed)
  setTimeout(showCatalogue, 8000);

  // Try play (autoplay is usually allowed when muted)
  try { video?.play(); } catch (e) {}
})();
