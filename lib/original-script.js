// Smart Traffic Management System - Interactive JavaScript
document.addEventListener("DOMContentLoaded", () => {
  console.log("Smart Traffic Management System initialized")

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80 // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Interactive statistics counter animation
  const statCards = document.querySelectorAll(".stat-card")
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats()
          statsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  statCards.forEach((card) => {
    statsObserver.observe(card)
  })

  // Live dashboard simulation
  const dashboardData = {
    vehicles: 1247,
    efficiency: 87,
    waitTime: 2.4,
  }

  function updateDashboard() {
    const vehiclesEl = document.querySelector(".bg-white:nth-child(1) .text-white")
    const efficiencyEl = document.querySelector(".bg-white:nth-child(2) .text-white")
    const waitTimeEl = document.querySelector(".bg-white:nth-child(3) .text-white")

    if (vehiclesEl && efficiencyEl && waitTimeEl) {
      // Simulate live data changes
      const vehicleChange = Math.floor(Math.random() * 21) - 10 // -10 to +10
      const efficiencyChange = Math.floor(Math.random() * 6) - 2 // -2 to +3
      const waitTimeChange = Math.random() * 0.4 - 0.2 // -0.2 to +0.2

      dashboardData.vehicles += vehicleChange
      dashboardData.efficiency = Math.max(70, Math.min(95, dashboardData.efficiency + efficiencyChange))
      dashboardData.waitTime = Math.max(1.5, Math.min(4.0, dashboardData.waitTime + waitTimeChange))

      vehiclesEl.textContent = dashboardData.vehicles.toLocaleString()
      efficiencyEl.textContent = Math.round(dashboardData.efficiency) + "%"
      waitTimeEl.textContent = dashboardData.waitTime.toFixed(1) + "min"

      // Update traffic status indicators
      updateTrafficStatus()
    }
  }

  function updateTrafficStatus() {
    const directions = ["North", "South", "East", "West"]
    directions.forEach((direction) => {
      const statusEl = document.querySelector(`.text-white:contains('${direction}')`).nextElementSibling
      if (statusEl) {
        const randomStatus = Math.random()
        let statusText, statusClass

        if (randomStatus < 0.6) {
          statusText = "Smooth"
          statusClass = "text-green-300"
        } else if (randomStatus < 0.85) {
          statusText = "Moderate"
          statusClass = "text-yellow-300"
        } else {
          statusText = "Congested"
          statusClass = "text-red-300"
        }

        statusEl.textContent = statusText
        statusEl.className = statusClass
      }
    })
  }

  // Helper function for text contains selector
  document.querySelectorAll =
    document.querySelectorAll ||
    ((selector) => {
      const elements = []
      const all = document.getElementsByTagName("*")
      for (let i = 0; i < all.length; i++) {
        if (all[i].textContent.includes(selector.replace(":contains(", "").replace(")", ""))) {
          elements.push(all[i])
        }
      }
      return elements
    })

  // Animate statistics counters
  function animateStats() {
    const stats = document.querySelectorAll(".stat-card .text-3xl")
    stats.forEach((stat) => {
      const target = Number.parseInt(stat.textContent)
      let current = 0
      const increment = target / 50

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          stat.textContent = Math.round(target) + (stat.textContent.includes("%") ? "%" : "")
          clearInterval(timer)
        } else {
          stat.textContent = Math.round(current) + (stat.textContent.includes("%") ? "%" : "")
        }
      }, 20)
    })
  }

  // Interactive team cards
  const teamCards = document.querySelectorAll(".team-card")
  teamCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Demo buttons functionality
  const demoButtons = document.querySelectorAll("button")
  demoButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.textContent.includes("View Demo")) {
        // Scroll to dashboard section
        document.querySelector("#tech").scrollIntoView({
          behavior: "smooth",
          block: "start",
        })

        // Show demo notification
        showNotification("Demo mode activated! Live data simulation started.", "success")
      } else if (this.textContent.includes("Learn More")) {
        // Do nothing (inactive)
        console.log("Learn More button clicked but disabled")
      }
    })
  })

  // Notification system
  function showNotification(message, type = "info") {
    const notification = document.createElement("div")
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-transform duration-300 ${
      type === "success"
        ? "bg-green-500 text-white"
        : type === "error"
          ? "bg-red-500 text-white"
          : "bg-blue-500 text-white"
    }`
    notification.textContent = message
    notification.style.transform = "translateX(100%)"

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)

    // Animate out and remove
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Mobile menu toggle (for future responsive enhancement)
  function initMobileMenu() {
    const menuButton = document.createElement("button")
    menuButton.className = "md:hidden fixed top-4 right-4 z-50 p-2 bg-blue-600 text-white rounded"
    menuButton.innerHTML = '<i class="fas fa-bars"></i>'
    menuButton.addEventListener("click", toggleMobileMenu)

    document.body.appendChild(menuButton)
  }

  function toggleMobileMenu() {
    const nav = document.querySelector("nav .hidden.md\\:flex")
    if (nav) {
      nav.classList.toggle("mobile-visible")
    }
  }

  // Add mobile menu styles
  const style = document.createElement("style")
  style.textContent = `
        @media (max-width: 768px) {
            nav .hidden.md\\:flex.mobile-visible {
                display: flex !important;
                flex-direction: column;
                position: fixed;
                top: 64px;
                left: 0;
                right: 0;
                background: white;
                padding: 20px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            
            nav .hidden.md\\:flex.mobile-visible a {
                margin: 10px 0;
            }
        }
    `
  document.head.appendChild(style)

  // Initialize mobile menu
  initMobileMenu()

  // Start live data updates for dashboard
  setInterval(updateDashboard, 3000)

  // Initialize animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe all sections for fade-in animation
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })

  // Performance monitoring
  let lastScrollY = window.scrollY
  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY
    const scrollDirection = currentScrollY > lastScrollY ? "down" : "up"
    lastScrollY = currentScrollY

    // Optional: Add scroll-based animations here
  })

  // Error handling
  window.addEventListener("error", (e) => {
    console.error("Application error:", e.error)
    showNotification("An unexpected error occurred. Please refresh the page.", "error")
  })

  console.log("Smart Traffic Management System JavaScript loaded successfully")
})

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Export for potential module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    debounce,
    // Add other exports as needed
  }
}

/* ADDED: Theme toggle logic*/

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement
  const body = document.body

  function ensureToggleButton() {
    let btn = document.getElementById("theme-toggle")
    if (!btn) {
      btn = document.createElement("button")
      btn.id = "theme-toggle"
      btn.className = "theme-toggle-btn ml-2 p-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
      btn.setAttribute("aria-label", "Toggle theme")
      const navRight =
        document.querySelector("nav .hidden.md\\:flex") || document.querySelector("nav .flex.justify-between")
      if (navRight) navRight.appendChild(btn)
    }
    return btn
  }

  function applyTheme(theme, { persist = true } = {}) {
    const isDark = theme === "dark"
    root.setAttribute("data-theme", theme)
    root.classList.toggle("dark", isDark)
    if (persist) localStorage.setItem("theme", theme)
    updateThemeIcon(toggleBtn, isDark)
  }

  function getInitialTheme() {
    const stored = localStorage.getItem("theme")
    if (stored === "dark" || stored === "light") return stored
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  function updateThemeIcon(btn, isDark) {
    if (!btn) return
    btn.innerHTML = isDark
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`
  }

  const toggleBtn = ensureToggleButton()
  applyTheme(getInitialTheme(), { persist: false })

  toggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "dark" ? "dark" : "light"
    const next = current === "dark" ? "light" : "dark"
    applyTheme(next)
  })

  const media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null
  if (media) {
    media.addEventListener("change", (e) => {
      const hasUserPref = localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === "light"
      if (!hasUserPref) {
        applyTheme(e.matches ? "dark" : "light", { persist: false })
      }
    })
  }
})
/* Demo interactions */
document.getElementById("calc-btn").addEventListener("click", () => {
  // Replace with real API later
  const eta = Math.floor(Math.random() * 20 + 5)
  const fuel = (eta * 0.08).toFixed(1)
  const saved = (eta * 0.12).toFixed(1)
  document.getElementById("result").textContent = `ETA: ${eta} min | Fuel: ${fuel} L | Saved: ${saved} L`
})

document.getElementById("emergency-toggle").addEventListener("change", (e) => {
  document.getElementById("toggle-label").textContent = e.target.checked ? "Green Corridor ON" : "Normal Mode"
})
/* === Mapbox Demo Map === */
mapboxgl.accessToken = "pk.eyJ1IjoiZGVtby11c2VyIiwiYSI6ImNsbzN2NHc5aDFjbzcycXB2b2E2cGd5d2kifQ.fake-demo-token" // replace with your token
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/dark-v11",
  center: [-74.006, 40.7128],
  zoom: 11,
})

map.on("load", () => {
  // Optional traffic layer
  map.addLayer({
    id: "traffic",
    type: "line",
    source: {
      type: "vector",
      url: "mapbox://mapbox.mapbox-traffic-v1",
    },
    "source-layer": "traffic",
    paint: {
      "line-color": [
        "match",
        ["get", "congestion"],
        "low",
        "#22c55e",
        "moderate",
        "#f59e0b",
        "heavy",
        "#ef4444",
        "#64748b",
      ],
      "line-width": 3,
    },
  })
})
