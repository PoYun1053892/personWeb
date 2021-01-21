// Variable for setup

let container ;
let camera ;
let render ;
let scene ;
let backpack ;

function init() {
    container = document.querySelector(".scene") ;

    // Create scene
    scene = new THREE.Scene() ;

    const fov = 35 ;
    const aspect = container.clientWidth / container.clientHeight ;
    const near = 0.1 ;
    const far = 500 ;

    // Camera setup
    camera = new THREE.PerspectiveCamera(fov,aspect,near,far) ;
    camera.position.set(0.25,1.25,8);

    function checkPosition() {
        if(window.matchMedia('(max-width: 414px)').matches){
            camera.position.set(0,-2,17.5);
        }else if (window.matchMedia('(max-width: 576px)').matches) {
            camera.position.set(0.25,-0.5,100);
        }else if(window.matchMedia('(max-width: 768px)').matches){
            camera.position.set(0,-2,17.5);
        }else if(window.matchMedia('(max-width: 992px)').matches){
            camera.position.set(0,1,10);
        }else if(window.matchMedia('(max-width: 1024px)').matches){
            camera.position.set(0,-3,10);
        }else if(window.matchMedia('(max-width: 1200px)').matches){
            camera.position.set(0,1,8);
        }
    }
    window.onresize=function(){  
        console.log('監聽變化') ;
        watchChangeSize();
        checkPosition() ;
    } 

    function watchChangeSize (){    
        var offsetWid = document.documentElement.clientWidth;
        var offsetHei = document.documentElement.clientHeight;
        console.log(offsetWid);
        console.log(offsetHei);
        if(offsetWid < 434 && offsetWid > 394) {
            location.reload(container) ;
        }else if(offsetWid < 596 && offsetWid > 550) {
            location.reload(container) ;
        }else if(offsetWid < 788 && offsetWid > 748){
            location.reload(container) ;
        }else if(offsetWid < 1002 && offsetWid > 972){
            location.reload(container) ;
        }else if(offsetWid < 1004 && offsetWid > 1044){
            location.reload(container) ;
        }else if(offsetWid < 1220 && offsetWid > 1180){
            location.reload(container) ;
        }
    }

    const ambient = new THREE.AmbientLight(0x404040,15) ;
    scene.add(ambient) ;

    const light = new THREE.DirectionalLight(0xfffff,3) ;
    light.position.set(10,10,10) ;
    scene.add(light) ;

    // Renderer(
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true}) ;
    renderer.setSize(container.clientWidth,container.clientHeight) ;
    renderer.setPixelRatio(window.devicePixelRatio) ;
    // window.addEventListener( "resize", onWindowResized, false ); //視窗改變大小時呼叫onWindowResized，若沒改變不動作

    container.appendChild(renderer.domElement) ;
    // Load Model
    let loader = new THREE.GLTFLoader() ;
    loader.load("./3d/scene.gltf", function(gltf){
        scene.add(gltf.scene) ;
        backpack = gltf.scene.children[0] ;
        backpack.rotation.y = 0.01 ;
        animate() ;
    });
}

// function onWindowResized( event ) {
//     renderer.setSize( container.clientWidth,container.clientHeight );//呈現器改變介面大小
//     camera.updateProjectionMatrix ( 100, container.clientWidth / container.clientHeight, 1,1100 ); //使用者更新投影矩陣 並依照數值改變整個場景物件大小
//     window.location.reload() ;
//    }


function animate() {
    requestAnimationFrame(animate) ;
    backpack.rotation.z += 0.01 ;
    renderer.render(scene,camera) ;
}
// init() ;
window.setTimeout(init , 3500) ;

const total = document.querySelectorAll("#logo path") ;
for(let i = 0 ; i<total.length ; i++){
    console.log(total[i].getTotalLength()) ;
}


$("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
$(window).on("resize", function(){         				
    $("#canvas").outerHeight($(window).height()-$("#canvas").offset().top- Math.abs($("#canvas").outerHeight(true) - $("#canvas").outerHeight()));
});