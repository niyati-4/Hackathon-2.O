document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message);
        window.location.href = '/login'; // Redirect to login after registration
    } else {
        alert(data.message);
    }
});
