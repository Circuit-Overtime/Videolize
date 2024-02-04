document.getElementById("linkedinRedirect").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/solankighoshvideoeditor/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")
  })
  
  document.getElementById("instagramRedirect").addEventListener("click", () => {
    window.open("https://www.instagram.com/a.creative_mess?igsh=MXkxdTU1ZDUxaG8wYQ%3D%3D", "_blank")
  })
  
  
  document.getElementById("facebookRedirect").addEventListener("click", () => {
    window.open("https://www.facebook.com/solankighosh65?mibextid=ZbWKwL", "_blank")
  })
  

  document.getElementById("redirectWebsite").addEventListener("click", () => {
    location.replace("designer.html");
  }) //feature for website link
document.getElementById("mainContainer").style.opacity = 0;
  window.onload = e => {
    
    setTimeout(() => {
        ScrollReveal().reveal('.centerLogo', { scale: 0.25, delay: 900 });
        ScrollReveal().reveal('.ring1', { scale: 0.25, delay: 1000 });
        ScrollReveal().reveal('.ring2Slow', { scale: 0.25, delay: 1100 });
        ScrollReveal().reveal('.ring3Slow', { scale: 0.25, delay: 1200 });
        ScrollReveal().reveal('.ring4Slow', { scale: 0.25, delay: 1300 });
        ScrollReveal().reveal('.ring5Slow', { scale: 0.25, delay: 1400 });
        ScrollReveal().reveal('.ring6Slow', { scale: 0.25, delay: 1500 });
        ScrollReveal().reveal('.ring7Slow', { scale: 0.25, delay: 1600 });
        document.getElementById("mainContainer").style.opacity = 1;
    }, 500);

  }