const toggle = document.querySelector(`input[type='checkbox']`);
console.log(toggle);

toggle.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (toggle.checked) {
    body.classList.add("dark-mode");
    console.log("cjeck");
  } else {
    body.classList.remove("dark-mode");
    console.log("unchek");
  }
});

window.addEventListener("load", function () {
  toggle.checked = false;
});
