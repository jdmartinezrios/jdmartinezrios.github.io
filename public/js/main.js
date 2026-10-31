"use strict";

const CAREER_START = new Date(2017, 8, 1); // September 2017 — first freelance role
const LANG_STORAGE_KEY = "preferred-lang";

/**
 * English defaults harvested from the HTML on load, so the markup stays the
 * single source of truth for the default language. Spanish comes from
 * TRANSLATIONS (translations.js).
 */
const englishStrings = { text: {}, placeholder: {}, aria: {}, alt: {}, title: "" };
let currentLang = "en";

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitch();
  renderExperienceYears();
  renderCurrentYear();
  setupHeaderScrollState();
  setupMobileNav();
  setupScrollReveal();
  setupActiveNavHighlight();
  setupContactForm();
});

/* ---------------------------------- i18n ---------------------------------- */

function setupLanguageSwitch() {
  harvestEnglishStrings();

  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const browserPrefersSpanish = (navigator.language || "")
    .toLowerCase()
    .startsWith("es");
  applyLanguage(saved || (browserPrefersSpanish ? "es" : "en"));

  document.querySelectorAll(".lang-option").forEach((button) =>
    button.addEventListener("click", () => applyLanguage(button.dataset.lang))
  );
}

function harvestEnglishStrings() {
  englishStrings.title = document.title;
  const harvest = (attribute, store, read) =>
    document.querySelectorAll(`[${attribute}]`).forEach((el) => {
      const key = el.getAttribute(attribute);
      if (!(key in store)) store[key] = read(el);
    });

  harvest("data-i18n", englishStrings.text, (el) => el.textContent.trim());
  harvest("data-i18n-placeholder", englishStrings.placeholder, (el) => el.placeholder);
  harvest("data-i18n-aria", englishStrings.aria, (el) => el.getAttribute("aria-label"));
  harvest("data-i18n-alt", englishStrings.alt, (el) => el.alt);
}

function applyLanguage(lang) {
  currentLang = lang === "es" ? "es" : "en";
  localStorage.setItem(LANG_STORAGE_KEY, currentLang);
  document.documentElement.lang = currentLang;
  document.title =
    currentLang === "es" ? TRANSLATIONS.es["meta.title"] : englishStrings.title;

  const lookup = (key, store) =>
    currentLang === "es" ? TRANSLATIONS.es[key] : store[key];
  const translate = (attribute, store, write) =>
    document.querySelectorAll(`[${attribute}]`).forEach((el) => {
      const value = lookup(el.getAttribute(attribute), store);
      if (value) write(el, value);
    });

  translate("data-i18n", englishStrings.text, (el, v) => (el.textContent = v));
  translate("data-i18n-placeholder", englishStrings.placeholder, (el, v) => (el.placeholder = v));
  translate("data-i18n-aria", englishStrings.aria, (el, v) => el.setAttribute("aria-label", v));
  translate("data-i18n-alt", englishStrings.alt, (el, v) => (el.alt = v));

  document.querySelectorAll(".lang-option").forEach((button) => {
    const active = button.dataset.lang === currentLang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

/** Looks up a runtime string (no DOM element) in the current language. */
function t(key) {
  return TRANSLATIONS[currentLang][key] ?? TRANSLATIONS.en[key] ?? key;
}

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
    setFormStatus(status, t("form.sending"), "");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setFormStatus(status, t("form.success"), "success");
    } catch (error) {
      setFormStatus(status, t("form.error"), "error");
    } finally {
      submitButton.disabled = false;
    }
  });
}

function setFormStatus(statusEl, message, state) {
  statusEl.textContent = message;
  statusEl.className = state ? `form-status ${state}` : "form-status";
}
