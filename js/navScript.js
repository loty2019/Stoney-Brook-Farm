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