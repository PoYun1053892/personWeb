const smallImg = document.querySelectorAll(".small_img img") ;
const bigImg = document.querySelector(".big_img img") ;
const len = document.querySelector(".mouseContain") ;

//小圖換大圖
function changeBig(){
	bigImg.src = this.src;
}

//圖片放大鏡
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

//點選description
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



//-----------------------------------------------
const productCart_btn = document.querySelector(".productCart_btn");
const cart_slide = document.querySelector(".cart_slide");
const navCart = document.querySelector(".nav-cart");
const close_btn = document.querySelector(".close_btn");
const pMinus = document.querySelector(".pMinus");
const pPlus = document.querySelector(".pPlus");
const pNum = document.querySelector(".pNum");
//按了購物車slide出來
productCart_btn.addEventListener("click",function(){
	cart_slide.classList.add("cart-active") ;
})
navCart.addEventListener("click",function(){
	cart_slide.classList.toggle("cart-active") ;
})
close_btn.addEventListener("click",function(){
	cart_slide.classList.remove("cart-active") ;
})

//按 + - 按鈕數字改變
pMinus.addEventListener("click",function(){
	pNum.stepDown(1) ;
})
pPlus.addEventListener("click",function(){
	pNum.stepUp(1) ;
})

//加入購物車

localProduct = JSON.parse(localStorage.getItem("localProduct")) || [] ;

function display(){
    const displayArea = document.querySelector(".displayArea") ;

    //顯示新增的項目
    function show(){
        localProduct.forEach(product => displayProduct(product)) ;
    }
    //在購物車創造元素
    function displayProduct(item){
        displayArea.innerHTML +=`
                                    <li class="element">
                                        <img src="${item.src}">
                                        <div class="el_info">
                                            <h3 class="mb-1">${item.product}</h3>
                                            <p class="mb-1">${item.price}</p>
                                            <form>
                                                <div class="quality_group mb-3">
                                                    <input class="minus" type="button" value="-">
                                                    <input type="number" value="${item.value}" readonly min="1">
                                                    <input class="plus" type="button" value="+">
                                                </div>
                                            </form>
                                        </div>
                                        <span class="cancel_btn">&times;</span>
                                    </li>
                                `

        //按 + - 按鈕 value增加/減少
        const plus = document.querySelectorAll(".plus") ;
        const minus = document.querySelectorAll(".minus") ;
    
        function plusValue(e) {
            this.parentNode.children[1].stepUp(1);
            for(let i = 0 ; i<localProduct.length ; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value ;
                    localProduct[i].value = newValue;
                    update() ;
                    total();
                    break;
                }
            }
            // console.log(e.target.parentElement.parentElement.parentElement.children[0].innerText) ;
        }
    
        function minusValue(e){
            this.parentNode.children[1].stepDown(1);
            for(let i = 0 ; i<localProduct.length ; i++){
                if(e.target.parentElement.parentElement.parentElement.children[0].innerText === localProduct[i].product){
                    let newValue = e.target.parentElement.children[1].value ;
                    localProduct[i].value = newValue;
                    update() ;
                    total() ;
                    break;
                }
            }
        }
    
        plus.forEach(plus => plus.addEventListener("click", plusValue));
    
        minus.forEach(minus => minus.addEventListener("click" , minusValue));
    }

    //更新localStorage資料

    function update() {
        localStorage.setItem('localProduct', JSON.stringify(localProduct)) ;
    }

    show();

	//按ADD TO CART新增清單
	productCart_btn.addEventListener("click",function(e){
		let item = {
			src: smallImg[0].src,
			product: e.target.parentNode.parentNode.children[0].innerText,
			price: e.target.parentNode.parentNode.children[2].dataset.price,
			value: pNum.value
		}

		displayProduct(item)

		localProduct.push(item)
		
        update(item)

        total() ;
	})
	//點按X刪除鍵
    displayArea.addEventListener('click', event => {
        if (event.target.tagName !== 'SPAN') { return }
        const li = event.target.parentElement
        li.remove();
        for(let i = 0 ; i<localProduct.length ; i++){
            if(li.children[1].children[0].textContent === localProduct[i].product){
                localProduct.splice(i, 1) ;
                break;
            }
        }
        total()
        update()
        });
 
    //更新Total的值
    function total(){
        let subtotal = 0 ;
        const total = document.querySelector(".total h3 span") ;
        for(let i=0 ; i<localProduct.length ; i++){
            let item = localProduct[i] ;
            subtotal += (item.price * item.value) ;
        }
        total.innerText = subtotal ;
    };
    total() ;
}

display() ;
