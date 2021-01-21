const strap = document.querySelectorAll(".word p")[0] ;
const zipper = document.querySelectorAll(".word p")[1] ;
const index_img = document.querySelector(".index_img") ;
const word = document.querySelector(".word") ;
const zipper_img = document.querySelector(".zipper_img") ;
const strap_img = document.querySelector(".strap_img") ;
const i1 = document.querySelector(".i-toggle1") ;
const i2 = document.querySelector(".i-toggle2") ;


strap.addEventListener("click", function(){
    i1.classList.toggle("word-active");
    if(zipper_img.style.display == "block"){
        strap_img.style.display = "block" ;
        index_img.style.display = "none" ;
        zipper_img.style.display = "none" ;
        i2.classList.remove("word-active");
    }else if(word.className.includes("aside")){
        word.classList.remove("aside") ;
        strap_img.style.display = "none" ;
        zipper_img.style.display = "none" ;
        index_img.style.display = "block" ;
    }else{
        word.classList.add("aside") ;
        strap_img.style.display = "block" ;
        index_img.style.display = "none" ;
        zipper_img.style.display = "none" ;
    }
})

zipper.addEventListener("click", function(){
    i2.classList.toggle("word-active");
    if(strap_img.style.display == "block"){
        zipper_img.style.display = "block" ;
        index_img.style.display = "none" ;
        strap_img.style.display = "none" ;
        i1.classList.remove("word-active");
    }else if(word.className.includes("aside")){
        word.classList.remove("aside") ;
        zipper_img.style.display = "none" ;
        index_img.style.display = "block" ;
        strap_img.style.display = "none" ;
    }else{
        word.classList.add("aside") ;
        zipper_img.style.display = "block" ;
        index_img.style.display = "none" ;
        strap_img.style.display = "none" ;
    }
})