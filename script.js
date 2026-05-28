const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);

revealSections();

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.top = e.clientY + "px";
  glow.style.left = e.clientX + "px";
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});