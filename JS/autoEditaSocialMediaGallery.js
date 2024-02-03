const gallery = document.getElementById("SocialMediaImageGallery");
const SocialGalleryContainer = document.getElementById("FirstRowFirstLayoutEdita");
SocialGalleryContainer.onmousemove = e => {
  const mouseX = e.clientX-50,
        mouseY = e.clientY-300;
  
  const xDecimal = mouseX / SocialGalleryContainer.clientWidth,
        yDecimal = mouseY / SocialGalleryContainer.clientHeight;
  
  const maxX = gallery.offsetWidth - SocialGalleryContainer.clientWidth-350,
        maxY = gallery.offsetHeight - SocialGalleryContainer.clientHeight-350;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX/20}px, ${panY/20}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease"
  })
}
SocialGalleryContainer.onmouseout = e => {
    gallery.animate({
        transform: `translate(${0}px, ${0}px)`
      }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
      })
}


$('.FirstRowFirstLayoutEdita').tilt({
    scale: 0.98
})