const user = document.getElementById("input-user");
const password = document.getElementById("input-password");
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", () => {
    if(user.value === "augusto" && password.value === "1234"){
       document.location.href = "pages/dashboard.html" 
    }else{
        alert("usuario erroneo")
    }
    
})