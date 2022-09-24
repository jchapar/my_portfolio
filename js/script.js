const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.menu-line-item');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionID = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('li a[href*="' + sectionID + '"]').parentElement.classList.add('active');
    } else {
      document.querySelector('li a[href*="' + sectionID + '"]').parentElement.classList.remove('active');
    }
  });
});
