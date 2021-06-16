burgur = document.querySelector('.burgur');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');

burgur.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
})