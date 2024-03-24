/* Секция с нужными элементами, чтобы быстрее искать */
const pagination = document.querySelector('.product__pagination');
/* Кнопка назад */
const paginationButtonPrev = pagination.querySelector('.pagination__prev');
/* Кнопка вперед */
const paginationButtonNext = pagination.querySelector('.pagination__next');
/* Список нумерации страниц (пункты списка) */
const paginationItems = pagination.querySelectorAll('.pagination__item');
/* Список кнопок нумерации страниц (сами цифры) */
const paginationPages = pagination.querySelectorAll('.pagination__page');
/*  */

let counter = 1;

const activeSlide = (index) => {
  // eslint-disable-next-line no-undef
  for (page of paginationPages) {
    // eslint-disable-next-line no-undef
    page.classList.remove('pagination__page--current');
  }
  paginationPages[index].classList.add('pagination__page--current');
};

const prevPaginationNumber = (evt) => {
  evt.preventDefault();
  paginationButtonNext.disabled = false;

  if (counter <= 0) {
    paginationButtonPrev.disabled = true;
    activeSlide(counter);
  } else {
    counter--;
    activeSlide(counter);
  }
};

const nextPaginationNumber = (evt) => {
  evt.preventDefault();
  paginationButtonPrev.disabled = false;

  if (counter >= paginationItems.length - 1) {
    paginationButtonNext.disabled = true;
    activeSlide(counter);
  } else {
    counter++;
    activeSlide(counter);
  }
};


paginationButtonPrev.addEventListener('click', prevPaginationNumber);
paginationButtonNext.addEventListener('click', nextPaginationNumber);

