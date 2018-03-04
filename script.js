const navbar = document.getElementById('navbar');
const topOfNav = navbar.offsetTop;

function fixedNavbar() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
    }

}
window.addEventListener('scroll', fixedNavbar);

