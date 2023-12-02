let menu = document.getElementById('menu-btn');
let navbar = document.getElementById('navbar');

// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header #navbar');

menu.addEventListener('click',()=>{
    // console.log("you click the botton")
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})