

//  Side Nav BAR


var menuicon = document.getElementById("menu-icon")
var navbarmenu = document.getElementById("navbar-menu")
var menuclose = document.getElementById("menu-close")

menuicon.addEventListener("click", function(){

    navbarmenu.style.left = "0"
})

menuclose.addEventListener("click", function(){

    navbarmenu.style.left = "-50%"
})

// OFFER BAR

var offerclose = document.getElementById("offer-close")
var offerbar = document.getElementById("offer-bar")

offerclose.addEventListener("click",function(){
    offerbar.style.display="none"
})

// Search Section






/* scroll Into view */ 

/* New Arrivals */



var arrivalBtn = document.querySelector(".new-arrivals-button");
var newArrival = document.getElementById("new-arrivals");
var mostWanted = document.getElementById("most-wanted")
var wantedbutton = document.querySelector(".most-wanted-button")

arrivalBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Smooth scroll to the New Arrivals section
    newArrival.scrollIntoView({
        behavior: "smooth" // This adds the smooth scrolling effect
    });
});


// Most wanted

wantedbutton.addEventListener("click", function( ){
    event.preventDefault();
    mostWanted.scrollIntoView({
        behavior:"smooth"
    })
})


// Heart Color Change 


var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            
            e.target.src="/Nostra images/Icons/redheart.png"
        }
        else{
            e.target.src="/Nostra images/Icons/blackheart.png"
        }
    })
})




// Slider 

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');

function showSlide(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
    showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);


// image scrolling

const mostWantedContainer = document.getElementById('most-wanted');

mostWantedContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default scrolling behavior
    mostWantedContainer.scrollLeft += event.deltaY; // Scroll horizontally
});
