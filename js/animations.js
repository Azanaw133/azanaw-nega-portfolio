const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const typingTarget = document.querySelector('.hero-role');
if (typingTarget && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const typingText = typingTarget.textContent.trim();
  typingTarget.textContent = '';
  let characterIndex = 0;

  const typeNextCharacter = () => {
    typingTarget.textContent = typingText.slice(0, characterIndex);
    characterIndex += 1;
    if (characterIndex <= typingText.length) window.setTimeout(typeNextCharacter, 42);
  };

  typeNextCharacter();
}

const cursorDot = document.querySelector('.cursor-dot');
if (cursorDot && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('mousemove', (event) => {
    cursorDot.style.left = `${event.clientX}px`;
    cursorDot.style.top = `${event.clientY}px`;
    cursorDot.style.opacity = '1';
  });
}
