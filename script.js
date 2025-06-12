
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => { navLinks.classList.toggle('show'); });
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark");
  }
});
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }
  formStatus.classList.add('show');
  setTimeout(() => formStatus.classList.remove('show'), 3000);
  form.reset();
});
