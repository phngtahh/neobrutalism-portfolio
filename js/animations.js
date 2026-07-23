/* micro-interactions & Animations */

const Animations = {
  mouseX: 0,
  mouseY: 0,
  cursorX: 0,
  cursorY: 0,
  cursorDot: null,
  cursorOutline: null,
  cursorSpeed: 0.16, // Lerp speed for trailing circle
  isMobile: false,

  init() {
    this.isMobile = window.innerWidth <= 768;
    this.cursorDot = document.querySelector(".custom-cursor-dot");
    this.cursorOutline = document.querySelector(".custom-cursor-outline");

    if (!this.isMobile) {
      this.setupCustomCursor();
    }
    
    this.initAnimations();
  },

  initAnimations() {
    // Re-check mobile status
    this.isMobile = window.innerWidth <= 768;

    this.setupScrollReveal();
    
    if (!this.isMobile) {
      this.setup3DTilt();
      this.setupMagneticButtons();
      this.setupCursorHoverEvents();
    }
  },

  setupCustomCursor() {
    // Track mouse position
    window.addEventListener("mousemove", (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      
      // Instantly position the dot
      if (this.cursorDot) {
        this.cursorDot.style.left = `${this.mouseX}px`;
        this.cursorDot.style.top = `${this.mouseY}px`;
      }
    });

    // Animate trailing outline using requestAnimationFrame
    const animateCursor = () => {
      // Lerp logic
      this.cursorX += (this.mouseX - this.cursorX) * this.cursorSpeed;
      this.cursorY += (this.mouseY - this.cursorY) * this.cursorSpeed;

      if (this.cursorOutline) {
        this.cursorOutline.style.left = `${this.cursorX}px`;
        this.cursorOutline.style.top = `${this.cursorY}px`;
      }

      requestAnimationFrame(animateCursor);
    };
    
    // Set initial position off screen
    this.mouseX = -100;
    this.mouseY = -100;
    this.cursorX = -100;
    this.cursorY = -100;
    
    animateCursor();
  },

  setupCursorHoverEvents() {
    const hoverTargets = document.querySelectorAll(".cursor-hover-target, a, button, input, textarea, .filter-btn");
    
    hoverTargets.forEach(target => {
      target.addEventListener("mouseenter", (e) => {
        const cursorStyle = target.getAttribute("data-cursor") || "teal";
        document.body.classList.remove("cursor-hover", "cursor-hover-orange", "cursor-hover-yellow");
        
        if (cursorStyle === "coral" || cursorStyle === "orange") {
          document.body.classList.add("cursor-hover-orange");
        } else if (cursorStyle === "yellow") {
          document.body.classList.add("cursor-hover-yellow");
        } else {
          document.body.classList.add("cursor-hover");
        }
      });

      target.addEventListener("mouseleave", () => {
        document.body.classList.remove("cursor-hover", "cursor-hover-orange", "cursor-hover-yellow");
      });
    });
  },

  setupScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      observer.observe(el);
    });
  },

  setup3DTilt() {
    const cards = document.querySelectorAll(".brutalist-card, .project-card");
    
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        
        // Calculate normalized mouse positions (-1 to 1) inside the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        const tiltX = (yc - y) / 12; // tilt amount max 15deg
        const tiltY = (x - xc) / 12;
        
        // Apply 3D rotation and translation
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(5px)`;
        card.style.transition = "transform 0.05s ease";
      });

      card.addEventListener("mouseleave", () => {
        // Reset card state
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0deg)`;
        card.style.transition = "transform 0.3s ease";
      });
    });
  },

  setupMagneticButtons() {
    const buttons = document.querySelectorAll(".btn, .navbar-logo");
    
    buttons.forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Move button slightly towards mouse
        // Since we have neobrutalist translation, we adjust translation carefully
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
        btn.style.transition = "transform 0.05s ease";
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
        btn.style.transition = "transform 0.3s ease";
      });
    });
  }
};

window.Animations = Animations;
