const firebaseConfig = {
  apiKey: "AIzaSyC21MpY5O5jKKdnMAI4VQLii_YKgpmgBLM",
  authDomain: "videolize-3563f.firebaseapp.com",
  projectId: "videolize-3563f",
  storageBucket: "videolize-3563f.appspot.com",
  messagingSenderId: "957189119127",
  appId: "1:957189119127:web:1ff96b13ff010a53131dd2"
};

// Initialize Firebase

// document.getElementById("mainContainer").scrollTo(0, 4593)
const app = firebase.initializeApp(firebaseConfig);

function typeWriterEffectHTML(idOfTextHolder, textToType, speed) {
    var i = 0;
    var speed = speed || 55; // Default speed if not provided
    document.getElementById(idOfTextHolder).innerHTML = "";
    function type() {
        if (i < textToType.length) {
            document.getElementById(idOfTextHolder).innerHTML += textToType.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type(); // Call the function to start the typing effect
    
}

// document.getElementById("mainContainer").scrollTo({
//   top: 6393,
// });

document.getElementById("mainContainer").addEventListener("scroll", (e) => {
  const Scrollamount = document.getElementById("mainContainer").scrollTop;
  if(Scrollamount >= 1000)
  {
    document.getElementById("navbar").style.transform = "translateX(-50%) translateY(0px)";
  }
  else
  {
    document.getElementById("navbar").style.transform = "translateX(-50%) translateY(-250px)";
  }
})

document.getElementById("VisuMagic").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 1417,
    behavior: 'smooth'
});
})
document.getElementById("InnoVista").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 3023,
    behavior: 'smooth'
});
})
document.getElementById("AutoEdita").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 4393,
    behavior: 'smooth'
});
})

document.getElementById("galleryImagesAutoEditaBtn").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 5093,
    behavior: 'smooth'
});
})

document.getElementById("socialSectionAutoEditaBtn").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 6893,
    behavior: 'smooth'
});
})


document.getElementById("DesignSage").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 7493,
    behavior: 'smooth'
});
})


document.getElementById("VisuMagicStatic").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 1417,
    behavior: 'smooth'
});
})
document.getElementById("InnoVistaStatic").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 3023,
    behavior: 'smooth'
});
})
document.getElementById("AutoEditaStatic").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 4393,
    behavior: 'smooth'
});
})
document.getElementById("DesignSageStatic").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 7493,
    behavior: 'smooth'
});
})

document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 1417,
    behavior: 'smooth'
});
})


document.getElementById("wand").addEventListener("click", () => {
  document.getElementById("mainContainer").scrollTo({
    top: 1837,
    behavior: 'smooth'
});
})


document.getElementById("linkedinRedirect").addEventListener("click", () => {
  window.location.href = "https://www.linkedin.com/in/solankighoshvideoeditor/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
})

document.getElementById("instagramRedirect").addEventListener("click", () => {
  window.location.href = "https://www.instagram.com/a.creative_mess?igsh=MXkxdTU1ZDUxaG8wYQ%3D%3D"
})


document.getElementById("facebookRedirect").addEventListener("click", () => {
  window.location.href = "https://www.facebook.com/solankighosh65?mibextid=ZbWKwL"
})

function checkCache()
{
  const scrlHtRtr = sessionStorage.getItem("scrlHtDsgn");
  const redirectRtr = sessionStorage.getItem("redirectDsgn");
  console.log(scrlHtRtr, redirectRtr)
  if((scrlHtRtr != null) || (redirectRtr != null))
  {
    
    sessionStorage.setItem("redirectDsgn", false);
    document.querySelector(".loadingOverlay").style.display = "none";
    document.getElementById("mainContainer").scrollTo({top:  sessionStorage.getItem("scrlHtDsgn"), behavior : "smooth"});
    
  }
  else if(scrlHtRtr == null)
  {
    sessionStorage.setItem("scrlHtDsgn", 0);
  }
  else if(redirectRtr == null)
  {
    sessionStorage.setItem("redirectDsgn", false);
  }

}


document.getElementById("redirectSocial").addEventListener("click", () => {
  const windowHeihgt = document.getElementById("mainContainer").scrollTop;
  sessionStorage.setItem("scrlHtDsgn", windowHeihgt);
  sessionStorage.setItem("redirectDsgn", true);
 location.replace("userInfo.html")
})

document.getElementById("redirectSocialInnoVista").addEventListener("click", () => {
  const windowHeihgt = document.getElementById("mainContainer").scrollTop;
  sessionStorage.setItem("scrlHtDsgn", windowHeihgt);
  sessionStorage.setItem("redirectDsgn", true);
 location.replace("userSkills.html")
})

//lazy loading on images!

document.querySelectorAll(".image-container div img:not(.autoEditaLazyLoading)").forEach((elm, index) => {
  elm.addEventListener("load", () => {
      document.querySelectorAll(".image-container div img.autoEditaLazyLoading")[index].style.opacity = "0";
  })
})


window.onload = e => {
  checkCache();
}
//1417 visumagic
//3123 innovista
//4393 autoEdita
//7493 designSage
//8493 footerEnd
//1000 -- nav bar appear
