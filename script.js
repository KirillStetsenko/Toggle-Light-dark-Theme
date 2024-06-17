const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const text = document.querySelector(".text");

light.addEventListener("click", () => {
  document.body.style.backgroundColor = "#222";
  text.style.color = "#fff";
});

dark.addEventListener("click", () => {
  document.body.style.backgroundColor = "#FFF";
  text.style.color = "#000";
});
