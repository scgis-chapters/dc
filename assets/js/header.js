const header = document.querySelector(".site-header");
const mobileViewport = window.matchMedia("(max-width: 820px)");

function updateExpandedHeaderHeight() {
  if (!header || !mobileViewport.matches) {
    document.documentElement.style.removeProperty(
      "--mobile-header-expanded-height",
    );
    return;
  }

  if (!header.classList.contains("is-compact")) {
    document.documentElement.style.setProperty(
      "--mobile-header-expanded-height",
      `${header.offsetHeight}px`,
    );
  }
}

function updateHeader() {
  updateExpandedHeaderHeight();
  header?.classList.toggle(
    "is-compact",
    mobileViewport.matches && window.scrollY > 48,
  );
}

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", updateExpandedHeaderHeight);
mobileViewport.addEventListener("change", () => {
  updateHeader();
  requestAnimationFrame(updateExpandedHeaderHeight);
});
updateHeader();
