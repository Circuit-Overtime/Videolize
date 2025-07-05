document.querySelectorAll("#image-container > div").forEach(div => {
  const lazyImg = div.querySelector(".autoEditaLazyLoading"); // blurred placeholder
  const fullImg = div.querySelector('img[loading="lazy"]');   // actual image

  if (lazyImg && fullImg) {
    // Hide full image initially
    fullImg.style.opacity = "0";
    fullImg.style.transition = "opacity 0.5s ease";

    const onLoad = () => {
      lazyImg.style.display = "none";       // hide blur
      fullImg.style.opacity = "1";          // fade in actual image
      fullImg.classList.add("unblur");      // optional: remove blur if any applied via CSS
    };

    if (fullImg.complete && fullImg.naturalHeight !== 0) {
      // Already loaded (from cache)
      onLoad();
    } else {
      // Load event
      fullImg.addEventListener("load", onLoad);
    }
  }
});
