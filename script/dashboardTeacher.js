const boxSidebar = document.getElementById("box-sidebar");
const btnSidebarToggle = document.getElementById("btn-sidebars-toggle");
const selectCareers = document.getElementById("careers-teacher");
const selectTeacher = document.getElementById("teacher-select");
const selectCommission = document.getElementById("commission-select");
const boxTableStudentCommission = document.getElementById("table-student-commission");
const btnOff = document.getElementById("off");

let teacherFilter;
let studentTUMI;
let studentTUP;
let studentTUM;
let studentTUHS;
let studentTUES;
let studentTUL;

let arrayTeacher = [];
let studentDB = [];

if(localStorage.getItem("student")){
    studentDB = JSON.parse(localStorage.getItem("student"));
    studentTUMI = studentDB.filter((e) => e.careers === "TUMI" );
    studentTUP = studentDB.filter((e) => e.careers === "TUP" );
    studentTUM = studentDB.filter((e) => e.careers === "TUM"  )
    studentTUHS = studentDB.filter((e) => e.careers === "TUHS" );
    studentTUES = studentDB.filter((e) => e.careers === "TUES" );
    studentTUL = studentDB.filter((e) => e.careers === "TUL" );
};





const DDBB = "../JSON/teacher.json";

const getTeacher = async () =>{
    const response = await fetch(DDBB);
    const data = await response.json();

    arrayTeacher.push(...data);
};

function paintCareersSelects(){
    selectCareers.innerHTML = "";
    selectCareers.innerHTML = `
    <option selected>Carrera</option>
    <option value="TUMI">Tecnicatura universitaria en mantenimiento industrial</option>
    <option value="TUHS">Tecnicatura universitaria en higiene y seguridad</option>
    <option value="TUES">Tecnicatura universitaria en energia sustentable</option>
    <option value="TUP">Tecnicatura universitaria en programacion</option>
    <option value="TUM">Tecnicatura universitaria en mecatronica</option>
    <option value="TUL">Tecnicatura universitaria en logistica</option>
    `
    selectTeacher.innerHTML = "<option selected>Profesor</option>"
};

function paintTeacherSelects(array){
    selectTeacher.disabled = false;
    selectTeacher.innerHTML = "";
    selectTeacher.innerHTML = `
    <option selected>Profesor</option>
    `;
    array.forEach((e) => {
        const option = document.createElement("option");
        const value = document.createAttribute("value");
        value.value = `${e.nombre} ${e.apellido}`;
        option.setAttributeNode(value);
        option.textContent = `${e.nombre} ${e.apellido}`;
        selectTeacher.appendChild(option);

    });

};

function paintStudentCommission(studentFilter, commission){
    const studentCommission = studentFilter.filter((e) => e.commission === commission);
    boxTableStudentCommission.innerHTML = "";
    if(studentCommission.length === 0){
        boxTableStudentCommission.innerHTML = `
            <p class="notificacion">No hay Alumnos cargados en la comision ${commission}</p>
        `
    }else{
        studentCommission.forEach((student) => {
            const articleStudent = document.createElement("article");
            articleStudent.classList.add("article-student");
            articleStudent.innerHTML = 
                                    `
                                    <p id="name${student.id}"> Nombre: ${student.name} </p>
                                    <p id="surname${student.id}"> Apellido: ${student.surname} </p>
                                    <p id="file${student.id}">Legajo: ${student.file}</p>
                                    <p id="careers-student${student.id}">Carrera: ${student.careers}</p>
                                    <p id="commission${student.id}">Comision: ${student.commission}</p>
                                    `
            boxTableStudentCommission.appendChild(articleStudent);
        })
    }
}

btnSidebarToggle.addEventListener("click", () => {
    boxSidebar.classList.toggle("open");
});

selectCareers.addEventListener("change", () => {
    teacherFilter = arrayTeacher.filter(e => e.materia === selectCareers.value)
    paintTeacherSelects(teacherFilter)
});

selectTeacher.addEventListener("change", () =>{
    selectCommission.disabled = false;
    let teacher = selectTeacher.value
    switch(teacher){
        case "Ing. Juan Pérez García":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Ing. María López González":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Ing. Pedro Rodríguez Sánchez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break;
        case "Ing. Ana María García Martínez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Ing. José Luis Fernández González":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Ing. Sandra Pérez Sánchez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break;
        case "Licenciado Carlos López García":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Dra. Laura Fernández Martínez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Ing. José González Sánchez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break;
        case "Martín Pérez García":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Ing Fernanda Fernández Martínez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Lic. Antonio González Sánchez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break;
        case "Ana Lucía Pérez García":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Ing. Daniel Fernández Martínez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Sandra González Sánchez":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break;
        case "Agostina Juarez Alvarado":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            `
            break;
        case "Dr. Leonel Marcos Guzman":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            `
            break;
        case "Ing. Sofia ristaldo":
            selectCommission.innerHTML = "";
            selectCommission.innerHTML = `
            <option selected>Comisiones</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            `
            break
        default:
                console.error("No existe ningun profesor")
                break;
    }
});

selectCommission.addEventListener("change", () =>{
    switch(selectCareers.value){
        case "TUMI":
            paintStudentCommission(studentTUMI,selectCommission.value);
            break;
        case "TUP":
            paintStudentCommission(studentTUP,selectCommission.value);
            break;
        case "TUM":
            paintStudentCommission(studentTUM,selectCommission.value);
            break;
        case "TUHS":
            paintStudentCommission(studentTUHS,selectCommission.value);
            break;
        case "TUES":
            paintStudentCommission(studentTUES,selectCommission.value);
            break;
        case "TUL":
            paintStudentCommission(studentTUL,selectCommission.value);
            break;
        default:
            console.error("No existe la comision y la carrera seleccionada.")
            break;
    }
})


btnOff.addEventListener("click", ()=>{
    localStorage.removeItem("isLoggedIn")
})

getTeacher();
paintCareersSelects();


