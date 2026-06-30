import { initAmbient } from "./ambient.js";
import { initCursor } from "./cursor.js";
import { initAnimations } from "./animations.js";

const SWIGGY_URL = "https://www.swiggy.com/city/kochi/donut-factory-eranakulam-circle-palarivattom-rest57934";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initLoader() {
  const loader = document.querySelector(".loader");
  if (!loader) return;
  const hideLoader = () => window.setTimeout(() => loader.classList.add("is-hidden"), prefersReducedMotion ? 0 : 450);
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader, { once: true });
}

function initNavigation() {
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  const updateNav = () => nav?.classList.toggle("is-scrolled", window.scrollY > 8);
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
  toggle?.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu?.classList.toggle("is-open", !isOpen);
  });
  menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle?.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 1050);
}

function redirectToSwiggy(delay = 650) {
  window.setTimeout(() => {
    window.location.href = SWIGGY_URL;
  }, delay);
}

function initOrdering() {
  document.querySelectorAll(".order-link").forEach((link) => {
    link.addEventListener("click", () => showToast("Opening Swiggy..."));
  });
  document.querySelectorAll(".add-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (window.gsap && !prefersReducedMotion) {
        gsap.fromTo(button, { scale: 1, rotate: 0 }, { scale: 1.22, rotate: 90, yoyo: true, repeat: 1, duration: 0.18, ease: "power2.out" });
      }
      showToast("Opening Swiggy...");
      redirectToSwiggy();
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavigation();
  initOrdering();
  initSmoothAnchors();
  initAmbient({ reducedMotion: prefersReducedMotion });
  initCursor({ reducedMotion: prefersReducedMotion });
  initAnimations({ reducedMotion: prefersReducedMotion });
});

