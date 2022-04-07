document.addEventListener('DOMContentLoaded', function() {
  // Get all "navbar-burger" elements
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if (navbarBurgers.length > 0) {

    // Add a click event on each of them
    navbarBurgers.forEach(function (element) {
        element.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        const target = element.dataset.target;
        const targetElement = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        element.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');

      });
    });
  }
});