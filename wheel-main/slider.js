// SLIDER SECOND CONTAINER
$(document).ready(function(){
    const $slider = $('.slider');
    const $cards = $('.card');
    const $prevButton = $('.prev');
    const $nextButton = $('.next');
    
    let currentIndex = 0;
    const cardWidth = $cards.outerWidth(true); 
    const visibleCards = 1; 

    $prevButton.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    $nextButton.on('click', function() {
        if (currentIndex < $cards.length - visibleCards) {
            currentIndex++;
            updateSlider();
        }

    
    });

    $nextButton.on('click', function() {
        if (currentIndex == 3) {
            currentIndex--;
            updateSlider();
        }

    
    });

    function updateSlider() {
        const offset = -currentIndex * cardWidth;
        $slider.css('transform', `translateX(${offset}px)`);
    }
});
// SLIDER THIRD CONTAINER
const slider2 = document.querySelector('.slider2');
const prevButton2 = document.querySelector('.prev-btn2');
const nextButton2 = document.querySelector('.next-btn2');
let currentIndex = 0;

prevButton2.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

nextButton2.addEventListener('click', () => {
    if (currentIndex < slider2.children.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});

function updateSliderPosition() {
    slider2.style.transform = `translateX(-${currentIndex * 100}%)`;
}


