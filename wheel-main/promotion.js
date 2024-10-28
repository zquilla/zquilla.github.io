let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length=5;
function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    const newTransform = `translateX(-${currentIndex * 100}%)`;
    slidesContainer.style.transform = newTransform;
}

setInterval(showNextSlide, 2000);


const slider2 = document.querySelector('.slider2');
const prevButton2 = document.querySelector('.prev-btn2');
const nextButton2 = document.querySelector('.next-btn2');


let curentindex = 0;
prevButton2.addEventListener('click', () => {
    if (curentindex > 0) {
        curentindex--;
        updateSliderPosition();
    }
});

nextButton2.addEventListener('click', () => {
    if (curentindex < slider2.children.length - 1) {
        curentindex++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    slider2.style.transform = `translateX(-${curentindex * 100}%)`;
}



