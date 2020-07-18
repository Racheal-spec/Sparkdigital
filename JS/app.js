const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

let options = {
    threshold : 0.3,
    rootMargin : "0px 0px -100px 0px"
};

let appearOnScroll = new IntersectionObserver(slideAnime, options);


function slideAnime(entries){
entries.forEach(entry => {
if(!entry.isIntersecting){
    return;
}else{
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
}

});
}

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})



/*
const sliders = document.querySelectorAll('.slide');


window.addEventListener('scroll', revealSection);

function revealSection(){
const slidersPos = sliders.getBoundingClientRect().top;
console.log(slidersPos);


}
*/



/*
let controller;

function animeTab(){
controller = new ScrollMagic.Controller();
const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
    const revealImg = slide.querySelector('.reveal-img');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');
  gsap.to(revealImg, 1 , {x : "100%"});
});
}

animeTab();
*/