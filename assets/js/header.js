const header = document.querySelector(".site-header");
const mobileViewport = window.matchMedia("(max-width: 820px)");

function updateHeader() {
  header?.classList.toggle(
    "is-compact",
    mobileViewport.matches && window.scrollY > 48,
  );
}

window.addEventListener("scroll", updateHeader, { passive: true });
mobileViewport.addEventListener("change", updateHeader);
updateHeader();
