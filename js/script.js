let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}











var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");


function register(){
 
 RegForm.style.transform = "translateX(0px)";
 LoginForm.style.transform = "translateX(0px)";
 Indicator.style.transform = "translateX(100px)";
}

function login(){
 
 RegForm.style.transform = "translateX(300px)";
 LoginForm.style.transform = "translateX(300px)";
 Indicator.style.transform = "translateX(0px)";
}






