const username = document.getElementById("input-user");
const password = document.getElementById("input-password");
const btnRegister = document.getElementById("btn-register");
const btnLogin = document.getElementById("btn-login");
const boxLoading = document.getElementById("box-dots-flow");

let registeredUsers = [];

if(localStorage.getItem("users")){
    registeredUsers = JSON.parse(localStorage.getItem("users"));
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
    return registeredUsers.find((e) => e.username === username) !== undefined;
}

function validateUser(user) {
    return user.username !== "" && user.password !== "";
}


function loading(){
    boxLoading.innerHTML = "";
    boxLoading.innerHTML = 
            `
                <div class="dots-flow"></div>
            `
    
}


btnLogin.addEventListener("click", () => {
    const user = {
      username: username.value,
      password: password.value
    };
  
    if (!validateUser(user)) {
      notify("Todos los campos son obligatorios", "#FF033E");
      return;
    }
  
    if (userExists(user.username)) {
        loading();
        setTimeout(()=>{
            btnLogin.innerHTML = "";
            btnLogin.innerHTML = " Acceso concedido";
            document.location.href = "pages/dashboard.html"
            username.value = "";
            password.value = "";
            localStorage.setItem("isLoggedIn", true)
        },4000)
    } else {
        notify("El usuario no existe", "#FF033E");
    }

});