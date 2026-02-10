  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');
        
  const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
      });
  });

  // Add sparkle effect to hero image on click
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
      heroImage.addEventListener('click', function() {
          this.style.animation = 'none';
          setTimeout(() => {
              this.style.animation = 'wiggle 0.5s ease-in-out';
          }, 10);
      });
  }

  // Testimonials Carousel
  const track = document.querySelector('.testimonial-track');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const indicators = document.querySelectorAll('.indicator');
  const testimonials = document.querySelectorAll('.testimonial');
  
  if (track && testimonials.length > 0) {
      let currentSlide = 0;
      const totalSlides = testimonials.length;

      function updateCarousel() {
          track.style.transform = `translateX(-${currentSlide * 100}%)`;
          
          // Update indicators
          indicators.forEach((indicator, index) => {
              if (index === currentSlide) {
                  indicator.classList.add('active');
              } else {
                  indicator.classList.remove('active');
              }
          });
      }

      function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          updateCarousel();
      }

      function prevSlide() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          updateCarousel();
      }

      // Button click handlers
      if (nextButton) {
          nextButton.addEventListener('click', nextSlide);
      }
      
      if (prevButton) {
          prevButton.addEventListener('click', prevSlide);
      }

      // Indicator click handlers
      indicators.forEach((indicator, index) => {
          indicator.addEventListener('click', () => {
              currentSlide = index;
              updateCarousel();
          });
      });

      // Auto-advance carousel every 6 seconds
      let autoSlide = setInterval(nextSlide, 6000);

      // Pause auto-advance on hover
      const carousel = document.querySelector('.testimonials-carousel');
      if (carousel) {
          carousel.addEventListener('mouseenter', () => {
              clearInterval(autoSlide);
          });

          carousel.addEventListener('mouseleave', () => {
              autoSlide = setInterval(nextSlide, 6000);
          });
      }

      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
              prevSlide();
          } else if (e.key === 'ArrowRight') {
              nextSlide();
          }
      });
}