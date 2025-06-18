function onScrollReveal() {
  const faders = document.querySelectorAll('.js-fade, .js-slide');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});

  faders.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', onScrollReveal);
