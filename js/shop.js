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


//////
const btn = document.querySelectorAll(".btn");
btn.forEach(Btn => {
    Btn.addEventListener("click",function(){
    btn.forEach(btn => {
        btn.classList.remove("click") ;
    })
    Btn.classList.add("click");
    const brand = document.querySelectorAll(".product_card") ;
    brand.forEach(b => {
        b.style.display = "none" ;
            if(b.dataset.brand == Btn.textContent || Btn.textContent == "Reset All"){
                b.style.display = "block";
            }
        })
    })
})

////////
const select = document.querySelectorAll(".select")[0];
const choose = document.querySelector(".choose");
select.addEventListener("click",function(){
    choose.classList.toggle("block");
})


