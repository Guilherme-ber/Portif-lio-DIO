const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
});

document.getElementById("btn-contact").addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
});

document
  .getElementById("btn-apresentation")
  .addEventListener("click", function () {
    document.getElementById("apresentation").scrollIntoView({
      behavior: "smooth",
    });
  });

document
  .getElementById("btn-habilities")
  .addEventListener("click", function () {
    document.getElementById("habilities").scrollIntoView({
      behavior: "smooth",
    });
  });

document.getElementById("btn-projects").addEventListener("click", function () {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("btn-aboutMe").addEventListener("click", function () {
  document.getElementById("aboutMe").scrollIntoView({
    behavior: "smooth",
  });
});

const languageButton = document.querySelector(".menu-options__language");
const dropdown = document.getElementById("language-dropdown");

languageButton.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});
