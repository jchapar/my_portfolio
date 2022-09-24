const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-line-item');

// On scroll event for the Active Navbar
window.addEventListener('scroll', () => {
  // Get the scroll position on the Y axis
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    // Get the sections height, offset from the top and ID
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionID = section.getAttribute('id');

    // Check on the windows position and check on the sections position
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('li a[href*="' + sectionID + '"]').parentElement.classList.add('active');
    } else {
      document.querySelector('li a[href*="' + sectionID + '"]').parentElement.classList.remove('active');
    }
  });
});
