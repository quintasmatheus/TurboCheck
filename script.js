const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  var logo = document.getElementById("logo");
  var navbar = document.getElementById("navbar");
  var navbarHeight = navbar.offsetHeight;
  console.log("navbarHeight ->" ,navbarHeight)

  window.addEventListener("scroll", function () {
      // Get the current scroll position
      var scrollPosition = window.scrollY;
      console.log("scrollPosition ->" ,scrollPosition)
      console.log("windowScrollY ->" ,window.scrollY)

      var thresholdLogo = 290;
       if (scrollPosition > thresholdLogo) {
        logo.classList.add("fixed");
    } else {
        logo.classList.remove("fixed");
    }

//To implement, this part here would sort of open the bottom border of the 
//navbar for the header to be placed and fixed there.

    /*   var thresholdTransition = 90;

       if (scrollPosition > thresholdTransition) {
        navbar.classList.add("transition")
    } else {
        navbar.classList.remove("transition")
    }
 */

     
  });
});
