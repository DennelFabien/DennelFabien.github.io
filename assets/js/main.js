const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
if(navToggle)
{
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}

/*===== MENU HIDDEN =====*/
/* validate if constant exists  */
if(navClose)
{
  navClose.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  // when we click on each nav link, we remove the show menu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
  const header = document.getElementById("header")
  // when the scroll is greater than 80 viewport height, add the class scroll header to the tag header
  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");



/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;
      
      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click", function()
        {
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");
          for(let k=0; k<totalPortfolioItem; k++)
          {
            if(filterValue === portfolioItems[k].getAttribute("data-category"))
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
            else
            {
              portfolioItems[k].classList.add("hide");
              portfolioItems[k].classList.remove("show");
            }
            if(filterValue === "all")
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
          }
        })
      }
