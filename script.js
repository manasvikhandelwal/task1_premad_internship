function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
  
    if (username === "" || password === "") {
      errorMessage.textContent = "Username or password is empty";
    } else {
      
      if (username === "admin" && password === "password") {
      
        window.location.href = "dashboard.html";
      } else {
        errorMessage.textContent = "Invalid username or password";
      }
    }
  }
  
  function openModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
  }
  
  function signup() {
    var signupUsername = document.getElementById("signup-username").value;
    var signupPassword = document.getElementById("signup-password").value;
    var signupEmail = document.getElementById("signup-email").value;
    var signupErrorMessage = document.getElementById("signup-error-message");
  
    if (signupUsername === "" || signupPassword === "" || signupEmail === "") {
      signupErrorMessage.textContent = "Please fill in all the fields";
    } else {
      
      var modalContent = document.querySelector(".modal-content");
      modalContent.innerHTML = `
        <h2>Sign Up Details</h2>
        <p><strong>Username:</strong> ${signupUsername}</p>
        <p><strong>Password:</strong> ${signupPassword}</p>
        <p><strong>Email:</strong> ${signupEmail}</p>
      `;
    }
  }