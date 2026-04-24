const secondPage = document.querySelector(".main2");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight / 1.2;
  const top = secondPage.getBoundingClientRect().top;

  if (top < trigger) {
    secondPage.classList.add("show");
  }
});
