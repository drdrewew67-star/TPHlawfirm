const menu = document.querySelector('#menu');
const nav = document.querySelector('.navbar-nav');

menu.onclick = () => {
    nav.classList.toggle("active");
};

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove("active");
    }
});

