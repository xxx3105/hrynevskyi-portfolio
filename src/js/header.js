//mechanismus control
const firtsWheel = document.getElementById('no1');
const secWheel = document.getElementById('no2');
const thirWheel = document.getElementById('no3');
const fourWheel = document.getElementById('no4');
const fivtWheel = document.getElementById('no5');
const sixWheel = document.getElementById('no6');

function mechanismusHandler() {
  firtsWheel.classList.toggle('manage-animation');
  secWheel.classList.toggle('manage-animation');
  thirWheel.classList.toggle('manage-animation');
  fourWheel.classList.toggle('manage-animation');
  fivtWheel.classList.toggle('manage-animation');
  sixWheel.classList.toggle('manage-animation');

  if (isHandlerActive) {
    bodyField.removeEventListener('mousemove', onMouseMoveHandler); // Отключаем обработчик
    setTimeout(() => {
      isHandlerActive = true; //
      bodyField.addEventListener('mousemove', onMouseMoveHandler); // Включаем обработчик
    }, 0);
    isHandlerActive = false; // Устанавливаем флаг в false, чтобы предотвратить повторное выполнение
  }
}

//////neuStartSite
function newStartMech() {
  firtsWheel.classList.toggle('manage-animation');
  secWheel.classList.toggle('manage-animation');
  thirWheel.classList.toggle('manage-animation');
  fourWheel.classList.toggle('manage-animation');
  fivtWheel.classList.toggle('manage-animation');
  sixWheel.classList.toggle('manage-animation');
}

function temporaryAnimation() {
  // Включаем анимацию
  newStartMech();

  // Отключаем анимацию через 1 секунду
  setTimeout(function () {
    newStartMech(); // Выключаем анимацию
  }, 1600); // Выключаем через 1 секунду
}

// Вызываем temporaryAnimation() для запуска анимации на 1 секунду
temporaryAnimation();

//mouseReaction

function onMouseMoveHandler(event) {
  mechanismusHandler();
}

const bodyField = document.querySelector('body');
let isHandlerActive = true;

bodyField.addEventListener('mousemove', onMouseMoveHandler);
/////////////

//// menu slider

const headerMenuButton = document.getElementById('header-hamb-button');
const headerMenuButtonKreuz = document.getElementById('header-kreuz-button');

const headerMenuWind = document.querySelector('.header-list-nav');
const headerMenuItem = document.querySelectorAll('.header-list-item');
const backdrop = document.getElementById('backdrop');

function handlerMenu() {
  headerMenuWind.classList.toggle('header-list-nav-hider');
  headerMenuWind.classList.toggle('head-item-gap');

  headerMenuButton.classList.toggle('opacity');
  headerMenuButtonKreuz.classList.toggle('hidden');

  temporaryAnimation();

  backdrop.classList.toggle('backdrop');

  headerMenuItem.forEach(item => {
    item.classList.toggle('hidden');
  });
}

headerMenuButton.addEventListener('click', handlerMenu);
headerMenuButtonKreuz.addEventListener('click', handlerMenu);
backdrop.addEventListener('click', handlerMenu);

headerMenuItem.forEach(item => {
  item.addEventListener('click', handlerMenu);
});
