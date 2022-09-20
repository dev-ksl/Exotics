const navBar = document.querySelector('.navbar');
const toggle = document.querySelector('.toggle');

toggle.addEventListener("click", () => {
   const visibility = navBar.getAttribute("data-visible")

   if (visibility ==="false") {
      navBar.setAttribute("data-visible", true);
      toggle.setAttribute("aria-expanded", true)
   }else {
      navBar.setAttribute("data-visible", false);
      toggle.setAttribute("aria-expanded", false)
   }








});