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
    window.location.href = "designer.html";
  }) //feature for website link



    document.getElementById("profileLogoCont").addEventListener("load", () => {
     
    })

    window.onload = e => {
        document.getElementById("LazyLoadprofileLogoCont").style.opacity = 0;
    }