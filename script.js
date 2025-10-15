// ===== Smooth Scrolling =====
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Typing Effect =====
const typed = new Typed('.typing', {
    strings: [
     "A Passionate PHP Developer",
    "A Laravel and SQL Enthusiast",
    "A Creative Problem Solver"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
  