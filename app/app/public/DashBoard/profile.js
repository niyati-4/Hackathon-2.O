// Handle Profile Form
document.getElementById('profileForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let studentName = document.getElementById('studentName').value;
  let studentID = document.getElementById('studentID').value;
  let course = document.getElementById('course').value;

  if (studentName && studentID && course) {
      alert(Profile Saved: ${studentName}, ID: ${studentID}, Course: ${course});
  }
});

// Handle Academic Progress Form
document.getElementById('progressForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let subject = document.getElementById('subject').value;
  let grade = document.getElementById('grade').value;

  if (subject && grade >= 0 && grade <= 100) {
      let progressList = document.getElementById('progressList');
      let progressEntry = document.createElement('div');
      progressEntry.innerHTML = <span>${subject}</span>: ${grade}%;
      progressList.appendChild(progressEntry);

      // Clear form fields after submission
      document.getElementById('subject').value = '';
      document.getElementById('grade').value = '';
  } else {
      alert('Please enter a valid grade (0-100).');
  }
});