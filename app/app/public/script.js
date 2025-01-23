document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result.token) {
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  

  // Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
  
  // Dynamic greeting in the hero section (optional)
  document.addEventListener('DOMContentLoaded', () => {
    const heroGreeting = document.querySelector('.hero h1');
    const hour = new Date().getHours();
  
    let greeting = "Welcome!";
    if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }
  
    heroGreeting.textContent = `${greeting} Track and Enhance Your Academic Journey`;
  });
  