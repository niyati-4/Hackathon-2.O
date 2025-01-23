window.onload = () => {
    // Simulate user login
    const username = 'JohnDoe'; // Replace with dynamic data from login
    document.getElementById('username').innerText = username;

    // Simulate fetching student progress data
    const progressData = [
        { subject: 'Mathematics', progress: 80 },
        { subject: 'Science', progress: 70 },
        { subject: 'History', progress: 90 }
    ];

    // Inject progress data dynamically into the progress section
    const progressContainer = document.getElementById('progress-container');
    progressData.forEach(data => {
        const progressElement = document.createElement('div');
        progressElement.classList.add('subject-progress');
        progressElement.innerHTML = `
            <h3>${data.subject}</h3>
            <div class="progress-bar" style="width: ${data.progress}%;"></div>
        `;
        progressContainer.appendChild(progressElement);
    });

    // Simulate fetching course data for enrollment
    const courses = [
        { name: 'Python Programming', id: 'python' },
        { name: 'JavaScript Basics', id: 'javascript' },
        { name: 'Machine Learning', id: 'ml' }
    ];

    // Inject course enrollment buttons dynamically
    const courseContainer = document.getElementById('course-container');
    courses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.classList.add('course-btn');
        courseButton.innerText = `Enroll in ${course.name}`;
        courseButton.onclick = () => enrollInCourse(course.id);
        courseContainer.appendChild(courseButton);
    });
};

// Function to simulate course enrollment
function enrollInCourse(courseId) {
    alert(`You have enrolled in ${courseId.toUpperCase()} course.`);
}
window.onload = () => {
    // Retrieve username from localStorage
    const userName = localStorage.getItem('userName');
    
    if (userName) {
      // Dynamically set the username in the profile section of the dashboard
      document.getElementById('username').innerText = userName;
    } else {
      console.error('No user logged in!');
    }
  };
  window.onload = () => {
    // Retrieve username from localStorage
    const userName = localStorage.getItem('userName');
  
    if (userName) {
        // Dynamically set the username in the profile section of the dashboard
        document.getElementById('username').innerText = userName;
    }

    // Profile dropdown toggle
    const profileMenu = document.getElementById('profile-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');

    profileMenu.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown menu if clicked outside
    document.addEventListener('click', function (event) {
        if (!profileMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Handle logout
    document.getElementById('logout-btn').addEventListener('click', function () {
        // Clear stored data (token, username)
        localStorage.removeItem('token');
        localStorage.removeItem('userName');

        // Redirect to login page or reload the page
        window.location.href = '/login';  // Or window.location.reload();
    });
};
  