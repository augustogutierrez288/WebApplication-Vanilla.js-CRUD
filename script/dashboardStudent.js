const nameUser = document.getElementById("input-name");
const surnameUser = document.getElementById("input-surname");
const careersSelect = document.getElementById("careers");
const shiftsSelect = document.getElementById("shifts");
const commissionSelect = document.getElementById("commission");
const addStudent = document.getElementById("btn-add-student");
const studentTable = document.getElementById("student-table");
const boxSidebar = document.getElementById("box-sidebar");
const btnSidebarToggle = document.getElementById("btn-sidebars-toggle");

let formStudent;
let btnModifyForm;

let clickCount = 0;
let ID = 0;
let arrayStudent = [];

if(localStorage.getItem("student")){
    arrayStudent = JSON.parse(localStorage.getItem("student"));
};


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
function paintCareers(){
    careersSelect.innerHTML = "";
    careersSelect.innerHTML = `
        <option selected>Carrera</option>
        <option value="TUMI">Tecnicatura universitaria en mantenimiento industrial</option>
        <option value="TUHS">Tecnicatura universitaria en higiene y seguridad</option>
        <option value="TUES">Tecnicatura universitaria en energia sustentable</option>
        <option value="TUP">Tecnicatura universitaria en programacion</option>
        <option value="TUM">Tecnicatura universitaria en mecatronica</option>
        <option value="TUL">Tecnicatura universitaria en logistica</option>
    `;
}

function shiftsLogic(){
    shiftsSelect.addEventListener("change", () => {
        const shifts = shiftsSelect.value;
        if (shifts === "Mañana") {
            commissionSelect.innerHTML = `
            <option selected>Comision</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `;
        } else if (shifts === "Tarde") {
            commissionSelect.innerHTML = `
            <option selected>Comision</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `;
        } else if (shifts === "Noche") {
            commissionSelect.innerHTML = `
            <option selected>Comision</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `;
        }else {
            commissionSelect.innerHTML = `
            <option selected>Comision</option>
            `;
        }
    });
}

function careersLogic(){
    careersSelect.addEventListener("change", () => {
        if (careersSelect.value === "TUMI" || careersSelect.value === "TUHS" || careersSelect.value === "TUES" || careersSelect.value === "TUP" || careersSelect.value === "TUM" || careersSelect.value === "TUL") {
          shiftsSelect.disabled = false;
          commissionSelect.disabled = false;
        } else {
          shiftsSelect.disabled = true;
          commissionSelect.disabled = true;
        }
    });
      
   shiftsLogic();
}

function randomFile() {
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const legajo = [];
  
    for (let i = 0; i < 5; i++) {
      legajo.push(numeros[Math.floor(Math.random() * numeros.length)]);
    }
  
    return legajo.join("");
}
  

paintCareers();
careersLogic();
paintElement(arrayStudent);
function paintElement(array){
    studentTable.innerHTML = "";
    localStorage.setItem("student",JSON.stringify(array));
    array.forEach((student) => {
        const ctStudent = document.createElement("div");
        ctStudent.classList.add("student");
        ctStudent.innerHTML = 
                                `
                                <div id="${student.id}"> 
                                <p id="name${student.id}"> Nombre: ${student.name} </p>
                                <p id="surname${student.id}"> Apellido: ${student.surname} </p>
                                <p id="file${student.id}">Legajo: ${student.file}</p>
                                <p id="careers-student${student.id}">Carrera: ${student.careers}</p>
                                <p id="shifts${student.id}">Turno: ${student.shifts}</p>
                                <p id="commission${student.id}">Comision: ${student.commission}</p>
                                <div class="container-btn d-flex justify-content-center align-items-center gap-2">
                                    <button class="btn btn-success" id="modify${student.id}">Modificar</button>
                                    <button class="btn btn-danger d-flex justify-content-center align-items-center" id="delete${student.id}"><img class="m-0 p-0" src="../assets/img/eliminar.png" alt="eliminar" style= "width: 18px;"></button>
                                </div>

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
        addStudent.classList.add("close");
        clickCount++;  
    }

    commissionSelect.innerHTML = `
        <option selected>Comision</option>
    `;
    shiftsLogic()
    const student =  arrayStudent.find(e => e.id === studentId);
    const studentIndex = arrayStudent.findIndex((student) => student.id === studentId);

    if (student && studentIndex !== -1) {

        nameUser.value = student.name;
        surnameUser.value = student.surname;

        btnModifyForm.addEventListener("click", (e) =>{
            e.preventDefault();

            const newStudent = {
                id: student.id,
                name: nameUser.value,
                surname: surnameUser.value,
                file: student.file,
                careers: careersSelect.value,
                shifts: shiftsSelect.value,
                commission: commissionSelect.value,
            }

            arrayStudent[studentIndex] = {
                ...arrayStudent[studentIndex],
                ...newStudent,}

            nameUser.value = "";
            surnameUser.value = "";
            commissionSelect.innerHTML = `
            <option selected>Comision</option>
            `;
            shiftsSelect.disabled = true;
            commissionSelect.disabled = true;
            paintElement(arrayStudent);
            addStudent.classList.remove("close");
            formStudent.removeChild(btnModifyForm);
            clickCount = 0;
            paintCareers();
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
        paintCareers();
    } else {
        throw new Error(`El estudiante con el ID ${studentId} no existe`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    notify("Bienvenido", "#662d91");
});

btnSidebarToggle.addEventListener("click", () => {
    boxSidebar.classList.toggle("open");
})

addStudent.addEventListener("click", () => {
    const file = randomFile();
    const objectStudent = {
        id: ID,
        name: nameUser.value,
        surname: surnameUser.value,
        file: file,
        careers: careersSelect.value,
        shifts: shiftsSelect.value,
        commission: commission.value,
    }

    arrayStudent.push(objectStudent);
    nameUser.value = "";
    surnameUser.value = "";
    paintCareers();
    commissionSelect.innerHTML = `
    <option selected>Comision</option>
    `;
    shiftsSelect.disabled = true;
    commissionSelect.disabled = true;
    ID = ID + 1;
    shiftsLogic()
    paintElement(arrayStudent);

    
})