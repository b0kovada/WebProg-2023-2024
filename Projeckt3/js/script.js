document.getElementById('new-course-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const courseName = document.getElementById('course-name').value;
    createCourse(courseName);
});

function fetchCourses() {
    fetch('https://vvri.pythonanywhere.com/api/courses')
        .then(response => response.json())
        .then(data => {
            const coursesList = document.getElementById('courses-list');
            coursesList.innerHTML = '';
            data.forEach(course => {
                coursesList.innerHTML += `<div>${course.name}</div>`;
            });
        })
        .catch(error => console.error('Error fetching courses:', error));
}

function createCourse(name) {
    fetch('https://vvri.pythonanywhere.com/api/courses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Course created:', data);
        fetchCourses(); // Refresh the courses list
    })
    .catch(error => console.error('Error creating course:', error));
}

// Call fetchCourses initially to load the courses
fetchCourses();
// Fetching and displaying all students
function fetchStudents() {
    fetch('https://vvri.pythonanywhere.com/api/students') // Modify with the correct API endpoint for students
        .then(response => response.json())
        .then(data => {
            const studentsList = document.getElementById('students-list');
            studentsList.innerHTML = '';
            data.forEach(student => {
                studentsList.innerHTML += `<div>${student.name} <button onclick="editStudentForm(${student.id})">Edit</button> <button onclick="deleteStudent(${student.id})">Delete</button></div>`;
            });
        })
        .catch(error => console.error('Error fetching students:', error));
}

// Handling the submission of the student edit form
document.getElementById('edit-student-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const studentName = document.getElementById('student-name').value;
    updateStudent(studentName); // This function needs an ID to update the correct student
});

// Updating student data
function updateStudent(id, name) {
    fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student updated:', data);
        fetchStudents(); // Refresh the students list
    })
    .catch(error => console.error('Error updating student:', error));
}

// Deleting a student
function deleteStudent(id) {
    fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        console.log('Student deleted:', response);
        fetchStudents(); // Refresh the students list after deletion
    })
    .catch(error => console.error('Error deleting student:', error));
}

function addStudent(name) {
    if (!name.trim()) {
        alert('Please enter a valid student name.');
        return;
    }
    fetch('https://vvri.pythonanywhere.com/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student added:', data);
        fetchStudents(); // Refresh the students list
    })
    .catch(error => {
        console.error('Error adding student:', error);
        alert('Failed to add student. Please try again.');
    });
}

// Ensure the editStudentForm function captures the student ID correctly and pre-fills the form.
function editStudentForm(id) {
    fetch(`https://vvri.pythonanywhere.com/api/students/${id}`)
        .then(response => response.json())
        .then(data => {
            const studentNameInput = document.getElementById('student-name');
            studentNameInput.value = data.name;
            const form = document.getElementById('edit-student-form');
            form.onsubmit = function(event) {
                event.preventDefault();
                updateStudent(id, studentNameInput.value);
            }
        })
        .catch(error => {
            console.error('Error fetching student details:', error);
            alert('Failed to fetch student details. Please try again.');
        });
}

// Initialize fetchStudents to load the students on page load
fetchStudents();