// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
  const scrollProgress = document.getElementById('progress-bar');
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  scrollProgress.style.width = `${progress}%`;
});

// Typing Effect
const typingEffect = document.querySelector('.typing-effect');
const text = typingEffect.textContent;
typingEffect.textContent = '';

let i = 0;
const type = () => {
  if (i < text.length) {
    typingEffect.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
};

type();

// Navbar Interaction on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* filepath: /e:/Portfolio/script.js */
// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});