document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit');
    const nicknameInput = document.getElementById('nickname');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const displayPassword = document.getElementById('hideUnhide');

    nicknameInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') { 
        event.preventDefault(); 
        submitBtn.click(); 
      }
    });
  
    passwordInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') { 
        submitBtn.click(); 
      }
    });

    displayPassword.addEventListener('click', function(event) {
        if (passwordInput.type === 'password') {
          passwordInput.type = 'text'; 
          displayPassword.innerText = 'Hide'; 
        } else {
          passwordInput.type = 'password'; 
          displayPassword.innerText = 'Show'; 
        }
    });

    submitBtn.addEventListener('click', function(event) {
      const nickname = document.getElementById('nickname').value;
      const password = document.getElementById('password').value;
  
      if (nickname === 'Admin' && password === 'Admin') {
        window.location.href = 'admin.html';
      } else if (nickname === 'Laci' && password === 'Keating') {
        window.location.href = 'my-stable.html';
      } else {
        errorMessage.innerText = 'Invalid credentials. Please try again.';
      }
    });
  });