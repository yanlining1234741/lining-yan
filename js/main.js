(() => {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });

  const inner = document.querySelector(".header-inner");
  const toggle = document.querySelector(".nav-toggle");
  if (toggle && inner) {
    toggle.addEventListener("click", () => {
      const open = inner.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  const items = [...document.querySelectorAll(".gallery-item, .project-figure")];
  const lightbox = document.getElementById("lightbox");
  if (!items.length || !lightbox) return;

  const img = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  let index = 0;

  const show = (i) => {
    index = (i + items.length) % items.length;
    const item = items[index];
    img.src = item.dataset.full || item.querySelector("img").src;
    img.alt = item.dataset.caption || "";
    caption.textContent = item.dataset.caption || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  };

  const hide = () => {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    img.src = "";
  };

  items.forEach((item, i) => {
    item.addEventListener("click", () => show(i));
  });

  lightbox.querySelector(".lightbox-close").addEventListener("click", hide);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => show(index - 1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) hide();
  });

  window.addEventListener("keydown", (e) => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") hide();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
})();
