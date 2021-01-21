$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    autoHeight: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

const rect = document.querySelector("rect") ;
const rotation = document.querySelector(".rotate_icon") ;
window.addEventListener("scroll" , function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset >= 1439 && window.pageYOffset < 2300){
        rect.classList.add("dash_anime") ;
    }else if(window.pageYOffset >= 2300 && window.pageYOffset < 2800){
        rotation.classList.add("rotate_anime") ;
    }else{
        rect.classList.remove("dash_anime") ;
        rotation.classList.remove("rotate_anime") ;
    }
})

