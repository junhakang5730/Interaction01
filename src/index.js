

document.addEventListener("scroll",()=>{
    
    // console.log(window.scrollY)

})



// =====


let targetY , windowScrollY

// 최초 값 정의
function initValues() {
    ttt = document.querySelector(".ttt")
    targetY = ttt.getBoundingClientRect().top
}

initValues()

// 리사이징 이벤트
window.addEventListener("resize", function() {
    console.log("Resizing!");
    initValues()
});

document.addEventListener("scroll",()=>{
    
    console.log(window.scrollY)

})