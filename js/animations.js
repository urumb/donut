export function initAnimations({ reducedMotion = false } = {}) {
  if (reducedMotion) {
    document.querySelectorAll(".reveal").forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
    });
    return;
  }
  const start = () => {
    if (!window.gsap || !window.ScrollTrigger) {
      window.setTimeout(start, 60);
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".site-nav", { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.2 });
    gsap.utils.toArray(".reveal").forEach((element) => {
      gsap.to(element, { opacity: 1, y: 0, duration: 1.05, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 86%", once: true } });
    });
    gsap.utils.toArray(".product-card").forEach((card, index) => {
      gsap.fromTo(card, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.9, delay: index * 0.08, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%", once: true } });
    });
    gsap.utils.toArray("[data-parallax]").forEach((element) => {
      const depth = Number(element.dataset.parallax || 0.12);
      gsap.to(element, { yPercent: depth * -42, ease: "none", scrollTrigger: { trigger: element, scrub: 0.9, start: "top bottom", end: "bottom top" } });
    });
  };
  start();
}
