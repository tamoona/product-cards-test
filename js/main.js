'use strict';
var cartCounter = 0;

var toggleCard = function (cardEl, btnEl, state) {
  cardEl.classList.toggle('card--selected');
  btnEl.textContent = state ? 'Добавить' : 'Удалить из заявки';
};

var setCartCounter = function (count) {
  var cartCounter = document.querySelector('.cart__counter');
  cartCounter.textContent = count;
};

var onCardToggle = function (e) {
  e.preventDefault();
  var cardEl = e.target.closest('.card');
  var isActive = cardEl.classList.contains('card--selected');
  if (isActive) {
    cartCounter -= 1;
  } else {
    cartCounter += 1;
  }
  toggleCard(cardEl, e.target, isActive);
  setCartCounter(cartCounter);
};

document.querySelectorAll('.card__button').forEach(function (btnEl) {
  btnEl.addEventListener('click', onCardToggle);
});

setCartCounter(cartCounter);
