const hamburger = document.getElementById("hamburguer");
const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");

const header = document.getElementById("header");

// Open the hamburger menu when clicking in the icon
hamburguer.addEventListener('click', () => {
    bar.classList.toggle('hamburguer__bar--open')
    navbar.classList.toggle('navbar--open');

    let color = "#225A7C";

    // If user opens the hamburger in top of screen remove transparent header
    if (window.scrollY === 0) {
        color = navbar.classList.contains("navbar--open") ? "#225A7C" : "transparent"
    }
    
    header.style.backgroundColor = color;
});

// Change background color of header when scrolling from top
document.addEventListener('scroll', () => {
    header.style.backgroundColor = "#225A7C";

    if (window.scrollY === 0) {
        header.style.backgroundColor = "transparent";

        if (navbar.classList.contains("navbar--open")) {
            header.style.backgroundColor = "#225A7C";
        }
    }

});