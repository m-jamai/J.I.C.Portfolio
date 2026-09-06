const toggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  toggle.textContent = "☼";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const dark = document.body.classList.contains("dark");

  localStorage.setItem("theme", dark ? "dark" : "light");

  toggle.textContent = dark ? "☼" : "☾";
});

