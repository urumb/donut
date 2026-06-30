const CURSOR_SVG = `
  <svg viewBox="0 0 64 64" role="img" aria-label="">
    <defs>
      <radialGradient id="dough" cx="35%" cy="30%" r="70%"><stop offset="0%" stop-color="#f7d8aa"/><stop offset="58%" stop-color="#d49454"/><stop offset="100%" stop-color="#a96336"/></radialGradient>
      <radialGradient id="glaze" cx="34%" cy="28%" r="80%"><stop offset="0%" stop-color="#f7e3d7"/><stop offset="100%" stop-color="#b87658"/></radialGradient>
      <mask id="donut-mask"><rect width="64" height="64" fill="white"/><circle cx="32" cy="32" r="10" fill="black"/><circle cx="54" cy="16" r="11" fill="black"/><circle cx="60" cy="27" r="7" fill="black"/><circle class="cursor-bite-click" cx="47" cy="49" r="7" fill="black"/></mask>
    </defs>
    <circle cx="32" cy="32" r="26" fill="url(#dough)" mask="url(#donut-mask)"/>
    <path d="M14 28c2-10 12-18 24-17 10 1 18 8 20 17-4-3-9-2-11 2-2 5-8 6-12 2-5-5-12-4-15 1-3 5-8 4-6-5Z" fill="url(#glaze)" mask="url(#donut-mask)"/>
    <circle cx="32" cy="32" r="9" fill="#fbf6ec"/>
    <g fill="#fff7e6" opacity=".8"><rect x="20" y="22" width="7" height="2" rx="1" transform="rotate(-22 20 22)"/><rect x="39" y="20" width="6" height="2" rx="1" transform="rotate(30 39 20)"/><rect x="18" y="40" width="6" height="2" rx="1" transform="rotate(24 18 40)"/></g>
  </svg>`;

export function initCursor({ reducedMotion = false } = {}) {
  const isTouch = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const cursor = document.getElementById("donut-cursor");
  if (!cursor || isTouch || reducedMotion) return;
  cursor.innerHTML = CURSOR_SVG;
  document.body.classList.add("cursor-enabled");
  const state = { x: innerWidth / 2, y: innerHeight / 2, targetX: innerWidth / 2, targetY: innerHeight / 2, lastX: innerWidth / 2, lastY: innerHeight / 2, idle: 0 };
  window.addEventListener("mousemove", (event) => { state.targetX = event.clientX; state.targetY = event.clientY; }, { passive: true });
  const hoverSelector = "a, button, .product-card";
  document.addEventListener("mouseover", (event) => { if (event.target.closest(hoverSelector)) cursor.classList.add("is-hovering"); });
  document.addEventListener("mouseout", (event) => { if (event.target.closest(hoverSelector)) cursor.classList.remove("is-hovering"); });
  document.addEventListener("mousedown", () => { cursor.classList.add("is-clicking"); createCrumbs(state.targetX, state.targetY); window.setTimeout(() => cursor.classList.remove("is-clicking"), 300); });
  function render() {
    state.idle += 0.035;
    state.x += (state.targetX - state.x) * 0.19;
    state.y += (state.targetY - state.y) * 0.19;
    const dx = state.x - state.lastX;
    const dy = state.y - state.lastY;
    const speed = Math.min(Math.hypot(dx, dy), 28);
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    const stretch = 1 + speed * 0.006;
    const squash = 1 - speed * 0.003;
    const idleY = Math.sin(state.idle) * 2;
    cursor.style.transform = `translate3d(${state.x - 21}px, ${state.y - 21 + idleY}px, 0) rotate(${angle * 0.08}deg) scale(${stretch}, ${squash})`;
    state.lastX = state.x;
    state.lastY = state.y;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function createCrumbs(x, y) {
  const count = 8;
  for (let index = 0; index < count; index += 1) {
    const crumb = document.createElement("span");
    crumb.className = "crumb";
    crumb.style.left = `${x}px`;
    crumb.style.top = `${y}px`;
    document.body.appendChild(crumb);
    const angle = (Math.PI * 2 * index) / count;
    const distance = 16 + Math.random() * 18;
    if (window.gsap) {
      gsap.to(crumb, { x: Math.cos(angle) * distance, y: Math.sin(angle) * distance + 10, opacity: 0, scale: 0.2, duration: 0.55, ease: "power2.out", onComplete: () => crumb.remove() });
    } else {
      window.setTimeout(() => crumb.remove(), 550);
    }
  }
}
