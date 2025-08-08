function applyThemeFromStorage() {
  const theme = localStorage.getItem("theme");

  // If no theme is set in localStorage, default to light
  if (!theme || theme === "light") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light"); // explicitly set light
    document.getElementById("checkbox").checked = false;
  } else if (theme === "dark") {
    document.body.classList.add("dark");
    document.getElementById("checkbox").checked = true;
  }
}

function setupThemeToggle() {
  const checkbox = document.getElementById("checkbox");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
}

// check email vaild or not
function emailValidation() {
  const subscribe = document.getElementById("subscribeForm");

  subscribe.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const emailLen = email.length;
    const dotIndex = email.lastIndexOf(".");
    const atIndex = email.lastIndexOf("@");
    const lastIndex = emailLen - 1;

    if (
      emailLen < 11 ||
      lastIndex - dotIndex < 2 ||
      lastIndex - dotIndex > 3 ||
      dotIndex - atIndex < 3
    ) {
      alert("Invalid email!! Please enter a valid email address.");
    } else {
      localStorage.setItem("showThankYou", "true");
      window.location.href = "thankPAGE.html";
    }
  });
};

// smooth srcolling 
function smoothScroll() {
  const button = document.querySelector(".btn");
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector("#about");
    target.scrollIntoView({ behavior: "smooth" });
  });
}



// Call all functions
applyThemeFromStorage();
setupThemeToggle();
emailValidation();
smoothScroll();

