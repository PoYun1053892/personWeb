console.clear();
function marquee() {
  gsap.set('.wrapper',{xPercent:-50,yPercent:0})

  var boxWidth = 300,
      totalWidth = boxWidth * 8,  //  * n of boxes
      no01 = document.querySelectorAll("#no01 .box"),
      no02 = document.querySelectorAll("#no02 .box"),
      no03 = document.querySelectorAll("#no03 .box"),
      dirFromLeft = "+=" + totalWidth,
      dirFromRight = "-=" + totalWidth;
  
  var mod = gsap.utils.wrap(0, totalWidth);
  
  function marquee(which, time, direction){
    gsap.set(which, {
      x:function(i) {
        return i * boxWidth;
      }
    });
    var action = gsap.timeline()
    .to(which,  {
    x: direction,
    modifiers: {
      x: x => mod(parseFloat(x)) + "px"
    },
      duration:time, ease:'none',
      repeat:-1,
    });
    return action
  }
  
  var master = gsap.timeline().add(marquee(no01, 20, dirFromLeft), 1)
  
}
marquee();