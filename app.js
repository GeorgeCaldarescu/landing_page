// dropdown menu

document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
  // the code above ignore the cliks inside the dropdown menus

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  // close the other dropdowns that are not open
  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// hamburger menu

let toggleBtn = document.getElementsByClassName("toggle-btn")[0];

const navbar = document.getElementsByTagName("nav")[0];

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
