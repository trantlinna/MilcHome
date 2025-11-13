// Cursor đơn giản
const cursorDot = document.querySelector(".cursor-dot");

window.addEventListener("mousemove", (e) => {
  if (!cursorDot) return;
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

// Smooth scroll anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });
});