document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
  
          // Use requestIdleCallback for less main-thread blocking
          requestIdleCallback(() => {
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [40, 0],
              easing: 'easeOutCubic',
              duration: 400
            });
          });
  
          el.classList.remove('reveal');
          observer.unobserve(el);
        }
      });
    }, {
      threshold: 0.0005
    });
  
    revealElements.forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.willChange = 'opacity, transform';
      observer.observe(el);
    });



    document.getElementById('exploreBtn').addEventListener('click', function () {
        const spotlightSection = document.getElementById('spotlightSection');
        if (spotlightSection) {
            spotlightSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    document.getElementById('VisuMagicStatic').addEventListener('click', function () {
        const spotlightSection = document.getElementById('spotlightSection');
        if (spotlightSection) {
            spotlightSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    
    
    document.getElementById('redirectSocial').addEventListener('click', function () { 
        redirectTo("me")
    });
    
    document.getElementById('iconforvisumagic').addEventListener('click', function () { 
        redirectTo("me")
    });
    
    
    document.getElementById('InnoVistaStatic').addEventListener('click', function () { 
        redirectTo("skills")
    });
    document.getElementById("iconforInnovista").addEventListener("click", () => {
        redirectTo("skills")
    })
    
    document.getElementById("AutoEditaStatic").addEventListener("click", () => {
        redirectTo("projects")
    })
    
    document.getElementById("DesignSageStatic").addEventListener("click", () => {
        redirectTo("contact")
    })
    
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.mainContainer'),
        smooth: true,
        multiplier: 1.2, 
        lerp: 0.1,       
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });
    

  });
  


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



