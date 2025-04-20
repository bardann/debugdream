// script.js

// Dynamic greeting based on the user's time
window.addEventListener('DOMContentLoaded', () => {
  const greeting = document.createElement('p');
  greeting.style.marginTop = '20px';
  greeting.style.color = '#bbbbbb';
  greeting.style.fontSize = '1rem';

  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = 'Good Morning 🌅';
  } else if (hour < 18) {
    greeting.textContent = 'Good Afternoon ☀️';
  } else {
    greeting.textContent = 'Good Evening 🌙';
  }

  document.querySelector('.container').appendChild(greeting);

  // Smooth fade in for the body
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 1.5s';
    document.body.style.opacity = 1;
  }, 100);
});

// Button click pulse animation
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.button');
  button.addEventListener('click', function() {
    button.classList.add('clicked');
    setTimeout(() => button.classList.remove('clicked'), 300);
  });
});
