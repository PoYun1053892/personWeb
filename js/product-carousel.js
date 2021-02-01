$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav: false,
    autoHeight: true,
    autoWidth: false,
    autoplay:false,
    margin: 50,
    dots: false,
    // mouseDrag: false,
    responsive:{
        0:{
            items:1,
            stagePadding:100
        },
        768:{
            items:2,
            stagePadding: 100,
        },
        1000:{
            items:4,
            stagePadding: 140,
        }
    }
})