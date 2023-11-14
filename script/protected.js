const btnOff = document.getElementById("off");
const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

btnOff.addEventListener("click", ()=>{
    localStorage.removeItem("isLoggedIn")
})

function checkLoggedIn() {
  if (isLoggedIn) {
    return true;
  } else {
    window.location.href = "https://augustogutierrez288.github.io/WebApplication-Vanilla.js-CRUD/";
    return false;
  }
}

checkLoggedIn()

