const blob = document.getElementById("blob"),
socialmediaContainer = document.getElementById("FirstRowSecondLayoutEdita");

socialmediaContainer.onpointermove = event => { 
  const { clientX, clientY } = event;
  
const midCoordinateX = parseInt((socialmediaContainer.getBoundingClientRect().left + socialmediaContainer.getBoundingClientRect().right)/2);
if(event.clientX > midCoordinateX)
{
    document.querySelector(".profileCardContainer").style.left = "-30%";
}
else
{
    document.querySelector(".profileCardContainer").style.left = "0%";
}
  blob.animate({
    left: `${clientX-650}px`,
    top: `${clientY-250}px`
  }, { duration: 3000, fill: "forwards" });
}
