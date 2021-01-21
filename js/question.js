const asks = document.querySelectorAll(".ask") ;
const answers = document.querySelectorAll(".answer") ;
const arrows = document.querySelectorAll(".ask span")


function showAns(){
    for(let i=0; i<asks.length ; i++){
        for(let j=0 ; j<=i ; j++){
            if(i == j){
                asks[i].addEventListener("click",function(){
                    answers[j].classList.toggle("block");
                    arrows[j].classList.toggle("span_rotate");
                })
            }
        }
    }
}

showAns();