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
    const loadingScreen1 = document.querySelector('#container');
    loadingScreen1.style.display = 'block';

    const loadingScreen2 = document.querySelector('#sideBar');
    loadingScreen2.style.display = 'none';

    const loadingScreen3 = document.querySelector('.dashboard-content');
    loadingScreen3.style.display = 'none';

});

$(document).ready(function (){
    $('#signInBtn').eq(0).on('click',function (){

        const loadingScreen1 = document.querySelector('#container');
        loadingScreen1.style.display = 'none';

        const loadingScreen2 = document.querySelector('#sideBar');
        loadingScreen2.style.display = 'block';

        const loadingScreen3 = document.querySelector('.dashboard-content');
        loadingScreen3.style.display = 'none';
    });
});

let btn = document.querySelector('#menu-btn');
let sideBar = document.querySelector('#sideBar');

btn.onclick = function() {
    sideBar.classList.toggle('active');
}