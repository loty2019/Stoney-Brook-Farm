const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav li");

function animateLinks(links, animationDirection) {
  links.forEach((link, index) => {
    setTimeout(() => {
      link.style.transform = animationDirection === "in" ? "translateY(0)" : "translateY(-100%)";
      link.style.opacity = animationDirection === "in" ? "1" : "0";
    }, index * 100);
  });
}

hamburger.addEventListener("click", () => {
  mainNav.classList.toggle("show-nav");

  if (mainNav.classList.contains("show-nav")) {
    animateLinks(navLinks, "in");
  } else {
    animateLinks(navLinks, "out");
  }
});