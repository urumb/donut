const CURSOR_SVG = `
  <svg viewBox="0 0 72 72" role="img" aria-hidden="true">
    <defs>
      <radialGradient id="cursor-dough" cx="34%" cy="28%" r="72%">
        <stop offset="0%" stop-color="#ffe1ad" />
        <stop offset="56%" stop-color="#d99755" />
        <stop offset="100%" stop-color="#9d5f35" />
      </radialGradient>
      <radialGradient id="cursor-glaze" cx="36%" cy="24%" r="78%">
        <stop offset="0%" stop-color="#fff0e5" />
        <stop offset="55%" stop-color="#e8b8a5" />
        <stop offset="100%" stop-color="#a8654f" />
      </radialGradient>
      <filter id="cursor-shadow" x="-40%" y="-30%" width="180%" height="180%">
        <feDropShadow dx="0" dy="7" stdDeviation="5" flood-color="#2b1b12" flood-opacity="0.26" />
      </filter>
      <mask id="cursor-mask">
        <rect width="72" height="72" fill="white" />
        <circle cx="36" cy="36" r="11" fill="black" />
        <circle class="cursor-bite-click" cx="56" cy="18" r="10" fill="black" />
        <circle class="cursor-bite-click" cx="63" cy="29" r="7" fill="black" />
      </mask>
    </defs>
    <g filter="url(#cursor-shadow)">
      <circle cx="36" cy="36" r="28" fill="url(#cursor-dough)" mask="url(#cursor-mask)" />
      <path d="M15 32c3-12 14-21 28-19 12 1 21 9 23 20-5-3-10-3-13 2-3 5-9 6-14 2-6-5-14-4-18 2-4 5-10 4-6-7Z" fill="url(#cursor-glaze)" mask="url(#cursor-mask)" />
      <circle cx="36" cy="36" r="10" fill="#fbf6ec" />
      <g fill="#fff8ea" opacity="0.88">
        <rect x="22" y="23" width="8" height="2.2" rx="1.1" transform="rotate(-24 22 23)" />
        <rect x="43" y="22" width="7" height="2.2" rx="1.1" transform="rotate(28 43 22)" />
        <rect x="21" y="45" width="7" height="2.2" rx="1.1" transform="rotate(22 21 45)" />
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
    cursor.classList.add("is-visible");
  };

  const hideCursor = () => {
    state.visible = false;
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

  document.addEventListener("pointerdown", () => {
    if (!state.visible) return;
    cursor.classList.add("is-clicking");
    createCrumbs(state.targetX, state.targetY);
    window.setTimeout(() => cursor.classList.remove("is-clicking"), 300);
  });

  function render() {
    state.idle += 0.035;
    state.x += (state.targetX - state.x) * 0.18;
    state.y += (state.targetY - state.y) * 0.18;

    const dx = state.x - state.lastX;
    const dy = state.y - state.lastY;
    const speed = Math.min(Math.hypot(dx, dy), 30);
    const angle = Number.isFinite(Math.atan2(dy, dx)) ? Math.atan2(dy, dx) * (180 / Math.PI) : 0;
    const stretch = 1 + speed * 0.0055;
    const squash = 1 - speed * 0.0025;
    const hoverScale = cursor.classList.contains("is-hovering") ? 1.16 : 1;
    const idleY = Math.sin(state.idle) * 2;

    cursor.style.transform = `translate3d(${state.x - 22}px, ${state.y - 22 + idleY}px, 0) rotate(${angle * 0.08}deg) scale(${stretch * hoverScale}, ${squash * hoverScale})`;
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
    crumb.style.left = `${x}px`;
    crumb.style.top = `${y}px`;
    document.body.appendChild(crumb);

    const angle = (Math.PI * 2 * index) / 9;
    const distance = 15 + Math.random() * 24;
    if (window.gsap) {
      gsap.to(crumb, {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance + 9,
        opacity: 0,
        scale: 0.15,
        duration: 0.55,
        ease: "power2.out",
        onComplete: () => crumb.remove(),
      });
    } else {
      window.setTimeout(() => crumb.remove(), 550);
    }
  }
}

