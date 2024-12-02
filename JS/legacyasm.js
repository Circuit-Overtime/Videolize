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


globalThis.imageChooseCounter = -1;
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
    redirectTo("")
  }) //feature for website link

  document.getElementById("mainContainer").addEventListener("scroll", (e) => {
    if(document.getElementById("mainContainer").scrollTop > 127)
    {
        document.querySelector(".maskGradient").style.transform = "translateY(0px)";
    }
    else
    {
        document.querySelector(".maskGradient").style.transform = "translateY(-250px)";
    }
  })

  var s = Snap('#svg'), circles = [],
    bg = s.rect(0, 0, 800, 200);

bg.attr({
  'fill': '#fff'
});

var circleGroup = s.group(bg);

// create 200 circles
for(var i=0; i<400; i++) {
  var size = Math.random()*5 + 3,
      cx = Math.random()*800,
      cy = Math.random()*200,
      opacity = Math.random(),
      fill = '#9d77da',
      counter = Math.random()*360;
      circ = s.circle(cx, cy, size);
  circ.attr({
    'fill': fill,
    'fill-opacity': opacity
  });
  circ.data('xOffset', cx); 
  circ.data('cx', cx);
  circ.data('yOffset', cy); 
  circ.data('cy', cy);
  circ.data('counter', counter); 
  circles.push(circ);
  circleGroup.add(circ);
  
}

var increase = Math.PI * 2 /80,
    text = s.text(70, 120, "LEGACY");



circleGroup.attr({
  mask: text
});

function draw() {
  for(var i=0, l=circles.length; i<l; i++) {
    var circ = circles[i];
    
    if(circ.data('cy') < 0) {
      circ.data('cy', 200);
    } else {
      circ.data('cy', (circ.data('cy')-2));
    }
    circ.data('cx', (circ.data('xOffset') + (50*(Math.sin( circ.data('counter')) / 5))));
    circ.attr({
      cx: circ.data('cx'),
      cy: circ.data('cy')
    });
    
    circ.data('counter',      circ.data('counter')+increase);
  }  
  
}

function animate() {
  draw();
  window.requestAnimationFrame(animate);
}

animate();

// console.log(document.querySelectorAll(".grid-wrapper > .big"))
const allChildrenImages = document.querySelectorAll(".grid-wrapper > div");

document.getElementById("svg").addEventListener("click", () => {
    chooseLst = ["normal", "big", "tall", "wide"];

    if(imageChooseCounter == 3)
    {
      imageChooseCounter = -1;
    }
    else
    {
      imageChooseCounter += 1;
      console.log(imageChooseCounter)
        if(imageChooseCounter == 0)
        {
          
          allChildrenImages.forEach(element => {
            document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "1";
            document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(0px)";
          });
        }
        else if(imageChooseCounter == 1)
        {
          allChildrenImages.forEach(element => {
            if(element.classList[0] == chooseLst[1])
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "1";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(0px)";
            }
            else
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "0.5";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(5px)";
            }
            
          });
        }
        else if(imageChooseCounter == 2)
        {
          allChildrenImages.forEach(element => {
            if(element.classList[0] == chooseLst[2])
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "1";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(0px)";
            }
            else
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "0.5";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(5px)";
            }
            
          });
        }
        else if(imageChooseCounter == 3)
        {
           
          allChildrenImages.forEach(element => {
            if(element.classList[0] == chooseLst[3])
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "1";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(0px)";
            }
            else
            {
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.opacity = "0.5";
              document.querySelector(".grid-wrapper > ."+element.classList[0]).style.filter = "blur(5px)";
            }
            
          });
        }    
    }
})