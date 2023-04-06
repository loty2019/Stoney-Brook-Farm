let index = 0;
  const images = [
    "Images/1.jpg",
    "Images/2.jpg",
    "Images/3.jpg",
    "Images/4.jpg",
    "Images/5.jpg",
    "Images/6.jpg",
  ];

  function changeBackground() {
    if (index == images.length-1) {
      index = 0;
    }else {
      index++;
    }
    const randomImage = images[index];
    const backImage = document.querySelector(".backImage");
  
    backImage.style.backgroundImage = `url(${randomImage})`;
    
    backImage.classList.remove("fadeOut");
    backImage.classList.add("fadeIn");
    
    setTimeout(() => {
      backImage.classList.remove("fadeIn");
      backImage.classList.add("fadeOut");
    }, 5000);
    
    setTimeout(() => {
      backImage.classList.remove("fadeOut");
      backImage.style.opacity = 0.4;
    }, 3000);
  }
  
  const backImage = document.querySelector(".backImage");

  setTimeout(() => {
    backImage.classList.add("fadeOut");
  }, 5000);
  
  setInterval(changeBackground, 8000);
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");
  const displayPassword = document.getElementById("hideUnhide");

  nicknameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitBtn.click();
    }
  });

  passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      submitBtn.click();
    }
  });

  displayPassword.addEventListener("click", function (event) {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      displayPassword.innerText = "Hide";
    } else {
      passwordInput.type = "password";
      displayPassword.innerText = "Show";
    }
  });

  submitBtn.addEventListener("click", function (event) {
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

    if (nickname === "Admin" && password === "Admin") {
      window.location.href = "admin.html";
    } else if (nickname === "Laci" && password === "Keating") {
      window.location.href = "my-stable.html";
    } else {
      errorMessage.innerText = "Invalid credentials. Please try again.";
    }
  });
});
