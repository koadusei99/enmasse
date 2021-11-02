const navlist = document.getElementById("navitems");
const navbar = document.getElementById("navbar");
const toggle = document.getElementById("toggle");
const closeb = document.getElementById("close");
const openb = document.getElementById("open");
const filters = document.getElementById("filters");
const links = document.querySelectorAll(".item a");
const logo = document.getElementById("logo");

toggle.addEventListener("click", () => {
  let disp = window.getComputedStyle(navlist, null).getPropertyValue("display");

  if (disp === "none") {
    navlist.style.display = "flex";
    toggle.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.4478 19.5522C0.580337 19.6858 0.738022 19.7919 0.911757 19.8643C1.08549 19.9367 1.27184 19.9739 1.46005 19.9739C1.64826 19.9739 1.83461 19.9367 2.00834 19.8643C2.18208 19.7919 2.33976 19.6858 2.4723 19.5522L10 12.0245L17.5562 19.5807C17.8247 19.8492 18.1888 20 18.5685 20C18.9481 20 19.3122 19.8492 19.5807 19.5807C19.8492 19.3122 20 18.9481 20 18.5685C20 18.1888 19.8492 17.8247 19.5807 17.5562L12.0245 10L19.5807 2.44378C19.8492 2.17532 20 1.8112 20 1.43153C20 1.05187 19.8492 0.687752 19.5807 0.419288C19.3122 0.150823 18.9481 0 18.5685 0C18.1888 0 17.8247 0.150823 17.5562 0.419288L10 7.9755L2.44378 0.4478C2.17532 0.179335 1.8112 0.0285147 1.43153 0.0285147C1.05187 0.0285147 0.687752 0.179335 0.419288 0.4478C0.150823 0.716264 0 1.08038 0 1.46005C0 1.83972 0.150823 2.20383 0.419288 2.4723L7.9755 10L0.4478 17.5562C0.186573 17.8227 0.0402539 18.181 0.0402539 18.5542C0.0402539 18.9274 0.186573 19.2857 0.4478 19.5522Z" fill="#ffa010"/>
    </svg>
    `;
  } else {
    navlist.style.display = "none";
    toggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6" fill="none" width="50" viewBox="0 0 24 24" stroke="#ffa010">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16" />
</svg>
    `;
  }
});

closeb.addEventListener("click", () => {
  let disp = window.getComputedStyle(filters, null).getPropertyValue("display");

  if (disp === "flex") {
    filters.style.display = "none";
  }
});
openb.addEventListener("click", () => {
  let disp = window.getComputedStyle(filters, null).getPropertyValue("display");

  if (disp === "none") {
    filters.style.display = "flex";
  } else {
    filters.style.display = "none";
  }
});
