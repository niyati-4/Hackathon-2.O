document.getElementById('progressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const marks = parseInt(document.getElementById('marks').value);
    const totalMarks = parseInt(document.getElementById('totalMarks').value);
  

    const percentage = (marks / totalMarks) * 100;
  
    let progressMessage = Student: ${studentName}<br>Subject: ${subject}<br>Marks: ${marks}/${totalMarks}<br>Percentage: ${percentage.toFixed(2)}%<br>;
  
    if (percentage >= 90)
    {
        progressMessage += '<strong>Excellent progress!</strong>'
    } 
    else if (percentage >= 75)
    {
       progressMessage += '<strong>Good progress!</strong>'
    }
    else if (percentage >= 50) 
    {
       progressMessage += '<strong>Needs improvement.</strong>'
    } 
    else
    {
       progressMessage += '<strong>Poor progress. Consider additional support.</strong>'
       grade 
    }
  
    document.getElementById('result').innerHTML = progressMessage;
  })