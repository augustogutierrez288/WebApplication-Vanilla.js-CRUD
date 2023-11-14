const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

function checkLoggedIn() {
  if (isLoggedIn) {
    return true;
  } else {
    window.location.href = "/index.html";
    return false;
  }
}

checkLoggedIn()

