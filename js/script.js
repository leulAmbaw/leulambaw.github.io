const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky",this.window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});
sr.reveal('.home-text', {delay:200, origin:'top'});
sr.reveal('.about-img', {delay:50, origin:'left'});
sr.reveal('.about-txt', {delay:50, origin:'right'});
sr.reveal('.services-content', {delay:50, origin:'top'});
