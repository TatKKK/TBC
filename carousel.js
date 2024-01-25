class Carousel {
    constructor(element, slides) {
        this.carouselElement = element;
        this.slides = slides;
        this.slidesContainer = this.carouselElement.querySelector('.slides');
        this.currentIndex = 0; // Initialize the index to 0

        this.initSlides();
        this.updateSlidePosition(); // Set the initial position

        // Bind event listeners
        this.carouselElement.querySelector('.prev').addEventListener('click', () => this.movePrev());
        this.carouselElement.querySelector('.next').addEventListener('click', () => this.moveNext());
    }

    initSlides() {
        let groupedImages = '';
        for (const slideKey in this.slides) {
            if (this.slides.hasOwnProperty(slideKey)) {
                const slideImages = this.slides[slideKey];
                groupedImages += `<div class="slide">${slideImages.map(image => `<div class="image" style="background-image: url('${image}')"></div>`).join('')}</div>`;
            }
        }
        this.slidesContainer.innerHTML = groupedImages;
        // Initial setup for slides: set the first slide to be visible
        const allSlides = this.slidesContainer.querySelectorAll('.slide');
        allSlides.forEach((slide, index) => {
            if (index === 0) { // Make the first slide active
                slide.classList.add('active');
            }
        });
    }

    updateSlidePosition() {
        // Get all the slide elements
        const slides = this.slidesContainer.querySelectorAll('.slide');
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        // Show the current slide
        slides[this.currentIndex].classList.add('active');
    }

    movePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = Object.keys(this.slides).length - 1; // Go to the last slide
        }
        this.updateSlidePosition();
    }

    moveNext() {
        if (this.currentIndex < Object.keys(this.slides).length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; // Loop back to the start
        }
        this.updateSlidePosition();
    }
}

// Slides object
const slides = {
    slide1: [
        'assets/USAID.webp',
        'assets/White horiz.webp',
        'assets/tbcliz.webp'
    ],
    slide2: [
        'assets/Tegeta.webp',
        'assets/Spectre.webp',
        'assets/tnet.webp'
    ],
    slide3: [
        'assets/UFC.webp'
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const carousel = new Carousel(document.querySelector('#carousel'), slides);
    console.log('DOM is loaded');

    // Set the interval for automatic movement
    const slideInterval = setInterval(() => {
        carousel.moveNext();
    }, 3000); 

    // Optional: To stop the automatic movement, you can call clearInterval(slideInterval);
});
