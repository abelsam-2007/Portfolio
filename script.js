/* Premium Interactive Script for Abel Sam Philip's Portfolio */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. GLOBAL ENVIRONMENT SETUP ---
  const mouseGlow = document.getElementById("mouse-glow");
  const mainHeader = document.getElementById("main-header");
  const scrollProgress = document.getElementById("scroll-progress");
  
  // Register GSAP plugins if loaded
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  // --- 2. MOUSE FOLLOW GLOW EFFECT ---
  if (mouseGlow) {
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Keep glow blob slightly behind mouse using simple spring interpolation
      gsap.to(mouseGlow, {
        left: x,
        top: y,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    document.addEventListener("mouseenter", () => {
      mouseGlow.style.opacity = "0.06";
    });

    document.addEventListener("mouseleave", () => {
      mouseGlow.style.opacity = "0";
    });
    
    // Set default initial opacity
    mouseGlow.style.opacity = "0.05";
  }

  // --- 3. DYNAMIC SCROLL ACTIONS & PROGRESS BAR ---
  window.addEventListener("scroll", () => {
    // Scroll progress indicator calculation
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (window.scrollY / windowHeight) * 100;
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercentage}%`;
    }

    // Shrink header on scroll
    if (window.scrollY > 50) {
      mainHeader.classList.add("scrolled");
    } else {
      mainHeader.classList.remove("scrolled");
    }
  });

  // --- 4. MOBILE MENU INTERACTION ---
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileMenu.classList.toggle("hidden");
      const icon = menuBtn.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fa-solid fa-bars-staggered text-xl";
      } else {
        icon.className = "fa-solid fa-xmark text-xl";
      }
    });

    // Close menu when clicking navigation links
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.querySelector("i").className = "fa-solid fa-bars-staggered text-xl";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileMenu.classList.contains("hidden") && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add("hidden");
        menuBtn.querySelector("i").className = "fa-solid fa-bars-staggered text-xl";
      }
    });
  }

  // --- 5. DYNAMIC TITLE CAROUSEL / ROTATOR ---
  const roleRotator = document.getElementById("role-rotator");
  const roles = [
    "AI Engineer",
    "Backend Developer",
    "Data Science Student",
    "Creative Problem Solver",
    "Innovation Builder",
    "Professional Presenter"
  ];
  let currentRoleIdx = 0;
  
  function rotateText() {
    if (!roleRotator) return;
    
    // Smooth transition: fade text to transparent, swap string, fade back in
    gsap.to(roleRotator, {
      opacity: 0,
      y: -10,
      duration: 0.4,
      onComplete: () => {
        currentRoleIdx = (currentRoleIdx + 1) % roles.length;
        roleRotator.textContent = roles[currentRoleIdx];
        gsap.to(roleRotator, {
          opacity: 1,
          y: 0,
          duration: 0.4
        });
      }
    });
  }
  
  // Set rotating timer
  setInterval(rotateText, 3500);

  // --- 6. MAGNETIC BUTTONS (Awwwards feature) ---
  const magneticButtons = document.querySelectorAll(".magnetic-button");
  magneticButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Move button towards the cursor
      gsap.to(btn, {
        x: x * 0.35,
        y: y * 0.35,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    });
    
    btn.addEventListener("mouseleave", () => {
      // Return to baseline position
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)"
      });
    });
  });

  // --- 7. AMBIENT BACKGROUND DRIFT ANIMATIONS ---
  const blobs = ["#glow-blob-1", "#glow-blob-2", "#glow-blob-3"];
  blobs.forEach((blobId) => {
    const blob = document.querySelector(blobId);
    if (blob) {
      gsap.to(blob, {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        duration: () => 15 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  });

  // --- 8. GSAP SCROLLTRIGGERS AND TIMELINE IMPACTS ---
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    
    // A. Stats Cards Count Up Action
    const statsSection = document.getElementById("stats");
    const statCounters = document.querySelectorAll(".stat-counter");
    
    if (statsSection && statCounters.length > 0) {
      ScrollTrigger.create({
        trigger: statsSection,
        start: "top 85%",
        onEnter: () => {
          statCounters.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"));
            const duration = target > 500 ? 2 : 1.5;
            
            // Animate local value property
            const valueObj = { val: 0 };
            gsap.to(valueObj, {
              val: target,
              duration: duration,
              ease: "power2.out",
              onUpdate: () => {
                counter.textContent = Math.floor(valueObj.val).toLocaleString();
              }
            });
          });
        },
        once: true
      });
    }
    
    // B. Smooth Skills Progress Bars Fill-in
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      ScrollTrigger.create({
        trigger: skillsSection,
        start: "top 80%",
        onEnter: () => {
          document.querySelectorAll(".progress-bar").forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            gsap.to(bar, {
              width: targetWidth,
              duration: 1.5,
              ease: "power2.out"
            });
          });
        },
        once: true
      });
    }

    // C. Scroll-reveal fade-up items (About cards, experience line)
    // General section header reveals
    const revealTitles = document.querySelectorAll("h2");
    revealTitles.forEach((title) => {
      gsap.from(title, {
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 85%"
        }
      });
    });

    // Timeline items reveal
    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%"
        }
      });
    });

    // Card grid reveals
    const itemsToReveal = document.querySelectorAll(".bg-brand-card");
    itemsToReveal.forEach((card) => {
      // Exclude special cards that we don't want to animate generically
      if (!card.closest("#hero") && !card.closest("#stats")) {
        gsap.from(card, {
          opacity: 0,
          y: 20,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%"
          }
        });
      }
    });
    
  } else {
    // --- 9. FALLBACK ANIMATIONS (In case CDNs fail or run offline) ---
    console.warn("GSAP/ScrollTrigger was not loaded. Activating fallback animations.");
    
    // A. Manual counts trigger
    document.querySelectorAll(".stat-counter").forEach((counter) => {
      counter.textContent = counter.getAttribute("data-target");
    });
    
    // B. Manual skills fill-in
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      bar.style.width = bar.getAttribute("data-width");
    });
    
    // C. Manual timeline fade-in
    document.querySelectorAll(".timeline-item").forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
    });
  }
});
