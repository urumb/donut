const CURSOR_SVG = `
  <svg viewBox="0 0 72 72" role="img" aria-hidden="true">
    <defs>
      <radialGradient id="cursor-dough" cx="31%" cy="24%" r="76%">
        <stop offset="0%" stop-color="#fff0c9" />
        <stop offset="42%" stop-color="#d99a57" />
        <stop offset="76%" stop-color="#b46b38" />
        <stop offset="100%" stop-color="#7a3f22" />
      </radialGradient>
      <radialGradient id="cursor-dough-warm" cx="42%" cy="40%" r="64%">
        <stop offset="0%" stop-color="#efb774" />
        <stop offset="70%" stop-color="#9d552d" />
        <stop offset="100%" stop-color="#5c2b17" />
      </radialGradient>
      <radialGradient id="cursor-glaze" cx="32%" cy="18%" r="82%">
        <stop offset="0%" stop-color="#fff9fb" />
        <stop offset="22%" stop-color="#ffc4d8" />
        <stop offset="58%" stop-color="#f47cab" />
        <stop offset="100%" stop-color="#b73569" />
      </radialGradient>
      <radialGradient id="cursor-glaze-depth" cx="55%" cy="72%" r="72%">
        <stop offset="0%" stop-color="#d74d86" stop-opacity="0.52" />
        <stop offset="72%" stop-color="#8f234f" stop-opacity="0.16" />
        <stop offset="100%" stop-color="#8f234f" stop-opacity="0" />
      </radialGradient>
      <radialGradient id="cursor-hole" cx="42%" cy="36%" r="64%">
        <stop offset="0%" stop-color="#32160d" />
        <stop offset="44%" stop-color="#754123" />
        <stop offset="76%" stop-color="#d2904f" />
        <stop offset="100%" stop-color="#f5ca82" />
      </radialGradient>
      <linearGradient id="cursor-bite-crumb" x1="47" y1="19" x2="64" y2="35" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#ffe5a7" />
        <stop offset="52%" stop-color="#c77b3e" />
        <stop offset="100%" stop-color="#7a3d20" />
      </linearGradient>
      <filter id="cursor-texture" x="-15%" y="-15%" width="130%" height="130%">
        <feTurbulence type="fractalNoise" baseFrequency="0.95" numOctaves="3" seed="12" result="noise" />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.52 0 0 0 0 0.26 0 0 0 0 0.13 0 0 0 .15 0" result="speckle" />
        <feBlend in="SourceGraphic" in2="speckle" mode="multiply" />
      </filter>
      <filter id="cursor-glaze-texture" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.58" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.85" xChannelSelector="R" yChannelSelector="G" />
      </filter>
      <filter id="cursor-shadow" x="-45%" y="-35%" width="190%" height="190%">
        <feDropShadow dx="0" dy="8" stdDeviation="5.5" flood-color="#2b1b12" flood-opacity="0.28" />
        <feDropShadow dx="-2" dy="-1" stdDeviation="1.2" flood-color="#fff0c5" flood-opacity="0.18" />
      </filter>
      <mask id="cursor-mask">
        <rect width="72" height="72" fill="white" />
        <circle cx="36" cy="36" r="11" fill="black" />
        <circle class="cursor-bite-click" cx="57" cy="19" r="9.5" fill="black" />
        <circle class="cursor-bite-click" cx="63" cy="29" r="7.2" fill="black" />
        <circle class="cursor-bite-click" cx="57" cy="33" r="5.7" fill="black" />
      </mask>
      <clipPath id="cursor-glaze-clip">
        <path d="M11 33c1.8-12.5 13.4-22.4 27.6-22 13.8.4 25.1 8.6 28.3 21.8-4.9-2.6-9.5-1.8-13.1 2.5-3.9 4.9-9.8 5.5-15.4 1.4-5.7-4.2-12.5-3.6-16.2 1.7-3.8 5.2-10.8 3.6-11.2-5.4Z" />
      </clipPath>
    </defs>
    <g filter="url(#cursor-shadow)">
      <g mask="url(#cursor-mask)">
        <circle cx="36" cy="36" r="28" fill="url(#cursor-dough)" filter="url(#cursor-texture)" />
        <ellipse cx="39" cy="40" rx="22" ry="19" fill="url(#cursor-dough-warm)" opacity="0.34" />
        <path d="M11 33c1.8-12.5 13.4-22.4 27.6-22 13.8.4 25.1 8.6 28.3 21.8-4.9-2.6-9.5-1.8-13.1 2.5-3.9 4.9-9.8 5.5-15.4 1.4-5.7-4.2-12.5-3.6-16.2 1.7-3.8 5.2-10.8 3.6-11.2-5.4Z" fill="url(#cursor-glaze)" filter="url(#cursor-glaze-texture)" />
        <path d="M11 33c1.8-12.5 13.4-22.4 27.6-22 13.8.4 25.1 8.6 28.3 21.8-4.9-2.6-9.5-1.8-13.1 2.5-3.9 4.9-9.8 5.5-15.4 1.4-5.7-4.2-12.5-3.6-16.2 1.7-3.8 5.2-10.8 3.6-11.2-5.4Z" fill="url(#cursor-glaze-depth)" />
        <ellipse cx="28" cy="21.5" rx="9.8" ry="3.8" fill="#fff7fb" opacity="0.46" transform="rotate(-20 28 21.5)" clip-path="url(#cursor-glaze-clip)" />
        <ellipse cx="45" cy="25" rx="5.2" ry="2" fill="#ffe8f1" opacity="0.34" transform="rotate(18 45 25)" clip-path="url(#cursor-glaze-clip)" />
        <circle cx="36" cy="36" r="10.8" fill="url(#cursor-hole)" />
        <circle cx="33" cy="31.5" r="6.5" fill="#fbf6ec" opacity="0.74" />
        <circle cx="38" cy="39.5" r="10.5" fill="#2f170e" opacity="0.2" />
        <g opacity="0.96" clip-path="url(#cursor-glaze-clip)">
          <rect x="19" y="22" width="8.2" height="2.5" rx="1.25" fill="#fff18b" transform="rotate(-24 19 22)" />
          <rect x="43" y="20" width="7.2" height="2.4" rx="1.2" fill="#5ed9ff" transform="rotate(28 43 20)" />
          <rect x="21" y="44" width="7.4" height="2.5" rx="1.25" fill="#70df78" transform="rotate(22 21 44)" />
          <rect x="47" y="43" width="8" height="2.5" rx="1.25" fill="#ffe35f" transform="rotate(-18 47 43)" />
          <rect x="31" y="17" width="6.4" height="2.3" rx="1.15" fill="#b85cff" transform="rotate(70 31 17)" />
          <rect x="15" y="34" width="7.4" height="2.4" rx="1.2" fill="#ff6070" transform="rotate(11 15 34)" />
          <rect x="51" y="30" width="6.6" height="2.2" rx="1.1" fill="#48c2a5" transform="rotate(62 51 30)" />
          <rect x="35" y="48" width="6" height="2.2" rx="1.1" fill="#f4f7ff" transform="rotate(-36 35 48)" />
        </g>
      </g>
      <g class="cursor-bite-click">
        <path d="M50.4 18.9c3.8 1.7 5.8 4.4 5.3 7.8 4.1-.3 6.9 1.6 7.8 5.4-2 1.7-4.3 2.5-7 2.2-2.3 2.3-5.2 3.1-8.8 2.3 1.1-2.8.9-5.2-.7-7.2 2.2-2.2 3.4-5.7 3.4-10.5Z" fill="url(#cursor-bite-crumb)" opacity="0.82" />
        <circle cx="52.5" cy="26.4" r="1.2" fill="#ffe3a6" opacity="0.8" />
        <circle cx="57.4" cy="32.2" r="0.9" fill="#7a3f22" opacity="0.44" />
        <circle cx="49.5" cy="33.2" r="0.8" fill="#ffe5ad" opacity="0.62" />
      </g>
    </g>
  </svg>`;

