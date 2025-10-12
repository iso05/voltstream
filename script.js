const hamburger = document.querySelector(".hamburger")
const header = document.querySelector(".header")
const navLinks = document.querySelector(".nav-links")
const h2 = document.querySelector('.home-text h2');
const light = document.querySelector('.light');

h2.addEventListener('mousemove', (e) => {
  const rect = h2.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  light.style.setProperty('--x', x + 'px');
  light.style.setProperty('--y', y + 'px');
  light.style.opacity = 1;
});

h2.addEventListener('mouseleave', () => {
  light.style.opacity = 0;
});
h2.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  const rect = h2.getBoundingClientRect();
  const x = touch.clientX - rect.left;
  const y = touch.clientY - rect.top;
  light.style.setProperty('--x', x + 'px');
  light.style.setProperty('--y', y + 'px');
  light.style.opacity = 1;
  h2.style.color = "#000"; // qora bo'ladi
});

h2.addEventListener('touchend', () => {
  light.style.opacity = 0;
  h2.style.color = "white"; // oq holatga qaytadi
});
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.innerHTML = navLinks.classList.contains("show")
    ? '<i class="fas fa-times"></i>'    // close icon
    : '<i class="fas fa-bars"></i>';   // burger icon
});
const links = document.querySelectorAll(".nav-links li a");

links.forEach(link => {
  link.addEventListener("click", function() {
    // Active class boshqasidan olib tashlaymiz
    links.forEach(l => l.classList.remove("active"));
    this.classList.add("active");

    // Menuni yopamiz (telefon/planshetda)
    navLinks.classList.remove("show"); 
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  });
});
window.addEventListener("scroll", () => {
  if (navLinks.classList.contains("show")) {
    navLinks.classList.remove("show");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // qaytib burger icon bo‘lsin
  }
});