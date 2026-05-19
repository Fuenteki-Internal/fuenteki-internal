const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 0 1px rgba(130,170,255,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none';
  });
});