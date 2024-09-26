// document.addEventListener("DOMContentLoaded", function () {

let handler = function() {
  "use strict";
  // Scroll to top
  document.querySelector("a[href='#top']")?.addEventListener("click", function () {
    document.querySelector("html, body").animate({ scrollTop: 0 }, {duration: 600});
    return false;
  });

  // Smooth scroll down to target 
  document.querySelector("a.scroll-to")?.addEventListener("click", function (event) {
    scrollTop: document.querySelector(event.currentTarget.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    event.preventDefault();
  });

  // Focus on active testimonial
  document
    .querySelectorAll(".site-testimonial-item").forEach((item) =>
      item.addEventListener("mouseenter", function () {
        document.querySelectorAll(".site-testimonial-item").forEach((item) => item.classList.add("inactive"));
        this.classList.replace("inactive", "active");
      })
    );
  document
    .querySelectorAll(".site-testimonial-item").forEach((item) => 
      item.addEventListener("mouseleave", function () {
        document.querySelectorAll(".site-testimonial-item").forEach((item) => item.classList.remove("inactive", "active"));
      })
    );
};

// Reduce navbar height when scrolling down
document.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    document.querySelector(".site-navigation").classList.add("nav-bg");
  } else {
    document.querySelector(".site-navigation").classList.remove("nav-bg");
  }
});

if(document.readyState === 'complete' || (document.readyState !== 'loading')) {
  handler()
} else {
  document.addEventListener('DOMContentLoaded', handler);
}
