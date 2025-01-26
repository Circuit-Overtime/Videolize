function getBasePath() {
  // Determine the base path dynamically
  return window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost"
    ? "" // Development environment
    : "/Videolize"; // Production (GitHub Pages)
}

function redirectTo(path) {
  // Redirect to the given path, prepended with the base path
  const basePath = getBasePath();
  location.replace(`${basePath}/${path}`);
}


document.getElementById("redirectWebsite").addEventListener("click", () => {
    redirectTo("");
  }) //feature for website link

  document.getElementById("redirectSocial").addEventListener("click", () => {
    redirectTo("me");
  }) //feature for cv link


  document.querySelectorAll(".longLoad").forEach(elm => {
    document.querySelectorAll("."+elm.classList[0])[0].addEventListener("load", () => {
      document.querySelector(".slowLoadOne").style.opacity = "0"
    })
    document.querySelectorAll("."+elm.classList[0])[1].addEventListener("load", () => {
      document.querySelector(".slowLoadTwo").style.opacity = "0"
    })
  })