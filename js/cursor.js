const CURSOR_SVG = `
  <svg viewBox="0 0 72 72" role="img" aria-hidden="true">
  <defs>
    <!-- Base Dough Gradients -->
    <radialGradient id="cursor-dough" cx="30%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fff4db" />
      <stop offset="40%" stop-color="#e0a365" />
      <stop offset="80%" stop-color="#b86b35" />
      <stop offset="100%" stop-color="#8a4422" />
    </radialGradient>
    <radialGradient id="cursor-dough-warm" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#f2b978" />
      <stop offset="65%" stop-color="#a3572d" />
      <stop offset="100%" stop-color="#602d18" />
    </radialGradient>

    <!-- Glaze Gradients -->
    <radialGradient id="cursor-glaze" cx="35%" cy="25%" r="75%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="25%" stop-color="#ffb3cc" />
      <stop offset="60%" stop-color="#f269a0" />
      <stop offset="100%" stop-color="#b3245a" />
    </radialGradient>
    <radialGradient id="cursor-glaze-depth" cx="50%" cy="80%" r="60%">
      <stop offset="0%" stop-color="#d94182" stop-opacity="0.6" />
      <stop offset="70%" stop-color="#8c1c49" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#8c1c49" stop-opacity="0" />
    </radialGradient>

    <!-- Center Hole Depth -->
    <radialGradient id="cursor-hole" cx="45%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#2a120b" />
      <stop offset="50%" stop-color="#6e3c20" />
      <stop offset="85%" stop-color="#cf8c4a" />
      <stop offset="100%" stop-color="#f4c97f" />
    </radialGradient>

    <!-- Crumb / Bite Texture -->
    <linearGradient id="cursor-bite-crumb" x1="45" y1="20" x2="65" y2="35" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#ffe6ad" />
      <stop offset="50%" stop-color="#c97e42" />
      <stop offset="100%" stop-color="#7a3f22" />
    </linearGradient>

    <!-- Filters -->
    <filter id="cursor-texture" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="12" result="noise" />
      <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.55  0 0 0 0 0.28  0 0 0 0 0.15  0 0 0 0.18 0" result="speckle" />
      <feBlend in="SourceGraphic" in2="speckle" mode="multiply" />
    </filter>

    <!-- Expanded filter bounds to prevent clipping! -->
    <filter id="cursor-shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="7" stdDeviation="6" flood-color="#2a1a12" flood-opacity="0.35" />
      <feDropShadow dx="-2" dy="-2" stdDeviation="2" flood-color="#fff2cc" flood-opacity="0.2" />
    </filter>

    <!-- Masks -->
    <!-- The mask now hides ONLY the bite area, instead of arbitrarily clipping the rest of the shape -->
    <mask id="cursor-mask-bite">
      <rect x="-10" y="-10" width="100" height="100" fill="white" />
      <circle cx="36" cy="36" r="10.5" fill="black" /> <!-- Center hole -->
      <g class="cursor-bite-click">
        <circle cx="58" cy="20" r="10" fill="black" />
        <circle cx="64" cy="30" r="8" fill="black" />
        <circle cx="58" cy="34" r="6" fill="black" />
      </g>
    </mask>
  </defs>

  <!-- The Donut -->
  <g filter="url(#cursor-shadow)" mask="url(#cursor-mask-bite)">
    <!-- Main Dough -->
    <circle cx="36" cy="36" r="28" fill="url(#cursor-dough)" filter="url(#cursor-texture)" />
    <!-- Warm Dough Base Glow -->
    <ellipse cx="38" cy="40" rx="23" ry="20" fill="url(#cursor-dough-warm)" opacity="0.4" />

    <!-- Frosting / Glaze (Redesigned as a continuous organic path, no clips) -->
    <path d="M 36 6 C 52 6, 64 18, 64 34 C 64 45, 58 55, 48 60 C 45 61.5, 42 63, 36 63 C 26 63, 16 57, 10 48 C 6.5 43, 6 38, 8 30 C 10 20, 20 6, 36 6 Z" fill="url(#cursor-glaze)" />

    <!-- Frosting Wavy edge details to make it look like natural drips -->
    <path d="M 36 6
             C 45 6, 52 9, 58 14
             C 62 18, 65 25, 63 32
             C 61 38, 64 44, 61 50
             C 58 55, 52 58, 46 61
             C 40 63, 32 63, 26 60
             C 20 57, 14 55, 10 48
             C 7 42, 10 35, 9 28
             C 8 20, 14 12, 22 8
             C 27 6, 31 6, 36 6 Z"
          fill="url(#cursor-glaze)" />

    <path d="M 36 6 C 45 6, 52 9, 58 14 C 62 18, 65 25, 63 32 C 61 38, 64 44, 61 50 C 58 55, 52 58, 46 61 C 40 63, 32 63, 26 60 C 20 57, 14 55, 10 48 C 7 42, 10 35, 9 28 C 8 20, 14 12, 22 8 C 27 6, 31 6, 36 6 Z" fill="url(#cursor-glaze-depth)" />

    <!-- Center Hole inner shadow / Depth -->
    <circle cx="36" cy="36" r="10.8" fill="url(#cursor-hole)" />
    <!-- Dough inside hole lip -->
    <circle cx="34" cy="32" r="6" fill="#fbf6ec" opacity="0.8" />
    <circle cx="38" cy="40" r="10" fill="#2a140c" opacity="0.25" />

    <!-- Glaze Highlights (Replaces the badly clipped ellipses) -->
    <ellipse cx="26" cy="20" rx="10" ry="3.5" fill="#ffffff" opacity="0.6" transform="rotate(-25 26 20)" />
    <ellipse cx="48" cy="24" rx="6" ry="2.5" fill="#ffffff" opacity="0.45" transform="rotate(25 48 24)" />
    <ellipse cx="16" cy="38" rx="4" ry="2" fill="#ffffff" opacity="0.4" transform="rotate(-65 16 38)" />

    <!-- Small colorful sprinkles (No clip-paths needed, placed purely on glaze) -->
    <g opacity="0.95">
      <!-- Yellow -->
      <rect x="22" y="24" width="8" height="2.5" rx="1.25" fill="#ffeb5e" transform="rotate(-15 22 24)" />
      <rect x="46" y="44" width="7.5" height="2.5" rx="1.25" fill="#ffeb5e" transform="rotate(-30 46 44)" />
      <!-- Cyan -->
      <rect x="44" y="18" width="7.5" height="2.5" rx="1.25" fill="#42d4f5" transform="rotate(35 44 18)" />
      <!-- Green -->
      <rect x="25" y="48" width="8" height="2.5" rx="1.25" fill="#60e069" transform="rotate(15 25 48)" />
      <!-- Purple -->
      <rect x="34" y="16" width="7" height="2.5" rx="1.25" fill="#c56bf5" transform="rotate(80 34 16)" />
      <!-- Coral / Pink -->
      <rect x="15" y="32" width="7" height="2.5" rx="1.25" fill="#ff6377" transform="rotate(10 15 32)" />
      <!-- Teal -->
      <rect x="52" y="32" width="7" height="2.5" rx="1.25" fill="#44cfa9" transform="rotate(65 52 32)" />
      <!-- White -->
      <rect x="36" y="52" width="6.5" height="2.5" rx="1.25" fill="#ffffff" transform="rotate(-40 36 52)" />
      <rect x="54" y="42" width="6.5" height="2.5" rx="1.25" fill="#ffffff" transform="rotate(45 54 42)" />
      <rect x="20" y="14" width="6.5" height="2.5" rx="1.25" fill="#ffffff" transform="rotate(-50 20 14)" />
    </g>

    <!-- The Bite Cutout Crumb Texture -->
    <!-- This overlay appears exactly where the mask cuts the whole shape -->
    <g class="cursor-bite-click">
      <!-- To make it realistic, the bite edge should have textured crumbs -->
      <!-- We use a path that hugs the bite cutout edge -->
      <path d="M 51 18.5 C 55 20, 56 24, 55 27 C 59 27, 61 29, 62 32 C 60 34, 57 34, 55 34 C 53 36, 50 37, 47 36 C 49 32, 48 29, 46 26 C 48 23, 49 20, 51 18.5 Z" fill="url(#cursor-bite-crumb)" opacity="0.9" />
      <circle cx="53" cy="26" r="1.5" fill="#ffe3a6" opacity="0.8" />
      <circle cx="58" cy="32" r="1" fill="#7a3f22" opacity="0.5" />
      <circle cx="50" cy="33" r="1" fill="#ffe5ad" opacity="0.7" />
      <circle cx="48" cy="27" r="1.2" fill="#7a3f22" opacity="0.4" />
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

