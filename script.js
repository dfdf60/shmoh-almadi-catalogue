(() => {
  const intro = document.getElementById('intro');
  const catalogue = document.getElementById('catalogue');

  const showCatalogue = () => {
    intro.style.display = 'none';
    catalogue.classList.add('show');
    // allow scroll after intro
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };

  // 3 seconds then cut
  setTimeout(showCatalogue, 3000);
})();
