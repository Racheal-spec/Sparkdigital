
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

let options = {
    threshold : 0.5,
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


/*gsap.to(".hero-text", {duration: 2, y:1500, scale: -1, rotate:180});
var tl = gsap.timeline({repeat: 30, repeatDelay: 1});
gsap.to(".hero-img", {duration: 1, scale: 1});
*/
//Use to reset the position of the loader
function init(){
    
    const loader = document.querySelector('.loader');

    // reset position of the loading screen
    gsap.set(loader, {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 10,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, { 
            duration: 0.8, 
            scaleX: 0,
            xPercent: 5, 
            rotation: -10, 
            transformOrigin: 'right center', 
            ease: 'Power4.inOut'
        });
    }

    // do something before the transition starts
    barba.hooks.before(() => {

        document.querySelector('html').classList.add('is-transitioning');
        barba.wrapper.classList.add('is-animating');

    });

    // do something after the transition finishes
    barba.hooks.after(() => {

        document.querySelector('html').classList.remove('is-transitioning');
        barba.wrapper.classList.remove('is-animating');

    });

    // scroll to the top of the page
    barba.hooks.enter(() => {

        window.scrollTo(0, 0);

    });

    barba.init({
        transitions: [{
            async leave() {
                await loaderIn();
        
            },
            enter() {
                loaderAway();
            }
        }]
    })

}

window.addEventListener('load', function(){
    init();
});