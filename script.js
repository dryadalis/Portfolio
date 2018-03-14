const navbar = document.getElementById('navbar');
const backToTopBtn = document.getElementById('backToTop');
const topOfNav = navbar.offsetTop;

function fixedNavbar() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
        backToTopBtn.style.display = 'block';
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('fixed-nav');
        backToTopBtn.style.display = 'none';
    }

}
window.addEventListener('scroll', fixedNavbar);

//Side-nav

const sideMenu = document.getElementById('side-menu');
const main = document.getElementById('main');

function openSideMenu() {
    sideMenu.style.width = '250px';
    main.style.marginRight = '250px';
}

function closeSideMenu() {
    sideMenu.style.width = '0';
    main.style.marginRight = '0';
}

// Back to top 
function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}