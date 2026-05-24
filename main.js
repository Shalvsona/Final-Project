(function () {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const btnPrev = document.querySelector(".carousel-btn--prev");
  const btnNext = document.querySelector(".carousel-btn--next");

  let current = 0;
  const total = slides.length;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  btnNext.addEventListener("click", () => goTo(current + 1));
  btnPrev.addEventListener("click", () => goTo(current - 1));
  dots.forEach((dot) =>
    dot.addEventListener("click", () => goTo(+dot.dataset.index)),
  );

  let timer = setInterval(() => goTo(current + 1), 5000);
  document
    .querySelector(".carousel")
    .addEventListener("mouseenter", () => clearInterval(timer));
  document.querySelector(".carousel").addEventListener("mouseleave", () => {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  });
})();

// Sign In Modal
(function () {
  const overlay = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("openSignin");
  const closeBtn = document.getElementById("closeModal");

  function open() {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
  function close() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
