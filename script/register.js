const btnRegister = document.getElementById("btn-register");
const inputCreateUser = document.getElementById("input-create-user");
const inputCreatePassword = document.getElementById("input-create-password");
const arrayUsers = [];

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

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(arrayUsers));
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
    saveUsers();
    notify("Usuario creado con éxito", "#662d91");

    inputCreateUser.value = "";
    inputCreatePassword.value = "";
  }
});

