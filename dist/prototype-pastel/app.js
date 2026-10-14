const header = document.querySelector('#site-header');
let updatePending = false;
function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 48);
  updatePending = false;
}
window.addEventListener('scroll', () => {
  if (!updatePending) {
    updatePending = true;
    requestAnimationFrame(updateHeader);
  }
}, { passive: true });
updateHeader();

// Both panels share a slide index. Only the active pair is accessible or focusable.
const carousel = document.querySelector('#hero-carousel');
const slideData = JSON.parse(document.querySelector('#hero-slide-data').textContent);
const visualSlides = [...carousel.querySelectorAll('.visual-slide')];
const copySlides = [...carousel.querySelectorAll('.hero-copy')];
const segments = [...carousel.querySelectorAll('.progress-segment')];
const count = document.querySelector('#hero-count');
const announcement = document.querySelector('#hero-announcement');
const autoplayButton = document.querySelector('#hero-autoplay');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const interval = 6500;
let currentSlide = 0;
let userPaused = reducedMotion.matches;
let hovered = false;
let visible = false;
let touchStart = null;
let timer = null;
let deadline = 0;
let remaining = interval;
let progressAnimation = null;

function stopTimer() {
  if (timer !== null) {
    remaining = Math.max(0, deadline - performance.now());
    clearTimeout(timer);
    timer = null;
  }
  progressAnimation?.pause();
}

function updateAutoplay() {
  autoplayButton.setAttribute('aria-pressed', String(userPaused));
  autoplayButton.setAttribute('aria-label', userPaused ? 'Mainkan slider automatik' : 'Jeda slider automatik');
  autoplayButton.querySelector('svg').innerHTML = userPaused
    ? '<path d="M8 5v14l11-7z"/>'
    : '<path d="M9 5v14M15 5v14"/>';
  const canPlay = !userPaused && !hovered && !document.hidden && visible && !touchStart && !carousel.matches(':focus-within');
  if (!canPlay) {
    stopTimer();
    return;
  }
  if (timer !== null) return;
  deadline = performance.now() + remaining;
  progressAnimation?.play();
  timer = setTimeout(() => {
    timer = null;
    showSlide(currentSlide + 1);
  }, remaining);
}

function showSlide(index, manual = false) {
  stopTimer();
  progressAnimation?.cancel();
  currentSlide = (index + slideData.length) % slideData.length;
  remaining = interval;
  [...visualSlides, ...copySlides].forEach(slide => {
    const active = Number(slide.dataset.slide) === currentSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
    slide.inert = !active;
  });
  segments.forEach((segment, index) => {
    segment.classList.toggle('is-current', index === currentSlide);
    segment.classList.toggle('is-past', index < currentSlide);
  });
  count.innerHTML = `${String(currentSlide + 1).padStart(2, '0')} <span>/ ${String(slideData.length).padStart(2, '0')}</span>`;
  announcement.textContent = manual ? `${currentSlide + 1} daripada ${slideData.length}: ${slideData[currentSlide].name}` : '';
  const fill = segments[currentSlide].querySelector('.progress-fill');
  progressAnimation = reducedMotion.matches ? null : fill.animate(
    [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
    { duration: interval, fill: 'forwards', easing: 'linear' }
  );
  segments.forEach(segment => segment.querySelector('.progress-fill').style.removeProperty('transform'));
  if (reducedMotion.matches) fill.style.transform = 'scaleX(1)';
  updateAutoplay();
}

document.querySelector('#hero-prev').addEventListener('click', () => showSlide(currentSlide - 1, true));
document.querySelector('#hero-next').addEventListener('click', () => showSlide(currentSlide + 1, true));
autoplayButton.addEventListener('click', () => {
  userPaused = !userPaused;
  updateAutoplay();
});
carousel.addEventListener('keydown', event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showSlide(currentSlide + (event.key === 'ArrowRight' ? 1 : -1), true);
  }
});
carousel.addEventListener('pointerenter', event => {
  if (event.pointerType === 'mouse') { hovered = true; updateAutoplay(); }
});
carousel.addEventListener('pointerleave', () => { hovered = false; updateAutoplay(); });
carousel.addEventListener('focusin', updateAutoplay);
carousel.addEventListener('focusout', () => requestAnimationFrame(updateAutoplay));
carousel.addEventListener('touchstart', event => {
  if (event.touches.length !== 1) { touchStart = null; stopTimer(); return; }
  touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  updateAutoplay();
}, { passive: true });
carousel.addEventListener('touchend', event => {
  if (!touchStart) { updateAutoplay(); return; }
  const dx = event.changedTouches[0].clientX - touchStart.x;
  const dy = event.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) showSlide(currentSlide + (dx < 0 ? 1 : -1), true);
  else updateAutoplay();
}, { passive: true });
carousel.addEventListener('touchcancel', () => { touchStart = null; updateAutoplay(); }, { passive: true });
document.addEventListener('visibilitychange', updateAutoplay);
reducedMotion.addEventListener('change', event => {
  if (event.matches) userPaused = true;
  showSlide(currentSlide);
});
new IntersectionObserver(([entry]) => {
  visible = entry.isIntersecting;
  updateAutoplay();
}, { threshold: 0.2 }).observe(carousel);
document.querySelector('.slider-controls').hidden = false;
showSlide(0);
