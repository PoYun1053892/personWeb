const logIn = document.querySelector(".logIn") ;
const form_container = document.querySelector(".form_container")
const form_close = document.querySelectorAll(".form_close") ;
logIn.addEventListener("click", function(){
    form_container.style.display = "flex" ;
})
form_close.forEach(close => close.addEventListener("click",function(){
    form_container.style.display = "none";
}))

const signIn = document.querySelector("#signIn") ;
const signUp = document.querySelector("#signUp") ;
const signInContainer = document.querySelector(".sign-in-container");
const signUpContainer = document.querySelector(".sign-up-container");
signIn.addEventListener("click",function(){
    if(signIn.checked){
        signInContainer.style.display = "flex";
        signUpContainer.style.display = "none" ;
        console.log("true") ;
    }
})
signUp.addEventListener("click",function(){
    if(signUp.checked){
        signUpContainer.style.display = "flex";
        signInContainer.style.display = "none";
        console.log("true") ;
    }
})
