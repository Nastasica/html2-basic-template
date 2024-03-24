/* Блок с сортировкой для удобства поиска */
const sort = document.querySelector('.sort');
/* Кнопка открытия списка сортировки */
const sortTypeButton = sort.querySelector('.sort__type');
/* Список вариантов сортировки товара */
const sortList = sort.querySelector('.sort__list');
/* Все виды сортировки */
const sortLinks = sortList.querySelectorAll('.sort__link');


/* Открываем.закрываем список сортровки */
sortTypeButton.addEventListener('click', () => {
  sortList.classList.toggle('show-sort-list');
  sortTypeButton.classList.toggle('show-sort-list');
});

/* Меняем выбранный вид сортировки */
sortList.addEventListener('click', (evt) => {
  evt.preventDefault();
  const sortChoosenType = evt.target;

  sortLinks.forEach((link) => {
    link.classList.remove('sort__link--current');
  })

  sortChoosenType.classList.add('sort__link--current');
  sortList.classList.remove('show-sort-list');
  sortTypeButton.classList.remove('show-sort-list');
  sortTypeButton.textContent = sortChoosenType.textContent;
})
