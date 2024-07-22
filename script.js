document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;

    // JavaScript code to handle slide navigation and dot highlighting
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    function moveSlide(n) {
        console.log('moveSlide called with n:', n); // Logging
        slideIndex += n;
        if (slideIndex > slides.length - 1) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        const slideWidth = slides[0].offsetWidth;
        document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;

        console.log('Current slideIndex:', slideIndex); // Log the current slideIndex
        updateDots();
    }

    function updateDots() {
        console.log('updateDots called, slideIndex:', slideIndex); // Logging
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                console.log('Activating dot at index:', index); // Log the index of the dot being activated
            } else {
                console.log('Deactivating dot at index:', index); // Log the index of the dot being deactivated
            }
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    // Initialize the first dot as active
    updateDots();

    // Add event listeners for navigation buttons
    document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
    document.querySelector('.next').addEventListener('click', () => moveSlide(1));
});
