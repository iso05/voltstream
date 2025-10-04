const hamburger = document.querySelector(".hamburger")
const header = document.querySelector(".header")
const navLinks = document.querySelector(".nav-links")
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