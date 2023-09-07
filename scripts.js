document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".mobile-nav-toggle");
    const navbar = document.querySelector(".navbar ul");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
      this.classList.toggle("bi-x");
    });
  
    const dropdownLinks = document.querySelectorAll(".navbar .dropdown > a");
    dropdownLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdown = this.parentElement.querySelector("ul");
        dropdown.classList.toggle("dropdown-active");
      });
    });
  });
  