const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

function checkLoggedIn() {
  if (isLoggedIn) {
    return true;
  } else {
    document.location.href = "/index.html";
    return false;
  }
}

checkLoggedIn()

