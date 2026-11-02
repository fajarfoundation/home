// Scroll reveal
(function () {
  var items = document.querySelectorAll('.reveal, .journey, .flow');
  if (!items.length || !('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.2 });
  items.forEach(function (el) { io.observe(el); });
})();

// Mobile menu
(function () {
  var btn = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Close' : 'Menu';
  });
})();

// Team photos: if a photo file is missing, show the initials underneath
document.querySelectorAll('.person .photo img').forEach(function (img) {
  img.addEventListener('error', function () { img.remove(); });
  if (img.complete && img.naturalWidth === 0) img.remove();
});

// Footer year
var y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Expandable founder bios (full text stays visible if JS is off)
document.querySelectorAll('.more-btn').forEach(function (btn) {
  var panel = document.getElementById(btn.getAttribute('aria-controls'));
  if (!panel) return;
  document.documentElement.classList.add('js-bio');
  btn.hidden = false;
  btn.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Show less' : 'Read more';
  });
});

// Floating pinwheel: on the home page, appear once the hero has scrolled away
(function () {
  var fab = document.querySelector('.pinwheel-fab');
  var hero = document.querySelector('.hero');
  if (!fab || !hero) return;
  function update() { fab.classList.toggle('is-hidden', hero.getBoundingClientRect().bottom > window.innerHeight * 0.5); }
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
})();

// Count-up for stat numbers when they scroll into view
(function () {
  var nums = document.querySelectorAll('[data-count]');
  if (!nums.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var el = e.target, end = +el.getAttribute('data-count'), t0 = null;
      function tick(t) {
        if (t0 === null) t0 = t;
        var p = Math.min((t - t0) / 1400, 1);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  nums.forEach(function (n) { io.observe(n); });
})();
