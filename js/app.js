/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navItem = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  let navList = "";
  // build the nav by looping through the sections on the page
  sections.forEach(section =>{
    const sectionId = section.id;
    const sectionDataNav = section.dataset.nav;
    navList += `<li class="menu__link"> <a href="#${sectionId}">${sectionDataNav}</a></li>`;
  });
  //append all nav items to the nav bar
  navItem.insertAdjacentHTML('beforeend', navList);
};


//  sections position in viewport
function inViewport(section) {
  //return the size of section and its position relative to the viewport.
    let sectionRect = section.getBoundingClientRect();
    return(
        sectionRect.top >= 0 &&
        sectionRect.left >= 0 &&
        sectionRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        sectionRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function(){
  // Loop through all sections and adds/ removes class
  for (i = 0; i < sections.length; i++) {
      if(!inViewport(sections[i])){
        //remove the active class
          sections[i].classList.remove('active');
      } else {
        // adding the active class
          sections[i].classList.add('active');
      }
  };
});

// Smooth scroll to section when anchor is clicked
function smoothScroll () {
  const aTag = document.getElementsByTagName('a');
// Loop through sections to add click event listener with smooth scroll
  for (let i = 0; i < sections.length; i++) {
      let elem = sections[i];
      let anchor = aTag[i];
      anchor.addEventListener('click', (e) => {
          e.preventDefault();
          elem.scrollIntoView({
              behavior: "smooth"
          });
      });
  };
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu by calling build function
buildNav();

// Scroll to section on link click by calling scroll function
smoothScroll();
