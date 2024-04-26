document.addEventListener('DOMContentLoaded', function() {
    loadStudents();
    loadCourses();
});

document.getElementById('newCourseForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const courseName = document.getElementById('courseName').value;
    createCourse(courseName);
});

document.getElementById('newStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const studentCourse = document.getElementById('studentCourse').value;
    createStudent(studentName, studentCourse);
});

document.getElementById('editStudentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const studentId = document.getElementById('editStudentId').value;
    const studentName = document.getElementById('editStudentName').value;
    updateStudent(studentId, studentName);
});

function loadStudents() {
    fetch('https://vvri.pythonanywhere.com/api/students')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('studentList');
            studentList.innerHTML = '';
            data.forEach(student => {
                const li = document.createElement('li');
                li.textContent = `${student.name} (Kurzus ID: ${student.course_id}) `;
                
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Szerkeszt';
                editBtn.onclick = () => showEditStudentForm(student.id, student.name);
                li.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Törlés';
                deleteBtn.onclick = () => deleteStudent(student.id);
                li.appendChild(deleteBtn);

                studentList.appendChild(li);
            });
        }).catch(error => console.error('Hiba:', error));
}

function showEditStudentForm(studentId, studentName) {
    const form = document.getElementById('editStudentForm');
    form.style.display = 'block';
    document.getElementById('editStudentId').value = studentId;
    document.getElementById('editStudentName').value = studentName;
}

function updateStudent(studentId, studentName) {
    fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: studentName })
    }).then(response => {
        if (response.ok) {
            console.log('Diák módosítva.');
            loadStudents();
        } else {
            console.error('Hiba a diák módosítása közben.');
        }
    }).catch(error => console.error('Hiba:', error));
}

function deleteStudent(studentId) {
    fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            console.log('Diák törölve.');
            loadStudents();
        } else {
            console.error('Hiba a diák törlése közben.');
        }
    }).catch(error => console.error('Hiba:', error));
}

function loadCourses() {
    fetch('https://vvri.pythonanywhere.com/api/courses')
        .then(response => response.json())
        .then(data => {
            const courseList = document.getElementById('courseList');
            courseList.innerHTML = '';
            data.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course.name;
                courseList.appendChild(li);
            });
        }).catch(error => console.error('Hiba:', error));
}

function createCourse(name) {
    fetch('https://vvri.pythonanywhere.com/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    }).then(response => response.json())
      .then(data => {
          console.log('Kurzus hozzáadva:', data);
          loadCourses(); // Frissítsük a kurzusok listáját
      }).catch(error => console.error('Hiba:', error));
}

function createStudent(name, courseId) {
    fetch('https://vvri.pythonanywhere.com/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, course_id: courseId })
    }).then(response => response.json())
      .then(data => {
          console.log('Diák hozzáadva:', data);
          loadStudents();
      }).catch(error => console.error('Hiba:', error));
}


loadCourses(); // Indításkor töltsük be a kurzusokat
loadStudents(); // Indításkor töltsük be a diákokat