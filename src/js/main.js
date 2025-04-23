import '../css/style.css';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const current = window.location.pathname.split('/').pop();
  
    links.forEach(link => {
      if (link.getAttribute('href') === current) {
        link.classList.add(
          'relative',
          'after:block',
          'after:h-1',
          'after:bg-bleu',
          'after:mt-1',
          'after:rounded-full'
        );
      }
    });
  });
