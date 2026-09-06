const themeToggle = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const theme = document.body.classList.contains("dark")
      ? "dark"
      : "light";

    localStorage.setItem("theme", theme);
  });
}
