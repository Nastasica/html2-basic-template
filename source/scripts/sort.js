const sort = document.querySelector('.sort');
const sortTypeButton = sort.querySelector('.sort__type');
const sortList = sort.querySelector('.sort__list');
const sortLinks = sortList.querySelectorAll('.sort__link');

sortTypeButton.addEventListener('click', () => {
  sortList.classList.toggle('show-sort-list');
  sortTypeButton.classList.toggle('show-sort-list');
});

sortList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const sortChoosenType = evt.target;

  sortLinks.forEach((link) => {
    link.classList.remove('sort__link--current');
  });

  sortChoosenType.classList.add('sort__link--current');
  sortList.classList.remove('show-sort-list');
  sortTypeButton.classList.remove('show-sort-list');
  sortTypeButton.textContent = sortChoosenType.textContent;
});
