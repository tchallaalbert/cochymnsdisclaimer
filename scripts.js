document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
  
    menuIcon.addEventListener('click', function () {
      mobileMenu.style.display = 'block';
      navbar.classList.remove('sticky');
    });
  
    closeIcon.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      }
    });
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  });
  

//   Script for the privacy policy
// JavaScript to dynamically increment the section number
let sectionNumber = 0;

document.querySelectorAll("h2").forEach((element) => {
    sectionNumber++;
    element.innerHTML = `${sectionNumber}. ${element.innerHTML}`;
});

// JavaScript to display the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();