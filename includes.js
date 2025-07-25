document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll("[data-include]");

  includes.forEach(async (el) => {
    const file = el.getAttribute("data-include");
    if (file) {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;
    }
  });
});


// active class highlight 

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    el.innerHTML = await res.text();

    // Wait for nav to be inserted, then highlight
    highlightActiveNavLink();
  });
});

function highlightActiveNavLink() {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  // Slight delay in case nav loads just after innerHTML set
  setTimeout(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPage) {
        link.classList.add(
          "text-yellow-400",
          "drop-shadow-[0_0_10px_rgba(255,255,0,1)]",
          "font-semibold",
          "border-b-2",
          "border-blue-700"
        );
      } else {
        link.classList.remove(
          "text-yellow-400",
          "drop-shadow-[0_0_10px_rgba(255,255,0,1)]",
          "font-semibold",
          "border-b-2",
          "border-yellow-400"
        );
      }
    });
  }, 10); // Tiny delay to ensure DOM is updated
}

