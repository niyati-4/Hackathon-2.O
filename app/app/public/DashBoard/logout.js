document.getElementById('logoutButton').addEventListener('click', function () {
    // Clear local storage or session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to login or home page
    window.location.href = '/login';
});