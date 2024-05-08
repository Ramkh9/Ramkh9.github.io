let slideIndex = 0;
// JavaScript code to handle slide navigation and dot highlighting
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function moveSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const slideWidth = slides[0].offsetWidth;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
	highlightDot(slideIndex); // Highlight the dot corresponding to the new slide

}


// Function to highlight the current dot
function highlightDot(index) {
    // Remove active class from all dots
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    // Add active class to the selected dot
    dots[index].classList.add('active');
}
