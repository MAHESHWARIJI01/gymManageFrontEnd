let menu = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header #navbar');

menu.addEventListener('click',()=>{
    // console.log("you click the botton")
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})

let slide = document.querySelector(".slides-container").children;
let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".next-btn");
let navigation = document.querySelector(".navigation-dots");
let index =0;

prev.addEventListener("click",function(){
    prevSlide();
    updateCircleNavigation();
    resetTimer();
})
next.addEventListener("click",function(){
    nextSlide();
    updateCircleNavigation();
    resetTimer();
})

function nextSlide(){
    if(index==slide.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeSlide();

}
function prevSlide(){
    if(index==0){
        index=slide.length-1
    }
    else{
        index--;
    }
    changeSlide();

}
function circleNavigation(){
    for(let i=0; i<slide.length;i++){
        const div = document.createElement("div");
            div.setAttribute("class","singleDots(this)");
            div.id = i+1;
            if(i==0){
                div.classList.add("activeDots");
            }
            navigation.appendChild(div)

    }  
    
}
function singleDots(element){
    index=element.id;
    changeSlide();
    updateCircleNavigation();
    resetTimer();
}

circleNavigation();
function updateCircleNavigation(){
    for(let i=0;i<navigation.children.length;i++){
        navigation.children[i].classList.remove("activeDots");

    }
    navigation.children[index].classList.add("activeDots");
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
    updateCircleNavigation();
}
let timer = setInterval(autoPlay,4000);


let userName = document.getElementById("userName");
let age = document.getElementById("age");
let pNo = document.getElementById("pNo");
let email = document.getElementById("email");
let validUser = false;
let validAge = false;
let validPNo = false;
let validEmail = false;


userName.addEventListener("blur",function(){
    let regex = /^[a-zA-z][0-9a-zA-z]{1,9}$/;
    const string = userName.value;
    if(regex.test(string)){
        console.log("it is valid");
        userName.classList.remove("notValid");
        validUser = true;
    }
    else{
        console.log("it is invalid");
        userName.classList.add("notValid");
        validUser=false;

    }
});
age.addEventListener("blur",function(){
    let regex = /^[0-9]{2}$/;
    const a = age.value;
    if(regex.test(a)){
        console.log("it is valid");
        age.classList.remove("notValid");
        validAge=true;
    }
    else{
        console.log("it is invalid");
        age.classList.add("notValid");
        validAge=false;
    }
});
email.addEventListener("blur",function(){
    let regex = /^([_\-\.0-9a-zA-Z]+)\@([_\-\.0-9a-zA-Z]+)\.([a-z]){2,3}$/;
    const e = email.value;
    if(regex.test(e)){
        console.log("it is valid");
        email.classList.remove("notValid");
        validEmail = true;
    }
    else{
        console.log("it is invalid");
        email.classList.add("notValid");
        validEmail=false;
    }
});

pNo.addEventListener("blur",function(){
    let regex = /^(\+91)?[0-9]{1,10}$/;
    const p = pNo.value;
    if(regex.test(p)){
        console.log("it is valid");
        pNo.classList.remove("notValid");
        validPNo=true;
    }
    else{
        console.log("it is invalid");
        pNo.classList.add("notValid");
        validPNo=false;
    }
})

let sFBtn = document.getElementById('sFBtn');
let success = document.getElementById('success');

sFBtn.addEventListener("click",function(){
    success.style.display="none";
})

let formBtn = document.getElementById('formBtn');
let alert = document.getElementById('alert');
let form = document.getElementById('form');

formBtn.addEventListener("click",function(e){
    e.preventDefault();
    if(validPNo && validEmail && validAge && validUser)
    {
       
        success.style.display="flex";
        form.reset();

    }
    else{
       
            success.style.display="flex";
            success.style.border = "2px solid red";
            success.style.backgroundColor = "#fa4b54";
            success.style.justifyContent="space-between";
            success.style.alignItems = "center";
            success.style.marginTop = '0.2rem';
            success.style.marginBottom = '2rem';
            success.style.padding ="0.5rem 1rem";
            success.style.borderRadius = "0.5rem";
            alert.innerHTML =`Your Form has not been Submitted`;
    }

})
