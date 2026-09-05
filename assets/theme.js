/* The Fur Doodle — theme behaviour
   Small, dependency-free, and safe to run on every page. */

(function () {
  'use strict';

  var settings = window.themeSettings || {};

  /* ------------------------------------------------------------------ *
   * Mobile menu
   * ------------------------------------------------------------------ */
  function initMobileMenu() {
    var menu = document.querySelector('[data-mobile-menu]');
    var overlay = document.querySelector('[data-overlay]');
    if (!menu) return;

    var openers = document.querySelectorAll('[data-menu-open]');
    var closers = document.querySelectorAll('[data-menu-close]');
    var lastFocused = null;

    function open() {
      lastFocused = document.activeElement;
      menu.setAttribute('data-open', 'true');
      if (overlay) overlay.setAttribute('data-open', 'true');
      document.body.classList.add('no-scroll');
      openers.forEach(function (b) { b.setAttribute('aria-expanded', 'true'); });
      var firstLink = menu.querySelector('a, button');
      if (firstLink) firstLink.focus();
    }

    function close() {
      menu.setAttribute('data-open', 'false');
      if (overlay) overlay.setAttribute('data-open', 'false');
      document.body.classList.remove('no-scroll');
      openers.forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
      if (lastFocused) lastFocused.focus();
    }

    openers.forEach(function (b) { b.addEventListener('click', open); });
    closers.forEach(function (b) { b.addEventListener('click', close); });
    if (overlay) overlay.addEventListener('click', close);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.getAttribute('data-open') === 'true') close();
    });
  }

  /* ------------------------------------------------------------------ *
   * Scroll reveal
   * ------------------------------------------------------------------ */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!settings.animations || reduced || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ------------------------------------------------------------------ *
   * Product gallery
   * ------------------------------------------------------------------ */
  function initGallery() {
    document.querySelectorAll('[data-product-gallery]').forEach(function (gallery) {
      var mainImage = gallery.querySelector('[data-gallery-main] img');
      var thumbs = gallery.querySelectorAll('[data-gallery-thumb]');
      if (!mainImage || !thumbs.length) return;

      thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          var full = thumb.getAttribute('data-full');
          var alt = thumb.getAttribute('data-alt') || '';
          if (!full) return;
          mainImage.src = full;
          mainImage.srcset = '';
          mainImage.alt = alt;
          thumbs.forEach(function (t) { t.setAttribute('aria-current', 'false'); });
          thumb.setAttribute('aria-current', 'true');
        });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * Money formatting
   * ------------------------------------------------------------------ */
  function formatMoney(cents) {
    var format = settings.moneyFormat || '£{{amount}}';
    var value = (cents / 100).toFixed(2);
    var parts = value.split('.');
    var withCommas = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');

    return format
      .replace(/\{\{\s*amount\s*\}\}/g, withCommas + '.' + parts[1])
      .replace(/\{\{\s*amount_no_decimals\s*\}\}/g, withCommas)
      .replace(/\{\{\s*amount_with_comma_separator\s*\}\}/g, parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.') + ',' + parts[1])
      .replace(/\{\{\s*amount_no_decimals_with_comma_separator\s*\}\}/g, parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'));
  }

  /* ------------------------------------------------------------------ *
   * Variant picker
   * ------------------------------------------------------------------ */
  function initVariantPicker() {
    document.querySelectorAll('[data-variant-picker]').forEach(function (picker) {
      var dataEl = picker.querySelector('[data-variant-json]');
      if (!dataEl) return;

      var variants;
      try {
        variants = JSON.parse(dataEl.textContent);
      } catch (e) {
        return;
      }

      var form = picker.closest('form') || document.querySelector('[data-product-form]');
      var idInput = picker.querySelector('[data-variant-id]');
      var priceEl = picker.querySelector('[data-variant-price]');
      var compareEl = picker.querySelector('[data-variant-compare]');
      var submitBtn = form ? form.querySelector('[data-add-to-cart]') : null;
      var submitText = submitBtn ? submitBtn.querySelector('[data-add-text]') : null;
      var soldOutLabel = picker.getAttribute('data-sold-out-text') || 'Sold out';
      var addLabel = picker.getAttribute('data-add-text') || 'Add to basket';
      var unavailableLabel = picker.getAttribute('data-unavailable-text') || 'Unavailable';

      function currentOptions() {
        var values = [];
        picker.querySelectorAll('[data-option-index]').forEach(function (group) {
          var checked = group.querySelector('input:checked');
          values[parseInt(group.getAttribute('data-option-index'), 10)] = checked ? checked.value : null;
        });
        return values;
      }

      function findVariant(values) {
        return variants.find(function (variant) {
          return values.every(function (value, index) {
            return variant.options[index] === value;
          });
        });
      }

      function updateLabels() {
        picker.querySelectorAll('[data-option-index]').forEach(function (group) {
          var checked = group.querySelector('input:checked');
          var out = group.querySelector('[data-option-value]');
          if (out && checked) out.textContent = checked.value;
        });
      }

      function update() {
        var values = currentOptions();
        var variant = findVariant(values);
        updateLabels();

        if (!variant) {
          if (submitBtn) {
            submitBtn.setAttribute('disabled', 'disabled');
            if (submitText) submitText.textContent = unavailableLabel;
          }
          return;
        }

        if (idInput) idInput.value = variant.id;

        if (priceEl) priceEl.textContent = formatMoney(variant.price);
        if (compareEl) {
          if (variant.compare_at_price && variant.compare_at_price > variant.price) {
            compareEl.textContent = formatMoney(variant.compare_at_price);
            compareEl.hidden = false;
          } else {
            compareEl.hidden = true;
          }
        }

        if (submitBtn) {
          if (variant.available) {
            submitBtn.removeAttribute('disabled');
            if (submitText) submitText.textContent = addLabel;
          } else {
            submitBtn.setAttribute('disabled', 'disabled');
            if (submitText) submitText.textContent = soldOutLabel;
          }
        }

        if (history.replaceState && variant.id) {
          var url = new URL(window.location.href);
          url.searchParams.set('variant', variant.id);
          history.replaceState({}, '', url.toString());
        }
      }

      picker.addEventListener('change', update);
      update();
    });
  }

  /* ------------------------------------------------------------------ *
   * Quantity steppers
   * ------------------------------------------------------------------ */
  function initQuantity() {
    document.querySelectorAll('[data-quantity]').forEach(function (wrapper) {
      var input = wrapper.querySelector('input');
      if (!input) return;

      wrapper.querySelectorAll('[data-quantity-change]').forEach(function (button) {
        button.addEventListener('click', function () {
          var step = parseInt(button.getAttribute('data-quantity-change'), 10);
          var min = parseInt(input.getAttribute('min') || '1', 10);
          var next = (parseInt(input.value, 10) || min) + step;
          input.value = next < min ? min : next;
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   * Character counters on personalisation fields
   * ------------------------------------------------------------------ */
  function initCharCount() {
    document.querySelectorAll('[data-char-count]').forEach(function (field) {
      var target = document.getElementById(field.getAttribute('data-char-count'));
      if (!target) return;
      var max = field.getAttribute('maxlength');

      function render() {
        target.textContent = max
          ? field.value.length + ' / ' + max
          : field.value.length + ' characters';
      }
      field.addEventListener('input', render);
      render();
    });
  }

  /* ------------------------------------------------------------------ *
   * Cart line quantity + remove (cart page)
   * ------------------------------------------------------------------ */
  function initCart() {
    var form = document.querySelector('[data-cart-form]');
    if (!form) return;

    form.querySelectorAll('[data-cart-remove]').forEach(function (button) {
      button.addEventListener('click', function () {
        var line = button.getAttribute('data-cart-remove');
        var input = form.querySelector('[data-cart-quantity="' + line + '"]');
        if (input) {
          input.value = 0;
          form.submit();
        }
      });
    });

    form.querySelectorAll('[data-cart-quantity]').forEach(function (input) {
      input.addEventListener('change', function () { form.submit(); });
    });
  }

  /* ------------------------------------------------------------------ *
   * Paw print trail (optional, off by default)
   * ------------------------------------------------------------------ */
  function initPawTrail() {
    if (!settings.pawTrail) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    var layer = document.querySelector('.paw-trail');
    if (!layer) return;

    var last = 0;
    var flip = false;

    document.addEventListener('mousemove', function (e) {
      var now = Date.now();
      if (now - last < 140) return;
      last = now;
      flip = !flip;

      var paw = document.createElement('div');
      paw.className = 'paw-trail__paw';
      paw.style.left = (e.clientX - 13) + 'px';
      paw.style.top = (e.clientY - 13) + 'px';
      paw.style.transform = 'rotate(' + (flip ? -18 : 18) + 'deg)';
      paw.innerHTML =
        '<svg viewBox="0 0 24 24" fill="' + (flip ? 'var(--pink)' : 'var(--green)') + '">' +
        '<ellipse cx="7" cy="8" rx="2.6" ry="3.4"/><ellipse cx="12" cy="6" rx="2.6" ry="3.6"/>' +
        '<ellipse cx="17" cy="8" rx="2.6" ry="3.4"/><ellipse cx="20" cy="13" rx="2.2" ry="2.8"/>' +
        '<path d="M12 12c3.4 0 6 2.4 6 5 0 2-1.7 3.2-3.6 3.2-1.1 0-1.7-.5-2.4-.5s-1.3.5-2.4.5C7.7 20.2 6 19 6 17c0-2.6 2.6-5 6-5z"/>' +
        '</svg>';

      layer.appendChild(paw);
      setTimeout(function () { paw.remove(); }, 1100);
    });
  }

  /* ------------------------------------------------------------------ *
   * Marquee duplication so the scroll never shows a gap
   * ------------------------------------------------------------------ */
  function initMarquee() {
    document.querySelectorAll('[data-marquee-track]').forEach(function (track) {
      if (track.getAttribute('data-cloned') === 'true') return;
      track.innerHTML = track.innerHTML + track.innerHTML;
      track.setAttribute('data-cloned', 'true');
    });
  }

  /* ------------------------------------------------------------------ *
   * Boot
   * ------------------------------------------------------------------ */
  function init() {
    initMobileMenu();
    initReveal();
    initGallery();
    initVariantPicker();
    initQuantity();
    initCharCount();
    initCart();
    initPawTrail();
    initMarquee();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Re-run when a section is re-rendered inside the theme editor */
  document.addEventListener('shopify:section:load', init);
  document.addEventListener('shopify:section:select', initReveal);
})();
