/* App Initialization & Core Logic */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inject Custom Cursor Elements
  const cursorDot = document.createElement("div");
  cursorDot.className = "custom-cursor-dot";
  const cursorOutline = document.createElement("div");
  cursorOutline.className = "custom-cursor-outline";
  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorOutline);

  // 2. Inject Background Ambient Blobs
  const bgBlobs = document.createElement("div");
  bgBlobs.className = "bg-blobs";
  bgBlobs.innerHTML = `
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  `;
  document.body.appendChild(bgBlobs);

  // 3. Initialize SPA Router
  if (window.Router) {
    window.Router.init();
  }

  // 4. Initialize Core Micro-interactions
  if (window.Animations) {
    window.Animations.init();
  }

  // 5. Handle Mobile Navigation Toggle
  const setupMobileNav = () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".navbar-menu");
    
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        navToggle.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
      });

      // Close menu when clicking nav links
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          navToggle.textContent = "☰";
        });
      });
    }
  };

  setupMobileNav();

  // Re-bind mobile navigation after routes render (since router doesn't re-render navbar, it only changes active state, so this is fine!)
  window.addEventListener("hashchange", () => {
    // Ensure mobile nav collapses on hash change
    const navMenu = document.querySelector(".navbar-menu");
    const navToggle = document.querySelector(".nav-toggle");
    if (navMenu && navToggle) {
      navMenu.classList.remove("open");
      navToggle.textContent = "☰";
    }
  });
});
