'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect("600").height;
document.addEventListener('scroll', ()=>{ 
        if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');
    }
}); 


//Handle scrolling when tapping on the navbar menu

const navbarMenu= document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
const target= event.target;
const link= target.dataset.link;
if( link==null){
    return;
}
scrollIntoView(link);
});   

//handle scrolling when tapping on contact me button

const homeContactBtn= document.querySelector('.home_contact');
homeContactBtn.addEventListener('click', ()=>{
scrollIntoView('#Contact');
});

//fadding home slowly to transparent as scrolls down
const home= document.querySelector('.home__container');
const homeHeight= home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
home.style.opacity= 1- window.scrollY / homeHeight;
})



// show "arrow-up button"
const arrowUp= document.querySelector('.arrow-up');
document.addEventListener('scroll', ()=> {
if(window.scrollY>homeHeight /2){
arrowUp.classList.add('visible');
}else {
arrowUp.classList.remove('visible');
}
});



// handle click on the arrow up button

arrowUp.addEventListener('click', ()=> {
scrollIntoView('#Home');
});

function scrollIntoView(selector){
const scrollTo= document.querySelector(selector);
scrollTo.scrollIntoView({behavior:'smooth'});   
}

