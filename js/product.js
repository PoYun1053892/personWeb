const smallImg = document.querySelectorAll(".small_img img") ;
const bigImg = document.querySelector(".big_img img") ;
const len = document.querySelector(".mouseContain") ;


function changeBig(){
	bigImg.src = this.src;
}

let ratio = 3 ;

function magnify(e) {
	len.style.backgroundImage = `url(${bigImg.src})` ;
	len.style.backgroundSize = `${bigImg.width * ratio}px ${bigImg.height * ratio}px` ;

	let bound = bigImg.getBoundingClientRect() ;
	let x = e.pageX - bound.left ;
	let y = e.pageY - bound.top ;
	x = x - window.pageXOffset ;
	y = y - window.pageYOffset ;	
	let pos = {
		x: x,
		y: y
	}
	let positionLeft = pos.x - (len.offsetWidth / 2);
	let positionTop = pos.y - (len.offsetHeight / 2);
	// console.log(y) ;
	// console.log(window.pageYOffset) ;
	// console.log(window.pageYOffset) ;
	// console.log(x,y) ;
	len.style.left = positionLeft + "px" ;
	len.style.top = positionTop + "px" ;
	len.style.backgroundPosition = `${-1 * (pos.x * ratio) + 30}px ${-1 * (pos.y * ratio) + 50}px` ;


}




smallImg.forEach(img => img.addEventListener("click", changeBig)) ;
bigImg.addEventListener("touchmove", magnify) ;
len.addEventListener("touchmove", magnify) ;
bigImg.addEventListener("mousemove", magnify) ;
len.addEventListener("mousemove", magnify) ;
$("#img_container").on("mouseleave",function(){
	$(".mouseContain").off("mouseout") ;
	$(".mouseContain").hide();
	$("body").removeClass("cursor") ;
})
$("#img_container").on("mouseenter",function(){
	$(".mouseContain").show();
	$("body").addClass("cursor") ;
})
// .off("mousemove")

const showing1 = document.querySelector(".showing1") ;
const showing2 = document.querySelector(".showing2") ;
const p1 = document.querySelector(".p1") ;
const p2 = document.querySelector(".p2") ;
const product_show = document.querySelector(".product_show") ;


showing1.addEventListener("click", function(){
    p1.classList.toggle("block") ;
})
showing2.addEventListener("click", function(){
    p2.classList.toggle("block") ;
})