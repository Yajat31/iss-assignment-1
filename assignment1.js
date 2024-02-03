function openTab(event, tab){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display = "none";
        tabcontent[i].style.animationName = "";
    }
    tablinks = document.getElementsByClassName("tab");
    for(i=0; i<tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active","");
    }
    document.getElementById(tab).style.display = "block";
    document.getElementById(tab).style.animationName = "swipeRight";
    event.currentTarget.className += " active";
    if(tab === 'Skills'){
        startSlideshow();
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    openTab(event, 'About Me'); 
    let currentSlide = 0;
    const slides = document.querySelectorAll('#slideshow .slide');
    console.log(slides)
    function startSlideshow() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        console.log(currentSlide)
    }

    setInterval(startSlideshow, 3000); 
});

const text = ["Welcome!","नमस्ते !"];
let cindex = 0;
let tindex = 0;
function typeText() {
    if (cindex < text[tindex].length) {
        document.getElementById('typed-text').innerText += text[tindex].charAt(cindex);
        cindex++;
        setTimeout(typeText, 100); 
    } else if (cindex === text[tindex].length) {
        cindex = 0;
        tindex = (tindex + 1)%2; 
        setTimeout(() => {
            document.getElementById('typed-text').innerText = '';
            typeText();
        }, 3000);
    }
}

window.onload = function() {
    document.getElementById('toggleSwitch').addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });
    typeText();
}
