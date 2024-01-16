let scrollStage = 1;
let scrollLeft = window.scrollX;
let resolutionWidth = window.innerWidth;
let sea = document.querySelector("#sea"); 
let wave = document.querySelector(".wave");
let leftArrow = document.querySelector(".arrow-left")
let rightArrow = document.querySelector(".arrow-right")

document.addEventListener("scroll", () => {
    let scrollDistance = window.scrollX;
    console.log(scrollDistance, resolutionWidth)
    if (scrollDistance >= 2 * resolutionWidth) {
        sea.style.width = "80%"
        wave.style.left = "80%"
        scrollStage = 3
        leftArrow.style.display = "block"
        rightArrow.style.display = "none"
    } else if (scrollDistance >= resolutionWidth) {
        sea.style.width = "45%"
        wave.style.left = "30%"
        scrollStage = 2
        leftArrow.style.display = "block"
        rightArrow.style.display = "block"
    } else if (scrollDistance >= 0) {
        sea.style.width = "20%"
        wave.style.left = "2%"
        scrollStage = 1
        leftArrow.style.display = "none"
        rightArrow.style.display = "block"
    }
});

leftArrow.addEventListener("click", ()=> {
    window.scroll({
        top: 0,
        left: window.scrollX - resolutionWidth,
        behavior: "smooth"
    })
})
rightArrow.addEventListener("click", ()=> {
    window.scroll({
        top: 0,
        left: window.scrollX + resolutionWidth,
        behavior: "smooth"
    })
})


function handleScroll() {
    let scrollDistance = window.scrollX;
    console.log(scrollDistance, resolutionWidth)
    if (scrollDistance >= 2 * resolutionWidth) {
        sea.style.width = "80%"
        wave.style.left = "80%"
        scrollStage = 3
        leftArrow.style.display = "block"
        rightArrow.style.display = "none"
    } else if (scrollDistance >= resolutionWidth) {
        sea.style.width = "45%"
        wave.style.left = "30%"
        scrollStage = 2
        leftArrow.style.display = "block"
        rightArrow.style.display = "block"
    } else if (scrollDistance > 0) {
        sea.style.width = "20%"
        wave.style.left = "2%"
        scrollStage = 1
        leftArrow.style.display = "none"
        rightArrow.style.display = "block"
    }
}
