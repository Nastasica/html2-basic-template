// Получаем необходимые элементы слайдера
const sliderCards = document.querySelectorAll('.slider__card');
const stepButtons = document.querySelectorAll('.step__button');
const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');

let currentIndex = 0;
function showSlide(index) {

  sliderCards.forEach((card) => {
    card.style.display = 'none';
  });

  if (window.innerWidth <= 767) {

    sliderCards[index].style.display = 'block';
  } else {
    sliderCards[index].style.display = 'flex';
  }

  const backgrounds = ['#F3EBE1', '#EAE6FC', '#E2E2E2', ];
  const currentBackground = backgrounds[index];
  document.querySelector('.slider').style.backgroundColor = currentBackground;

  updateUI(index, currentBackground);
}

function updateStepButtons(index) {
  stepButtons.forEach((button, i) => {
    button.classList.toggle('active', i === index);
  });
}

function updateUI(index, backgroundColor) {
  updateStepButtons(index);
  stepButtons.forEach((button, i) => {
    button.style.backgroundColor = i === index ? 'rgba(120, 89, 207, 1)' : '';
  });
  document.querySelector('.slider-button-prev').style.backgroundColor = backgroundColor;
  document.querySelector('.slider-button-next').style.backgroundColor = backgroundColor;
  prevButton.disabled = index === 0;
  nextButton.disabled = index === sliderCards.length - 1;
}

showSlide(currentIndex);

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < sliderCards.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});

stepButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

window.addEventListener('resize', () => {
  showSlide(currentIndex);
});
