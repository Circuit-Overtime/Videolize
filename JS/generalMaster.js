

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