export function initCursor({ reducedMotion = false } = {}) {
  const cursor = document.getElementById("donut-cursor");
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (!cursor || isTouch || reducedMotion) return;

  cursor.innerHTML = CURSOR_SVG;
  document.body.classList.add("cursor-enabled");

  const state = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    targetX: window.innerWidth / 2,
    targetY: window.innerHeight / 2,
    lastX: window.innerWidth / 2,
    lastY: window.innerHeight / 2,
    idle: 0,
    visible: false,
  };

  const showCursor = () => {
    state.visible = true;
    cursor.classList.remove("is-outside");
    cursor.classList.add("is-visible");
  };

  const hideCursor = () => {
    state.visible = false;
    cursor.classList.add("is-outside");
    cursor.classList.remove("is-visible", "is-hovering", "is-clicking");
  };

  window.addEventListener("pointermove", (event) => {
    state.targetX = event.clientX;
    state.targetY = event.clientY;
    if (!state.visible) {
      state.x = event.clientX;
      state.y = event.clientY;
      showCursor();
    }
  }, { passive: true });

  document.addEventListener("pointerleave", hideCursor);
  document.documentElement.addEventListener("mouseleave", hideCursor);
  window.addEventListener("blur", hideCursor);

  document.addEventListener("mouseover", (event) => {
    if (event.target.closest("a, button, .product-card")) cursor.classList.add("is-hovering");
  });

  document.addEventListener("mouseout", (event) => {
    if (event.target.closest("a, button, .product-card")) cursor.classList.remove("is-hovering");
  });

  let lastClickEffectAt = 0;
  const triggerClickEffect = () => {
    if (!state.visible) return;
    const now = window.performance?.now?.() ?? Date.now();
    if (now - lastClickEffectAt < 45) return;
    lastClickEffectAt = now;
    cursor.classList.add("is-clicking");
    createCrumbs(state.targetX, state.targetY);
    window.setTimeout(() => cursor.classList.remove("is-clicking"), 300);
  };

  document.addEventListener("pointerdown", triggerClickEffect);
  document.addEventListener("mousedown", triggerClickEffect);

  function render() {
    state.idle += 0.035;
    state.x += (state.targetX - state.x) * 0.2;
    state.y += (state.targetY - state.y) * 0.2;

    const dx = state.x - state.lastX;
    const dy = state.y - state.lastY;
    const speed = Math.min(Math.hypot(dx, dy), 30);
    const angle = Number.isFinite(Math.atan2(dy, dx)) ? Math.atan2(dy, dx) * (180 / Math.PI) : 0;
    const stretch = 1 + speed * 0.0038;
    const squash = 1 - speed * 0.0018;
    const hoverScale = cursor.classList.contains("is-hovering") ? 1.1 : 1;
    const idleY = Math.sin(state.idle) * 1.1;

    cursor.style.transform = `translate3d(${state.x - 19}px, ${state.y - 19 + idleY}px, 0) rotate(${angle * 0.055}deg) scale(${stretch * hoverScale}, ${squash * hoverScale})`;
    state.lastX = state.x;
    state.lastY = state.y;
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

function createCrumbs(x, y) {
  for (let index = 0; index < 9; index += 1) {
    const crumb = document.createElement("span");
    crumb.className = "crumb";
    crumb.style.left = `${x + 14}px`;
    crumb.style.top = `${y - 10}px`;
    document.body.appendChild(crumb);

    const angle = -0.9 + (index / 8) * 1.9;
    const distance = 13 + Math.random() * 21;
    if (window.gsap) {
      gsap.to(crumb, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + 8,
        opacity: 0,
        scale: 0.12,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => crumb.remove(),
      });
    } else {
      window.setTimeout(() => crumb.remove(), 500);
    }
  }
}

