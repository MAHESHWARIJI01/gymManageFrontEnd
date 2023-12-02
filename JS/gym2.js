console.log("Login-Page");
let slide = document.querySelector(".slides-container").children;
let index =0;

function nextSlide(){
    if(index==slide.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeSlide();

}
function changeSlide(){
    for(let i=0;i<slide.length;i++)
    {
        slide[i].classList.remove("activeImg")
    }
    slide[index].classList.add("activeImg")
}

function resetTimer(){
    // when click on indicator or controls button stop timer 
    clearInterval(timer);
    // than start time again
    timer = setInterval(autoPlay,4000);
}

function autoPlay(){
    nextSlide();
}
let timer = setInterval(autoPlay,4000);