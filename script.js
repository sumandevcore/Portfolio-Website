// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact Form Validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    if (name.value.trim() === '') {
      alert('Please enter your name!');
      name.focus();
      return;
    }
    if (email.value.trim() === '') {
      alert('Please enter your email!');
      email.focus();
      return;
    }
    alert('Form submitted successfully!');
    form.reset();
  });
}

// Animated Skill Bars
const skillBars = document.querySelectorAll('#skills li');
skillBars.forEach(bar => {
  const width = Math.floor(Math.random() * 80) + 20;
  bar.style.width = '0%';
  bar.style.backgroundColor = '#38bdf8';
  bar.style.padding = '10px';
  bar.style.borderRadius = '8px';
  bar.style.transition = 'width 1.5s ease-in-out';
  setTimeout(() => {
    bar.style.width = width + '%';
  }, 300);
});

// Dark Mode Toggle
const body = document.body;
const darkModeBtn = document.createElement('button');
darkModeBtn.textContent = 'Toggle Dark Mode';
darkModeBtn.style.position = 'fixed';
darkModeBtn.style.bottom = '20px';
darkModeBtn.style.right = '20px';
darkModeBtn.style.padding = '10px 15px';
darkModeBtn.style.border = 'none';
darkModeBtn.style.borderRadius = '5px';
darkModeBtn.style.cursor = 'pointer';
darkModeBtn.style.background = '#38bdf8';
darkModeBtn.style.color = '#000';
darkModeBtn.style.zIndex = '1000';
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('light-mode');
});

const style = document.createElement('style');
style.textContent = `
body.light-mode { background: #f0f0f0; color: #111; }
body.light-mode #hero { background: linear-gradient(to right, #a5b4fc, #818cf8); }
body.light-mode #skills li { background: #818cf8 !important; }
body.light-mode input, body.light-mode button { color: #111; }
`;
document.head.appendChild(style);

// Projects Hover Effect
const projectItems = document.querySelectorAll('#projects p');
projectItems.forEach(proj => {
  proj.style.transition = 'transform 0.3s, color 0.3s';
  proj.addEventListener('mouseover', () => {
    proj.style.transform = 'scale(1.05)';
    proj.style.color = '#38bdf8';
  });
  proj.addEventListener('mouseout', () => {
    proj.style.transform = 'scale(1)';
    proj.style.color = '#cbd5e1';
  });
});

// Hero Section Fade-in Animation
const hero = document.getElementById('hero');
if (hero) {
  hero.style.opacity = 0;
  hero.style.transition = 'opacity 2s ease-in';
  window.addEventListener('load', () => {
    hero.style.opacity = 1;
  });
}
