
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function imggenerator(){
    let ok = document.querySelector("#fixed-img")
let hehe = document.querySelectorAll(".elem")

hehe.forEach(function(e){
    e.addEventListener('mouseenter', function(){
        let b = e.getAttribute("data-img")
        ok.style.display = "block"; 
         ok.style.backgroundImage = `url(${b})`
    })
})

hehe.forEach(function(e){
    e.addEventListener('mouseleave',() => {
          ok.style.display = "none";
    })
})

}
function sliderprop(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        mousewheel: true,
        keyboard: true,
        slidesPerView: "auto",
        freeMode: true,
      });
}

let pointer = document.querySelector("#custom-c");
let swip = document.querySelector(".swiper-wrapper");

swip.addEventListener("mouseenter", (event) => {
    pointer.style.display = "block";
});

swip.addEventListener("mouseleave", (event) => {
    pointer.style.display = "none";
});

     swip.addEventListener("mousemove",(evt) => {
        let x = evt.clientX - 45;
        let y = evt.clientY - 45;
        pointer.style.transform = `translate3d(${x}px, ${y}px, 0)`;

     })
sliderprop()
imggenerator()