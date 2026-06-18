// ===== Mobile nav =====
(function () {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
})();

// ===== FAQ accordion =====
(function () {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // close others
      list.querySelectorAll('.faq-item.open').forEach((other) => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-a').style.maxHeight = null;
        }
      });
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      ans.style.maxHeight = !isOpen ? ans.scrollHeight + 'px' : null;
    });
  });
})();

// ===== Before / After slider =====
(function () {
  const slider = document.getElementById('ba-slider');
  const before = document.getElementById('ba-before-wrap');
  const handle = document.getElementById('ba-handle');
  if (!slider || !before || !handle) return;

  let dragging = false;

  function setPos(clientX) {
    const rect = slider.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    before.style.width = pct + '%';
    handle.style.left = pct + '%';
    handle.setAttribute('aria-valuenow', Math.round(pct));
  }

  const start = () => (dragging = true);
  const stop = () => (dragging = false);
  const move = (e) => {
    if (!dragging) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    setPos(x);
  };

  slider.addEventListener('mousedown', (e) => { start(); setPos(e.clientX); });
  slider.addEventListener('touchstart', (e) => { start(); setPos(e.touches[0].clientX); }, { passive: true });
  window.addEventListener('mousemove', move);
  window.addEventListener('touchmove', move, { passive: true });
  window.addEventListener('mouseup', stop);
  window.addEventListener('touchend', stop);

  handle.addEventListener('keydown', (e) => {
    const cur = parseFloat(handle.getAttribute('aria-valuenow')) || 50;
    if (e.key === 'ArrowLeft') { setPctDirect(cur - 4); e.preventDefault(); }
    if (e.key === 'ArrowRight') { setPctDirect(cur + 4); e.preventDefault(); }
  });
  function setPctDirect(pct) {
    pct = Math.max(0, Math.min(100, pct));
    before.style.width = pct + '%';
    handle.style.left = pct + '%';
    handle.setAttribute('aria-valuenow', Math.round(pct));
  }
})();

// ===== Appointment form =====
(function () {
  const form = document.getElementById('appointment-form');
  if (!form) return;
  const success = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach((el) => {
      const field = el.closest('.field');
      const ok = el.value.trim() !== '' && (el.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value));
      field.classList.toggle('invalid', !ok);
      if (!ok) valid = false;
    });

    if (!valid) return;

    if (success) success.hidden = false;
    form.querySelectorAll('input, select, textarea').forEach((el) => { el.value = ''; });
    form.querySelector('select').selectedIndex = 0;
    setTimeout(() => { if (success) success.hidden = true; }, 6000);
  });

  form.querySelectorAll('input, select').forEach((el) =>
    el.addEventListener('input', () => el.closest('.field').classList.remove('invalid'))
  );
})();

// ===== Subtle reveal on scroll =====
(function () {
  if (!('IntersectionObserver' in window)) return;
  const targets = document.querySelectorAll(
    '.service-card, .doctor-card, .review-card, .price-card, .about-copy, .about-media, .ba-copy, .ba-slider'
  );
  targets.forEach((t) => {
    t.style.opacity = '0';
    t.style.transform = 'translateY(18px)';
    t.style.transition = 'opacity .6s ease, transform .6s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, (i % 4) * 70);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((t) => io.observe(t));
})();
