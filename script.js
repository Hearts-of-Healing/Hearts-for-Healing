document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.navbar ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Smooth Scrolling for Navbar Links
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (link.hash !== "") {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        window.scrollTo({
          top: targetElement.offsetTop - 100,  // Adjust offset for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Dark Mode Toggle
  const darkModeToggle = document.createElement('button');
  darkModeToggle.classList.add('dark-mode-toggle');
  darkModeToggle.innerHTML = '🌙';
  document.body.appendChild(darkModeToggle);

  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      darkModeToggle.innerHTML = '🌞'; // Switch to light mode icon
    } else {
      darkModeToggle.innerHTML = '🌙'; // Switch back to dark mode icon
    }
  });

  // Scroll-to-Top Button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.id = 'scrollToTop';
  scrollToTopButton.innerHTML = '↑';
  document.body.appendChild(scrollToTopButton);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // FAQ Toggle Functionality
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const button = item.querySelector('button');
    button.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});
