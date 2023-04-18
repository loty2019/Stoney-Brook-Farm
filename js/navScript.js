const hamburger = document.querySelector(".hamburger");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".main-nav li");
  const hamburgerLines = document.querySelectorAll(".line");

  // animate links in and out
  function animateLinks(links, animationDirection, callback) {
    // delay is the time between each link animation
    const delay = animationDirection === "in" ? 100 : -100;
    const baseDelay =
      animationDirection === "in" ? 0 : (links.length - 1) * 100;

    // animate each link
    links.forEach((link, index) => {
      // set a timeout for each link animation
      setTimeout(() => {
        link.style.transform =
          animationDirection === "in" ? "translateY(0)" : "translateY(-100%)";
        link.style.opacity = animationDirection === "in" ? "1" : "0";

        // if there is a callback and it's the last link, call the callback
        if (callback && index === links.length - 1) {
          setTimeout(callback, Math.abs(delay));
        }
      }, baseDelay + index * delay);
    });
  }

  // toggle hamburger animation
  function toggleHamburger() {
    hamburger.classList.toggle("active");
  }
  
  // toggle nav
  hamburger.addEventListener("click", () => {
    // if nav is open, animate links out and then remove the show-nav class
    if (mainNav.classList.contains("show-nav")) {
      animateLinks(navLinks, "out", () => {
        setTimeout(() => {
          mainNav.classList.remove("show-nav");
          toggleHamburger();
        }, 600);
      });
    } else { // if nav is closed, add the show-nav class and animate links in
      mainNav.classList.add("show-nav");
      animateLinks(navLinks, "in");
      toggleHamburger();
    }
  });