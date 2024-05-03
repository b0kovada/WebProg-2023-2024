async function refresh() {
    try {
        const response = await fetch("https://vvri.pythonanywhere.com/api/courses");
        const courses = await response.json();
        document.getElementById('course-list').innerHTML = courses.map(course => `
        <div class="course-item" data-course-id="${course.id}">
        <span class="course-id">${course.id}</span>
        <h2>${course.name}</h2>
        <div class="student-list">
            ${course.students.map(student => `
                <div class="student-name" data-student-id="${student.id}">
                    ${student.name}
                    <button onclick="removeStudent('${student.id}')">Eltávolítás</button>
                    <button onclick="editStudent('${course.id}', '${student.id}')">Módosítás</button>
                </div>
            `).join('')}
        </div>
        <input type="text" class="add-student-input">
        <button onclick="addStudent(${course.id}, this)">+</button>
    </div>
    
        `).join('');
    } catch (error) {
        alert(error);
    }
}
refresh();

async function createCourse() {
    const courseNameInput = document.getElementById('course-name-input'); 
    const courseName = courseNameInput.value;
    if (courseName.trim() == "") {
        alert("Adj meg egy kurzus nevet!");
        return;
    }

    try {
        const response = await fetch("https://vvri.pythonanywhere.com/api/courses", {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ name: courseName })
        });
        courseNameInput.value = '';
        refresh();
    } catch (error) {
        alert(error);
    }
}

async function removeStudent(id) {
    const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, { method: "DELETE" });
    if (response.ok) {
        const studentElement = document.querySelector(`[data-student-id="${id}"]`);
        studentElement.remove();
    } else {
        alert("Sikertelen művelet!");
    }
}


function addStudent(courseId) {
    const courseElement = document.querySelector(`.course-item[data-course-id="${courseId}"]`);
    const input = courseElement.querySelector('.add-student-input');
    const newStudentName = input.value;
    if (newStudentName.trim() == "") {
        alert("Adj meg egy diák nevet!");
        return; 
    } 
    try{
        fetch(`https://vvri.pythonanywhere.com/api/students`, {
            method: "POST",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify({ name: newStudentName, course_id: courseId })
        }).then(response => response.json())
        .then(student => {
            const studentList = courseElement.querySelector('.student-list');
            studentList.innerHTML += `
                <div class="student-name" data-student-id="${student.id}">
                    ${student.name}
                    <button onclick="removeStudent(${student.id})">Eltávolítás</button>
                    <button onclick="editStudent(${courseId}, ${student.id})">Módosítás</button>
                </div>
            `;
            input.value = "";
        })
    }
      catch(error){
        alert(error);
      }
}

async function updateStudent(studentId, courseId) {
    const input = document.querySelector(`[data-student-id="${studentId}"] .edit-input`);
    const newName = input.value;
    if (newName.trim() == "") {
        alert("Adj meg egy diák nevet!");
        return;
    }

    const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
        method: "PUT",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ name: newName, course_id: courseId })
    });

    if (response.ok) {
        const studentDiv = document.querySelector(`[data-student-id="${studentId}"]`);
        studentDiv.innerHTML = `${newName}
            <button onclick="removeStudent('${studentId}')">Eltávolítás</button>
            <button onclick="editStudent('${courseId}', '${studentId}')">Módosítás</button>
        `;
    } else {
        alert("Sikertelen művelet!")
    }
}

function editStudent(courseId, studentId) {
    const studentDiv = document.querySelector(`[data-student-id="${studentId}"]`);
    studentDiv.innerHTML = `
        <input type="text" class="edit-input" value="">
        <button onclick="updateStudent('${studentId}', '${courseId}')">Mentés</button>
    `;
}

async function searchCourse() {
    const id = document.getElementById("input-number").value;
    if (!id) {
        refresh();
        return;
    }
    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/courses/${id}`);
        const course = await response.json();
        if (course) {
            document.getElementById('course-list').innerHTML = `
            <div class="course-item" data-course-id="${course.id}">
            <span class="course-id">${course.id}</span>
            <h2>${course.name}</h2>
            <div class="student-list">
                ${course.students.map(student => `
                    <div class="student-name" data-student-id="${student.id}">
                        ${student.name}
                        <button onclick="removeStudent('${student.id}')">Eltávolítás</button>
                        <button onclick="editStudent('${course.id}', '${student.id}')">Módosítás</button>
                    </div>
                `).join('')}
            </div>
            <input type="text" class="add-student-input">
            <button onclick="addStudent(${course.id}, this)">+</button>
            </div>

            `;
        }
    } catch (error) {
        alert(error);
    }
}


async function searchStudent() {
    const id = document.getElementById("input-number").value;
    if (!id) {
        refresh();
        return;
    }
    try {
        const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${id}`);
        const student = await response.json();
        if (student) {
            document.getElementById('course-list').innerHTML = `
            <div class="student-item" data-student-id="${student.id}">
            <span class="student-name">${student.name}</span>
            <button onclick="removeStudent(${student.id})">Eltávolítás</button>
            </div>
            `;
        }
    } catch (error) {
        alert(error);
    }
}

