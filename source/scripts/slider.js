const sliderCards = document.querySelectorAll('.promo__item');
const stepButtons = document.querySelectorAll('.dot__btn');
const prevButton = document.querySelector('.promo__button-prev');
const nextButton = document.querySelector('.promo__button-next');

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

  const backgrounds = ['#F3EBE1', '#EAE6FC', '#E2E2E2'];
  const currentBackground = backgrounds[index];
  document.querySelector('.promo').style.backgroundColor = currentBackground;

  updateUI(index, currentBackground);
}

function updateStepButtons(index) {
  stepButtons.forEach((button, i) => {
    button.classList.toggle('dot__btn--active', i === index);
  });

  // Блокируем кнопку предыдущего слайда, если текущий слайд - первый
  prevButton.disabled = index === 0;

  // Блокируем кнопку следующего слайда, если текущий слайд - последний
  nextButton.disabled = index === sliderCards.length - 1;
}

function updateUI(index, backgroundColor) {
  updateStepButtons(index);
  prevButton.style.backgroundColor = backgroundColor;
  nextButton.style.backgroundColor = backgroundColor;

  if (window.innerWidth >= 768 && window.innerWidth <= 1339) {
    const gradientColor1 = ['#F3EBE1', '#EAE6FC', '#E2E2E2'];
    const gradientColor2 = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
    document.querySelector('.promo').style.background = `linear-gradient(180deg, ${gradientColor1[index]} 0%, ${gradientColor1[index]} 72%, ${gradientColor2[index]} 72%, ${gradientColor2[index]})`;
  } else {
    document.querySelector('.promo').style.background = backgroundColor;
  }
}

showSlide(currentIndex);

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + sliderCards.length) % sliderCards.length;
  showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % sliderCards.length;
  showSlide(currentIndex);
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
