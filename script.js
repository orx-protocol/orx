const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const navbtn = document.getElementById("navbtn");
const mobileNav = document.getElementById("mobileNav");

function closeMobileNav() {
  if (!mobileNav || !navbtn) return;
  mobileNav.hidden = true;
  navbtn.setAttribute("aria-expanded", "false");
}

function toggleMobileNav() {
  if (!mobileNav || !navbtn) return;
  const isOpen = navbtn.getAttribute("aria-expanded") === "true";
  navbtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
}

if (navbtn && mobileNav) {
  navbtn.addEventListener("click", toggleMobileNav);
  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") closeMobileNav();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});
