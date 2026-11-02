let students = [];

const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
form.addEventListener("submit", function(event) {
    
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const course = document.getElementById("course").value.trim();
    const email = document.getElementById("email").value.trim();

    const student = { name, roll, course, email };

    students.push(student);

    displayStudents();
    form.reset();
});

function displayStudents() {
    studentList.innerHTML = "";

    students.forEach(function(student) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.course}</td>
            <td>${student.email}</td>
            <td>
                <button onclick="deleteStudent('${student.roll}')">
                    Delete
                </button>
            </td>
        `;

        studentList.appendChild(row);
    });
}

function deleteStudent(roll) {
    students = students.filter(function(student) {
        return student.roll !== roll;
    });

    displayStudents();
}
document.getElementById("search").addEventListener("input", function () {
    let value = this.value.toLowerCase();

    let filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(value) ||
        student.roll.toLowerCase().includes(value)
    );

    displayStudents(filteredStudents);
});
