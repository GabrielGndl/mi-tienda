// Animación para el botón principal
document.querySelector('.boton').addEventListener('mouseenter', function() {
  this.style.transform = 'translateY(-5px)';
});

document.querySelector('.boton').addEventListener('mouseleave', function() {
  this.style.transform = 'translateY(0)';
});

// Animación para las tarjetas de características
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Animación para los testimonios
const testimonials = document.querySelectorAll('.testimonial');
testimonials.forEach(testimonial => {
  testimonial.addEventListener('mouseenter', () => {
    testimonial.style.transform = 'scale(1.03)';
  });
  
  testimonial.addEventListener('mouseleave', () => {
    testimonial.style.transform = 'scale(1)';
  });
});