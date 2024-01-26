class Carousel {
    constructor(element, slides) {
        this.carouselElement = element;
        this.slides = slides;
        this.slidesContainer = this.carouselElement.querySelector('.slides');
        this.currentIndex = 0; 

        this.initSlides();
        this.updateSlidePosition();

        
        this.carouselElement.querySelector('.prev').addEventListener('click', () => this.movePrev());
        this.carouselElement.querySelector('.next').addEventListener('click', () => this.moveNext());
    }

    initSlides() {
        let groupedImages = '';
        for (const slideKey in this.slides) {
            if (this.slides.hasOwnProperty(slideKey)) {
                const slideImages = this.slides[slideKey];
                groupedImages += `<div class="slide${slideKey === 'slide3' ? ' third-slide' : ''}">${slideImages.map(image => `<div class="image" style="background-image: url('${image}')"></div>`).join('')}</div>`;
            }
        }
        this.slidesContainer.innerHTML = groupedImages;
   
       
        const allSlides = this.slidesContainer.querySelectorAll('.slide');
        allSlides.forEach((slide, index) => {
            if (index === 0) { 
                slide.classList.add('active');
            }
        });
    }

    updateSlidePosition() {
       
        const slides = this.slidesContainer.querySelectorAll('.slide');
       
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
       
        slides[this.currentIndex].classList.add('active');
    }

    movePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = Object.keys(this.slides).length - 1; 
        }
        this.updateSlidePosition();
    }

    moveNext() {
        if (this.currentIndex < Object.keys(this.slides).length - 1) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0; 
        }
        this.updateSlidePosition();
    }
}


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

    
    const slideInterval = setInterval(() => {
        carousel.moveNext();
    }, 3000); 

    
});
