const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

function updateThemeIcon() {
  if (!themeToggle) return;

  themeToggle.textContent =
    document.body.classList.contains("dark")
      ? "☼"
      : "◐";
}

updateThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
      document.body.classList.contains("dark");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    updateThemeIcon();
  });
}
