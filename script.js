// ============================================
// 🌙 LIGHT / DARK MODE TOGGLE
// ============================================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const themeIcon = toggleBtn.querySelector("i");

// Función para aplicar el tema
function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    body.classList.remove("dark-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}
function animateThemeIcon() {
  themeIcon.classList.add("rotate-icon");
  setTimeout(() => themeIcon.classList.remove("rotate-icon"), 500);
}

// Cargar tema guardado
const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

// Toggle del tema sin animación extra
toggleBtn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-mode");
  const newTheme = isDark ? "light" : "dark";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
  animateThemeIcon();
});


// ============================================
// 📱 NAVIGATION MENU (Responsive)
// ============================================
const nav = document.querySelector(".nav-links");
const menuBtn = document.querySelector(".menu-btn");

if (menuBtn && nav) {
  const menuIcon = menuBtn.querySelector("i");
  const navLinks = document.querySelectorAll(".nav-link");

  // Toggle del menú móvil
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("active");
    
    if (nav.classList.contains("active")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    } else {
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    }
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      if (menuIcon) {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (nav && menuBtn && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
      nav.classList.remove("active");
      if (menuIcon) {
        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");
      }
    }
  });
}

// ============================================
// 🎯 ACTIVE LINK HIGHLIGHT (Scroll Spy)
// ============================================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let current = "";
  const scrollPosition = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// ============================================
// ✨ SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll(".section");

function checkVisibility() {
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);

// Hacer visible la primera sección inmediatamente
if (revealElements.length > 0) {
  revealElements[0].classList.add("visible");
}

// ============================================
// 📧 CONTACT FORM HANDLING
// ============================================
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Obtener valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // Efecto ripple en el botón
    const submitBtn = contactForm.querySelector(".btn-elegant");
    if (submitBtn) {
      const ripple = submitBtn.querySelector(".btn-ripple");
      if (ripple) {
        ripple.style.animation = "none";
        setTimeout(() => {
          ripple.style.animation = "ripple 0.6s";
        }, 10);
      }
    }
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ejemplo, usando fetch para enviar a un servidor
    console.log("Formulario enviado:", { name, email, message });
    
    // Mostrar mensaje de éxito (puedes mejorar esto con un modal o notificación)
    setTimeout(() => {
      alert("¡Gracias por tu mensaje! Te responderé pronto.");
      contactForm.reset();
    }, 300);
  });
}

// ============================================
// 🎨 SMOOTH SCROLL PARA ENLACES
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});

// ============================================
// 🌊 NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  // Efecto en el navbar al hacer scroll
  if (currentScroll > 50) {
    if (navbar) {
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    }
  } else {
    if (navbar) {
      navbar.style.boxShadow = "none";
    }
  }
});

// ============================================
// ⚡ PERFORMANCE: Debounce para eventos de scroll
// ============================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
      timeout = setTimeout(later, wait);
  };
}

// Aplicar debounce a las funciones de scroll
const debouncedUpdateActiveLink = debounce(updateActiveLink, 100);
const debouncedCheckVisibility = debounce(checkVisibility, 100);

window.addEventListener("scroll", () => {
  debouncedUpdateActiveLink();
  debouncedCheckVisibility();
});

// ============================================
// 🎭 TYPING EFFECT (Opcional - efecto de escritura)
// ============================================
const typingElement = document.querySelector(".typing-text");
if (typingElement) {
  const text = typingElement.textContent;
  const words = ["Desarrolladora Back-End", "Diseñadora Web", "Programadora"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pausa al final
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  // Iniciar efecto de escritura después de un delay
  setTimeout(() => {
    typingElement.textContent = "";
    type();
  }, 1000);
}

// ============================================
// 🚀 INICIALIZACIÓN
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("DevResume cargado correctamente");
  
  // Asegurar que la primera sección sea visible
  checkVisibility();
  updateActiveLink();
});
