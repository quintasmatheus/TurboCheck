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

  // Calculate the threshold based on viewport height
  var thresholdLogoViewport = window.innerHeight * 0.4;

  window.addEventListener("scroll", function () {
    // Get the current scroll position
    var scrollPosition = window.scrollY;

    // Check if the scroll position is beyond the calculated threshold
    if (scrollPosition > thresholdLogoViewport) {
      logo.classList.add("fixed");
    } else {
      logo.classList.remove("fixed");
    }
  });
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

////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById('contactModal');
  var contactButton = document.querySelector('.contact-button');
  var closeBtn = document.querySelector('.close-btn');

  function toggleModal() {
      modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
  }

  contactButton.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
});
