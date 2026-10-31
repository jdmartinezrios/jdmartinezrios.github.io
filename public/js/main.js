"use strict";

const CAREER_START = new Date(2017, 8, 1); // September 2017 — first freelance role

document.addEventListener("DOMContentLoaded", () => {
  renderExperienceYears();
  renderCurrentYear();
  setupHeaderScrollState();
  setupMobileNav();
  setupScrollReveal();
  setupActiveNavHighlight();
  setupContactForm();
});

/* ------------------------------ Dynamic text ------------------------------ */

function renderExperienceYears() {
  const years = Math.floor(
    (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );
  document
    .querySelectorAll("[data-experience-years]")
    .forEach((el) => (el.textContent = years));
}

function renderCurrentYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

/* --------------------------------- Header --------------------------------- */

function setupHeaderScrollState() {
  const header = document.getElementById("site-header");
  const update = () => header.classList.toggle("scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  const setOpen = (open) => {
    toggle.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () =>
    setOpen(!menu.classList.contains("open"))
  );

  // Close the menu when a link is chosen or when clicking outside of it.
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-nav")) setOpen(false);
  });
}

/* ------------------------------ Scroll effects ----------------------------- */

function setupScrollReveal() {
  const targets = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

function setupActiveNavHighlight() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* --------------------------------- Contact -------------------------------- */

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton = form.querySelector("[type='submit']");
    submitButton.disabled = true;
    setFormStatus(status, "Sending…", "");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setFormStatus(status, "Thanks for reaching out! I'll reply soon.", "success");
    } catch (error) {
      setFormStatus(
        status,
        "Something went wrong. Please try again or reach me on LinkedIn.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
    }
  });
}

function setFormStatus(statusEl, message, state) {
  statusEl.textContent = message;
  statusEl.className = state ? `form-status ${state}` : "form-status";
}
