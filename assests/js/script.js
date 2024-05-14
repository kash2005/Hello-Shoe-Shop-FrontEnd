const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

window.addEventListener('load',function (){
    const loadingScreen = document.querySelector('#dashboard');
    loadingScreen.style.display = 'none';

    const loadingScreen1 = document.querySelector('#container');
    loadingScreen1.style.display = 'block';

});

$(document).ready(function (){
    $('#signInBtn').eq(0).on('click',function (){

        const loadingScreen1 = document.querySelector('#container');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#dashboard');
        loadingScreen2.style.display = 'block';
    });
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem, i) => {
    navItem.addEventListener("click", () => {
        navItems.forEach((item, j) => {
            item.className = "nav-item";
        });
        navItem.className = "nav-item active";
    });
});