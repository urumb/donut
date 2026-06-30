export function initAmbient({ reducedMotion = false } = {}) {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;
  const blobs = [
    { x: 0.18, y: 0.16, r: 0.36, color: "rgba(216, 191, 157, 0.34)", speed: 0.18 },
    { x: 0.82, y: 0.26, r: 0.28, color: "rgba(234, 210, 196, 0.32)", speed: 0.14 },
    { x: 0.54, y: 0.82, r: 0.34, color: "rgba(164, 113, 82, 0.12)", speed: 0.12 },
  ];
  let width = 0;
  let height = 0;
  let frame = 0;
  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  function draw(time = 0) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#fbf6ec";
    context.fillRect(0, 0, width, height);
    blobs.forEach((blob, index) => {
      const drift = reducedMotion ? 0 : Math.sin(time * 0.0001 * blob.speed + index) * 26;
      const x = blob.x * width + drift;
      const y = blob.y * height - drift * 0.55;
      const radius = Math.max(width, height) * blob.r;
      const gradient = context.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(1, "rgba(251, 246, 236, 0)");
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fill();
    });
    if (!reducedMotion) frame = requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", () => { resize(); if (reducedMotion) draw(); }, { passive: true });
  if (reducedMotion) draw();
  else frame = requestAnimationFrame(draw);
  window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
}

