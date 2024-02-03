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

    


// const mouseY = e.clientY;
// const mouseX = e.clientX;
// console.log(mouseX)
// document.getElementById("cursor").style.opacity = "1";
// document.getElementById("cursor").style.left = per(e.clientX/PScontainerElement.getBoundingClientRect().width);