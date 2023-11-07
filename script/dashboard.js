const nameUser = document.getElementById("input-name");
const surnameUser = document.getElementById("input-surname");
const commission = document.getElementById("commission");
const addStudent = document.getElementById("btn-add-student");
const studentTable = document.getElementById("student-table");
const boxSidebar = document.getElementById("box-sidebar");
const btnSidebarToggle = document.getElementById("btn-sidebars-toggle");
let formStudent;
let btnModifyForm;
let clickCount = 0;
let ID = 0;
let arrayStudent = [];


btnSidebarToggle.addEventListener("click", () => {
    boxSidebar.classList.toggle("open");
})


function notify(message, color) {
    Toastify({
      text: message,
      duration: 3000,
      newWindow: true,
      close: false,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        background: color,
        borderRadius: "10px",
      },
    }).showToast();
}
document.addEventListener("DOMContentLoaded", () => {
    notify("Bienvenido", "#662d91");
});

function paintElement(array){
    studentTable.innerHTML = "";
    array.forEach((student) => {
        const ctStudent = document.createElement("div");
        ctStudent.classList.add("student");
        ctStudent.innerHTML = 
                                `
                                <div class="d-flex justify-content-center align-items-center gap-3 m-1" id="${student.id}"> 
                                <p id="name${student.id}"> Nombre: ${student.name} </p>
                                <p id="surname${student.id}"> Apellido: ${student.surname} </p>
                                <p id="commission${student.id}">Comision: ${student.commission}</p>
                                <button class="btn btn-success" id="modify${student.id}">Modificar</button>
                                <button class="btn btn-danger" id="delete${student.id}">Eliminar</button>
                                </div>
                                `
        studentTable.appendChild(ctStudent);     
        
        const btnModify = document.getElementById(`modify${student.id}`);
        const btnDelete = document.getElementById(`delete${student.id}`);

        btnModify.addEventListener("click",()=>{
            modifyStudent(array,student.id)
        })

        btnDelete.addEventListener("click",()=>{
            deleteStudent(array, student.id)
        })
    })
}


addStudent.addEventListener("click", () => {
    
    const objectStudent = {
        id: ID,
        name: nameUser.value,
        surname: surnameUser.value,
        commission: commission.value,
        teacher: "----"
    }

    arrayStudent.push(objectStudent);
    console.table(arrayStudent);
    nameUser.value = "";
    surnameUser.value = "";
    commission.value = "";
    ID = ID + 1;

    paintElement(arrayStudent);

    
})

function modifyStudent(arrayStudent, studentId) {
    
    if(clickCount === 0){
        formStudent = document.getElementById("form-student");
        btnModifyForm = document.createElement("button");
        const idBtn = document.createAttribute("id");
        idBtn.value = "btn-modify-form";
        btnModifyForm.setAttributeNode(idBtn);
        btnModifyForm.classList.add("btn", "btn-success");
        btnModifyForm.textContent = "Modificar";
        formStudent.appendChild(btnModifyForm);
        clickCount++;  
    }
    

    const student =  arrayStudent.find(e => e.id === studentId);
    const studentIndex = arrayStudent.findIndex((student) => student.id === studentId);

    if (student && studentIndex !== -1) {

        nameUser.value = student.name;
        surnameUser.value = student.surname;
        commission.value = student.commission;

        btnModifyForm.addEventListener("click", (e) =>{
            e.preventDefault();

            const newStudent = {
                id: student.id,
                name: nameUser.value,
                surname: surnameUser.value,
                commission:commission.value
            }
            
            arrayStudent[studentIndex] = {
                ...arrayStudent[studentIndex],
                ...newStudent,}
            
            nameUser.value = "";
            surnameUser.value = "";
            commission.value = "";
            paintElement(arrayStudent);
            formStudent.removeChild(btnModifyForm);
            clickCount = 0;
        })
    }else {
      throw new Error(`El estudiante con el ID ${studentId} no existe`);
    }
  }
  


function deleteStudent(arrayStudent, studentId) {
    const studentIndex = arrayStudent.findIndex((student) => student.id === studentId);

    if (studentIndex !== -1) {
        arrayStudent.splice(studentIndex, 1);
        console.table(arrayStudent);
        paintElement(arrayStudent);
    } else {
        throw new Error(`El estudiante con el ID ${studentId} no existe`);
    }
}

