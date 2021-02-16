var next2 = document.querySelector("#next2")
var prev2 = document.querySelector("#prev2")
var slider2 = document.querySelector("#slider2content")
var sliderImg = document.querySelectorAll(".slideImg")

next2.addEventListener("click", ()=>{
    moveSlider2(1)
    
})

prev2.addEventListener("click", ()=>{
    moveSlider2(-1)
    
})

var imgActiva2 = 0;
var numImg = sliderImg.length
console.log(numImg);
slider2.style.width=(numImg *700) +"px"
function moveSlider2(direction){
    imgActiva2 = imgActiva2 + direction
    console.log(imgActiva2);
    if(imgActiva2 > numImg -1){
        imgActiva2= 3;
        if(imgActiva2 == 3){ next2.style.display="none";
    } else if(imgActiva2 != -1){ 
        next2.style.display="block";
    }
    next2.style.display="block";

    }else if(imgActiva2 < 0) {
        next2.style.display="block";
        imgActiva2 = 0;
        
    }
    slider2.style.marginLeft =`${-700 * imgActiva2}px`;


}