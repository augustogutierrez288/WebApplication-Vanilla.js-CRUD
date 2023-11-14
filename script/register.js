const btnRegister = document.getElementById("btn-register");
const inputCreateUser = document.getElementById("input-create-user");
const inputCreatePassword = document.getElementById("input-create-password");
const boxLoading = document.getElementById("box-loading-r");
let arrayUsers = [];

if(localStorage.getItem("users")){
  arrayUsers = JSON.parse(localStorage.getItem("users"));
}

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

function userExists(username) {
  return arrayUsers.find((e) => e.username === username) !== undefined;
}

function validateUser(user) {
  return user.username !== "" && user.password !== "";
}

function saveUsers(array) {
  localStorage.setItem("users", JSON.stringify(array));
}

btnRegister.addEventListener("click", () => {
  const user = {
    username: inputCreateUser.value,
    password: inputCreatePassword.value,
  };

  if (!validateUser(user)) {
    notify("Todos los campos son obligatorios", "#FF033E");
    return;
  }

  if (userExists(user.username)) {
    notify("El usuario ya existe", "#FF033E");
  } else {
    arrayUsers.push(user);
    saveUsers(arrayUsers);
    notify("Usuario creado con éxito", "#662d91");
    notify("Redireccionando...", "#662d91");
    setTimeout(()=>{
      document.location.href = "/index.html";
    },3000)

    inputCreateUser.value = "";
    inputCreatePassword.value = "";
  }
});

