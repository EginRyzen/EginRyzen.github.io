//Humberger button
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');
const h3 = document.querySelector('nav h3');

menuToggle.addEventListener('click', function () {
    if (this.checked) {
        h3.style.opacity = 0;
        h3.style.visibility = 'hidden';
    } else {
        h3.style.opacity = 1;
        h3.style.visibility = 'visible';
    }

    // Toggle the 'slide' class on the nav element
    nav.classList.toggle('slide');
});


//Animasi Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;

        // Menambahkan atau menghapus kelas "active" berdasarkan kedalaman elemen dalam viewport
        if (elementTop < windowHeight && elementBottom >= 0) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



//Navbar Click
const menu = document.querySelector(".nav");

menu.addEventListener('click', function (e) {
    const targetMenu = e.target;

    if (targetMenu.classList.contains('nav-link')) {

        const menuLinkActive = document.querySelector("ul li a.active");

        if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {

            menuLinkActive.classList.remove('active');
        }

        targetMenu.classList.add('active');
    }
});


