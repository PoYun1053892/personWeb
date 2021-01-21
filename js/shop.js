const quickView = document.querySelectorAll(".hover_screen") ;
const cancel_btn = document.querySelector(".cancel_btn")
const modal = document.querySelector(".modal") ;
const modal_card = document.querySelector(".modal_card") ;

function showModal(){
    modal.style.display = "block" ;
    modal_card.style.display = "flex" ;
}

function cancelModal(){
    modal.style.display = "none" ;
    modal_card.style.display = "none" ;
}

quickView.forEach(btn => btn.addEventListener("click", showModal)) ;
cancel_btn.addEventListener("click" , cancelModal) ;

