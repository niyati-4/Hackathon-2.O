function displayCourses(coursesToDisplay) {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear existing courses

    if (coursesToDisplay.length === 0) {
        courseList.innerHTML = "<p>No courses found.</p>";
        return;
    }

    coursesToDisplay.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course";

        // Add course details and button
        courseDiv.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            <p><strong>Level:</strong> ${course.level}</p>
            <button class="course-btn" onclick="goToCourse('${course.title}')">Learn More</button>
        `;

        courseList.appendChild(courseDiv);
    });
}

// Function to handle button click and redirect to course page
function goToCourse(courseTitle) {
    // Map course titles to URLs (you can replace these with actual links)
    const courseLinks = {
        "Introduction to C Programming": "intro-to-c.html",
        "C Programming Advanced Topics": "advanced-c.html",
        "Data Structures with C": "data-structures-c.html",
        "C Programming for Embedded Systems": "embedded-c.html",
    };

    const courseUrl = courseLinks[courseTitle];
    if (courseUrl) {
        window.location.href = courseUrl; // Redirect to the corresponding URL
    } else {
        alert("Course page not available yet!");
    }
}
