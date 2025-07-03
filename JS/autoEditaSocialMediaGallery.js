document.querySelectorAll("#image-container > div").forEach(div => {
  const lazyImg = div.querySelector(".autoEditaLazyLoading");
  const fullImg = div.querySelector('img[loading="lazy"]');
  if (lazyImg && fullImg) {
    // Hide full image initially and add fade-in class
    fullImg.style.display = "none";
    fullImg.classList.add("autoEditaFadeIn");
    fullImg.addEventListener("load", () => {
      lazyImg.style.display = "none";
      fullImg.style.display = "";
      // Trigger fade-in
      setTimeout(() => {
        fullImg.classList.add("visible");
      }, 10);
    });
  }
});