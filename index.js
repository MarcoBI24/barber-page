const btnLeft = document.getElementById("left")
const btnRight = document.getElementById("right")
const slider = document.getElementById("slider")
const itemsSlider = document.querySelectorAll(".item-slider")
// const itemsSlider = document.querySelectorAll(".item-slider")
// const firstItem = itemsSlider[0]
// const lastItem  = itemsSlider[itemsSlider.length - 1]

// slider.insertAdjacentElement("afterbegin",lastItem)
window.onresize = ()=>{
    console.log(window.innerWidth);
    if (window.innerWidth <= 1000) {
    
        slider.style.width = `${itemsSlider.length * 100}%`
        slider.style.marginLeft = "-100%"
    }else{
        slider.style.width = "100%"
        slider.style.margin = "auto"

    
    }
}
// width: 400%;

btnRight.onclick = () => {
    const itemsSlider = document.querySelectorAll(".item-slider")
    const firstItem = itemsSlider[0]
    const lastItem = itemsSlider[itemsSlider.length - 1]
    // slider.style.marginLeft = "0%"
    slider.style.transition = "all 1s"
    slider.style.marginLeft = "0%" 
    setTimeout(() => {
    
        slider.style.transition = "none"
        slider.style.marginLeft = "-100%"

        slider.insertAdjacentElement("afterbegin", lastItem);
    }, 1000);

}
btnLeft.onclick = () => {
    const itemsSlider = document.querySelectorAll(".item-slider")
    const firstItem = itemsSlider[0]
    const lastItem = itemsSlider[itemsSlider.length - 1]
    slider.style.transition = "all 1s"
    slider.style.marginLeft = "-200%"
    setTimeout(() => {
        slider.style.transition = "none"
        slider.style.marginLeft = "-100%"

        slider.insertAdjacentElement("beforeend", firstItem);


    }, 1000);

    // slider.insertAdjacentElement("beforeend", firstItem);
    // slider.style.marginLeft = "0%";
}

