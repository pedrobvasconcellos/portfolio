document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Opcional: fechar o menu ao clicar em um item
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Carregar tema salvo
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.classList.remove('fa-moon');
  toggleBtn.classList.add('fa-sun');
} else {
  toggleBtn.classList.remove('fa-sun');
  toggleBtn.classList.add('fa-moon');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  toggleBtn.classList.toggle('fa-moon', !isDark);
  toggleBtn.classList.toggle('fa-sun', isDark);

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


