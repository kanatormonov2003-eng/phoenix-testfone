const heroVideo = document.querySelector(".hero-video");


document.addEventListener("mousemove", (e) => {


    if (!heroVideo) return;


    let x = (window.innerWidth / 2 - e.clientX) / 50;

    let y = (window.innerHeight / 2 - e.clientY) / 50;


    heroVideo.style.transform =
    `scale(1.08) translate(${x}px, ${y}px)`;


});
const video = document.querySelector(".hero-video");
const soundBtn = document.querySelector(".sound-btn");


soundBtn.addEventListener("click",()=>{

    video.muted = !video.muted;

    soundBtn.textContent =
    video.muted ? "🔇" : "🔊";

});