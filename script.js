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
  const logo = document.getElementById("logo");
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar.offsetHeight;

  const drawTimeElement = document.querySelector(".drawTime")

  console.log("navbarHeight ->" ,navbarHeight)

if ( drawTimeElement ){
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    console.log("scrollPosition ->" ,scrollPosition)
    console.log("windowScrollY ->" ,window.scrollY)

    const thresholdLogo = 230;
     if (scrollPosition > thresholdLogo) {
      logo.classList.add("fixed");
    } else {
      logo.classList.remove("fixed");
    }
   
  });
}
});

////////////////////////////////////////////////////////////////

const svg = document.getElementById("svgPath");
const length = svg.getTotalLength();

svg.style.strokeDasharray = length;

svg.style.strokeDashoffset = length;

window.addEventListener("scroll", function () {
  const scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  const draw = length * scrollpercent ;

  svg.style.strokeDashoffset = length - draw;
});

