document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav li");
  const hamburgerLines = document.querySelectorAll(".line");

  function animateLinks(links, animationDirection, callback) {
    const delay = animationDirection === "in" ? 100 : -100;
    const baseDelay =
      animationDirection === "in" ? 0 : (links.length - 1) * 100;

    links.forEach((link, index) => {
      setTimeout(() => {
        link.style.transform =
          animationDirection === "in" ? "translateY(0)" : "translateY(-100%)";
        link.style.opacity = animationDirection === "in" ? "1" : "0";

        if (callback && index === links.length - 1) {
          setTimeout(callback, Math.abs(delay));
        }
      }, baseDelay + index * delay);
    });
  }

  function toggleHamburger() {
    hamburger.classList.toggle("active");
  }
  
  hamburger.addEventListener("click", () => {
    if (mainNav.classList.contains("show-nav")) {
      animateLinks(navLinks, "out", () => {
        setTimeout(() => {
          mainNav.classList.remove("show-nav");
          toggleHamburger();
        }, 600);
      });
    } else {
      mainNav.classList.add("show-nav");
      animateLinks(navLinks, "in");
      toggleHamburger();
    }
  });

  // Background change
  let index = 0;
  const images = [
    "../Images/2.jpg",
    "../Images/1.jpg",
    "../Images/3.jpg",
    "../Images/4.jpg",
    "../Images/5.jpg",
    "../Images/6.jpg",
  ];

  function changeBackground() {
    if (index == images.length - 1) {
      index = 0;
    } else {
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
    }, 10000);

    setTimeout(() => {
      backImage.classList.remove("fadeOut");
      backImage.style.opacity = 0.4;
    }, 8000);
  }

  const backImage = document.querySelector(".backImage");

  setTimeout(() => {
    backImage.classList.add("fadeOut");
  }, 10000);

  setInterval(changeBackground, 13000);

  // Login form
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

  // event listener to handle password toggle
  const eye = document.querySelector("#eye");
  eye.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
  });

  // submit button
  submitBtn.addEventListener("click", function (event) {
    const nickname = document.getElementById("nickname").value;
    const password = document.getElementById("password").value;

    if (nickname === "Admin" && password === "Admin") {
      window.location.href = "../html/admin.html";
    } else if (nickname === "Laci" && password === "Keating") {
      window.location.href = "../html/my-stable.html";
    } else {
      errorMessage.innerText = "Invalid credentials. Please try again.";
    }
  });
});
