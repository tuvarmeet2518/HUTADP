// ======================================
// ADVOCATE OFFICE
// Version 2.0
// ======================================

// Loader
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.remove();

        }, 700);

    }

});


// ======================================
// Navbar Scroll Effect
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background = "rgba(0,0,0,.95)";
        header.style.boxShadow =
            "0 15px 40px rgba(0,0,0,.30)";

    } else {

        header.style.background =
            "rgba(0,0,0,.72)";

        header.style.boxShadow = "none";

    }

});


// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ======================================
// Scroll Animation
// ======================================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.18

}

);

document.querySelectorAll(

".advocate-card,.practice-card,.office-card,.qr-card,.contact-buttons a"

).forEach(el=>{

el.classList.add("fade-up");

observer.observe(el);

});


// ======================================
// Mobile Menu
// ======================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.onclick = ()=>{

navLinks.classList.toggle("active");

};

}


// ======================================
// Active Navigation
// ======================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ======================================
// Hero Fade
// ======================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

hero.style.opacity=1-(value/900);

});


// ======================================
// Floating Buttons
// ======================================

const floating=document.querySelector(".floating-contact");

window.addEventListener("scroll",()=>{

if(window.scrollY>250){

floating.style.opacity="1";

floating.style.transform="translateY(0px)";

}else{

floating.style.opacity=".8";

floating.style.transform="translateY(15px)";

}

});


// ======================================
// Image Fallback
// ======================================

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.src="assets/default.jpg";

};

});


// ======================================
// Copyright Year
// ======================================

const year=document.getElementById("year");

if(year){

year.textContent=new Date().getFullYear();

}


// ======================================
// Console
// ======================================

console.log(

"%cAdvocate Office Website Loaded",

"color:#d4af37;font-size:16px;font-weight:bold;"

);