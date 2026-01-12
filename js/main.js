/* ========== IMAGE GALLERY ========== */
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

/* ========== HAMBURGER MENU ========== */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* ========== PRODUCT PAGE CART LOGIC ========== */

let selectedFragrance = "original";
let selectedPlan = "single";

function selectFragrance(type, el) {
  selectedFragrance = type;

  document
    .querySelectorAll(".fragrances img")
    .forEach(img => img.classList.remove("active"));

  el.classList.add("active");
}

function setPlan(plan) {
  selectedPlan = plan;
}

function setImage(el) {
  document.getElementById("mainProductImage").src = el.src;
}

function addToCart() {
  const url = `/cart?plan=${selectedPlan}&fragrance=${selectedFragrance}`;
  window.location.href = url;
}


/* ========== STATS COUNTER ========== */
const counters = document.querySelectorAll("[data-count]");

window.addEventListener("scroll", () => {
  counters.forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && counter.innerText === "0") {
      let target = +counter.dataset.count;
      let count = 0;

      const interval = setInterval(() => {
        count++;
        counter.innerText = count;
        if (count === target) clearInterval(interval);
      }, 20);
    }
  });
});

const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    document.querySelectorAll(".accordion-item").forEach(acc => {
      acc.classList.remove("active");
      acc.querySelector(".icon").textContent = "+";
    });

    item.classList.add("active");
    header.querySelector(".icon").textContent = "−";
  });
});

