const toggle = document.getElementById("darkToggle");

// Default: dark mode
localStorage.setItem("theme", "dark");

// Toggle theme
toggle.addEventListener("change", () => {
  if (!toggle.checked) {
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }
});
