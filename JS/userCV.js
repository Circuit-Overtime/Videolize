document.getElementById("redirectWebsite").addEventListener("click", () => {
    location.replace("../Videolize");
  }) //feature for website link

  document.getElementById("redirectSocial").addEventListener("click", () => {
    location.replace("../Videolize/userInfo");
  }) //feature for cv link


  document.querySelectorAll(".longLoad").forEach(elm => {
    document.querySelectorAll("."+elm.classList[0])[0].addEventListener("load", () => {
      document.querySelector(".slowLoadOne").style.opacity = "0"
    })
    document.querySelectorAll("."+elm.classList[0])[1].addEventListener("load", () => {
      document.querySelector(".slowLoadTwo").style.opacity = "0"
    })
  })