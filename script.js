let prevScrollPos = window.screenY;

window.onscroll = function() {
    let currentScrollPos = window.screenY;

    if (prevScrollPos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0";
    } else {
        document.querySelector(".navbar").style.top = "-80px"; // Adjust this value based on your header height
    }

    prevScrollPos = currentScrollPos;
};
