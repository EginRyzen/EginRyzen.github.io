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
    var navLink = document.querySelectorAll('.nav-link');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementBottom = reveals[i].getBoundingClientRect().bottom;

        // Menambahkan atau menghapus kelas "active" berdasarkan kedalaman elemen dalam viewport
        if (elementTop < windowHeight && elementBottom >= 0) {
            reveals[i].classList.add("active");
        } else {
            // navLink.classList.remove("active");
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.nav a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
