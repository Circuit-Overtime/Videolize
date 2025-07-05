var PScontainerElement = document.getElementById("FirstRowFirstLayoutInnovate");
var PScontainerCursor = document.getElementById("cursor");

constPScontainerElementTop = PScontainerElement.getBoundingClientRect().top;
const PScontainerElementBottom = PScontainerElement.getBoundingClientRect().top;

PScontainerElement.onmouseenter = e => {
    PScontainerCursor.style.opacity = "0";
    PScontainerCursor.style.left = per(mapRange(e.clientX-20, 46, 696, 0, 90));
    PScontainerCursor.style.top = per(mapRange(e.clientY-20, 11, 362, 0, 90));
    
}

    PScontainerElement.onmousemove = e => {
        if((e.clientX > PScontainerElement.getBoundingClientRect().left) && (e.clientX < PScontainerElement.getBoundingClientRect().right))
        {
            if((e.clientY > PScontainerElement.getBoundingClientRect().top) && (e.clientY < PScontainerElement.getBoundingClientRect().bottom))
            {
                PScontainerCursor.style.opacity = "0";
                PScontainerCursor.style.left = per(mapRange(e.clientX-20, 46, 696, 0, 90));
                PScontainerCursor.style.top = per(mapRange(e.clientY-20, 11, 362, 0, 90));
                const PointerStyle = 
                {
                    left : per(mapRange(e.clientX+10, 46, 696, 0, 93)),
                    top : per(mapRange(e.clientY-150, 0, 362, 0, 93))
                }
                PScontainerCursor.animate(PointerStyle, { duration: 10, fill: "forwards" });
            }
        }
    }

    PScontainerElement.onmouseout = e => {
        PScontainerCursor.style.opacity = "0";
    }

    


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
    
    
    
      });

