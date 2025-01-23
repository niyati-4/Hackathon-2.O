document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (response.ok) {
      alert(data.message);
      window.location.href = '/dashboard'; // Redirect to the dashboard after login
  } else {
      alert(data.message);
  }
});
// Handle login form submission
document.getElementById('login-form').addEventListener('submit', async function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();

  if (response.ok) {
    // Store token in localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('userName', data.userName); // Store username as well

    // Redirect to dashboard
    window.location.href = '/dashboard';
  } else {
    alert(data.message);
  }
});
