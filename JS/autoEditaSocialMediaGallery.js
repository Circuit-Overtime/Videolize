document.querySelectorAll("#image-container > div").forEach(div => {
  const lazyImg = div.querySelector(".autoEditaLazyLoading");
  const fullImg = div.querySelector('img[loading="lazy"]');

  if (lazyImg && fullImg) {
    fullImg.style.display = "none";
    fullImg.classList.add("autoEditaFadeIn");

    const onLoad = () => {
      lazyImg.style.display = "none";
      fullImg.style.display = "";
      setTimeout(() => {
        fullImg.classList.add("visible");
      }, 10);
    };

    if (fullImg.complete && fullImg.naturalHeight !== 0) {
      // Already loaded (from cache)
      onLoad();
    } else {
      // Wait for load
      fullImg.addEventListener("load", onLoad);
    }
  }
});
