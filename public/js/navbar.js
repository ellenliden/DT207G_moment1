// Hamburger meny
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
  });

  // Stäng menyn när man klickar på en länk
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navList.classList.remove("active");
    });
  });
});
