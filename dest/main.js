// active menu mobile
let btnMenu = document.querySelector(".btnmenu");
let nav = document.querySelector(".nav");
btnMenu.addEventListener("click",function(){
    nav.classList.toggle("active");
    btnMenu.classList.toggle("active")
});

// backtotop home
let btnBackToTop = document.querySelector(".footer__info a");
let getHeightWindow = window.innerHeight;
btnBackToTop.addEventListener("click",function(e){
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


// CAFE GALLERY

// Fancybox.blind("[data-fancybox]",{
//     infinite: false,
//     keyboard: {
//         Escape: "close",
//         Escape: "close",
//         Delete: "close",
//         Backspace: "close",
//         PageUp: "next",
//         PageDown: "prev",
//         ArrowUp: "next",
//         ArrowDown: "prev",
//         ArrowRight: "next",
//         ArrowLeft: "prev",
//     },
//     on: {
//         ready: (fancybox) => {
//             console.log(`fancybox #${fancybox.id} is ready!`)
//         }
//     },
//     caption: function(fancybox, carousel, slide){

//     },
// });





// ***********************SLIDER FLICKITY***********************//
let $carousel = $(".slider__item-wrap");
$carousel.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    preNextButtons: false,
})
// PREVIOUS
$(".controller-prevNext .btnPrev").on("click", function(){
    $carousel.flickity("previous");
});
$(".controller-prevNext .btnNext").on("click", function(){
    $carousel.flickity("next");
});





// fullscreen 

// $carousel.flickity({
//   fullscreen: true,
// });
// $('.controller-fullscreen').on('click', function() {
//   $carousel.flickity('viewFullscreen');
// });








// Chose studio - id rental
const studioId = document.querySelectorAll(".studio-id__item");
studioId.forEach( item => {
    item.onclick = function() {
        const studioIdActive = document.querySelector(".studio-id__item.active").classList.remove("active");

        item.classList.add("active");

    }
})




// LOADER
var loader = document.querySelector(".preloader");


window.addEventListener("load", function(){
    setInterval( function() {
        loader.classList.add("none");
    },1000)
})






