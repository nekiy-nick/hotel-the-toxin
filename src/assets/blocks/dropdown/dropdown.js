'use strict';

let dropdown = document.querySelectorAll('.js-dropdown');

// функция закрывающая дропдаун, когда клик произошёл вне его области
function closeDropdown(elem, classElement, dataAttribute) {
  let observeElement = document.querySelectorAll(`[${dataAttribute}]`)
  // проверка что какой либо элемент открыт
  if (observeElement.length) {

    function isOpened() {
      for (let i = 0; i < elem.classList.length; i++) {
        // проверка что класс содержит переданную подстроку (переделать - не гибкое решение, но работает)
        // может сломаться если в списке классов первым классом не найдётся данная подстрока (как пример, другие подключаемые компоненты)
        if (elem.classList[i].includes(classElement) || elem.parentNode.classList[0].includes(classElement)) return
        else {
          closeElement();
        }
      }
    }

    isOpened();
    // проверка ухода фокуса с открытого дропдауна и его закрытие при этом моменте
    // elem.addEventListener('focusin', e => {

    // })

    function closeElement() {
      observeElement[0].lastChild.classList.add('dropdown__body_hidden');
      observeElement[0].removeAttribute(dataAttribute);
      observeElement[0].querySelector('.js-dropdown__button').innerText = 'expand_more';
    }
  }
}

document.body.addEventListener('click', e =>{
  closeDropdown(e.target, 'dropdown', 'data-dropdown')
})

dropdown.forEach(item => item.addEventListener('click', e => {
  if (!e.target.classList.contains('js-dropdown__head') && !e.target.classList.contains('js-dropdown__button')) return;
  // Elements UI
  let dropdownHeader = item.querySelector('.js-dropdown__head');
  let dropdownHeaderText = item.querySelector('.js-dropdown__header');
  let dropBtn = item.querySelector('.js-dropdown__button');
  let dropdownItem = item.querySelectorAll('.js-dropdown__item');
  let dropdownCancelBtn = item.querySelector('.js-dropdown-cancelBtn');
  let dropdownBody = item.querySelector('.js-dropdown__body');
  let dropdownBtnWrapper = item.querySelector('.js-dropdown__buttons-wrapper');
  let dropdownTotalCounter = item.querySelectorAll('.js-dropdown-item__count');

  // Events
  isMode()
  // открытие и закрытие дропдауна
  if (isDropped(item)) {
    closeDropdown(item);
  } else {
    // здесь надо закрывать другие открытые дропдауны?
    for (let i = 0; i < dropdown.length; i++) {
      if (isDropped(dropdown[i])) {
        closeDropdown(dropdown[i]);
      }
    }
    openDropdown(item);
  }
  
  function isDropped(elem) {
    if (elem.hasAttribute('data-dropdown')) {
      return true
    }
  }

  function openDropdown(elem) {
    elem.setAttribute('data-dropdown', 'dropped');
    let body = elem.querySelector('.js-dropdown__body');
    body.classList.remove('dropdown__body_hidden');
    arrowDrop(elem);
  }
  
  function closeDropdown(elem) {
    elem.removeAttribute('data-dropdown');
    let body = elem.querySelector('.js-dropdown__body');
    body.classList.add('dropdown__body_hidden');
    arrowDrop(elem);
  }
  // изменение внешнего вида стрелки-открывашки
  // можно переделать на тернарный оператор
  function arrowDrop(elem) {
    let btn = elem.querySelector('.js-dropdown__button');
    if (isDropped(elem)) {
      btn.innerText = 'expand_less';
    } else {
      btn.innerText = 'expand_more';
    }
  }

  // проверка на модификатор
  function isMode() {
    if (dropdownHeader.classList.contains('js-dropdown__head_filter-date-dropdown') || dropdownHeader.classList.contains('js-dropdown__head_input-date')) return
  }

  dropdownBody.addEventListener('click', e => {
    // Elements UI
    const cancelBtn = dropdownBody.querySelector('.js-dropdown-cancelBtn');
    const successBtn = dropdownBody.querySelector('.js-dropdown-successBtn');

    const dropdownText = {
      defaultHeader : dropdownHeaderText.innerText,
      header : dropdownHeaderText.innerText,
      items : dropdownItem.innerText
    }
  
    // Events
    // вызов функции при клике на кнопку "Отменить"
    resetItemsState();
    
    const countAllItems = function() {
      let result = 0;
      for (let i = 0; i < dropdownTotalCounter.length; i++) {
        result += Number(dropdownTotalCounter[i].innerText);
      }
      return result;
    }();

    getAllItems();

    isMode();

    // if (!dropdownBtnWrapper) return

    function resetItemsState() {

      // очистка показателей счётчиков и убирание кнопки ОТМЕНИТЬ
      if (!dropdownBtnWrapper) return
      else {
        dropdownCancelBtn.addEventListener('click', e => {
          for(let i = 0; i < dropdownTotalCounter.length; i++) {
            dropdownTotalCounter[i].innerText = 0;
          }
          hiddenBtn(cancelBtn);
        })
      }
    }
  
   // Проверка нулевых значений в item и показ кнопки отменить
    function getAllItems() {
      console.log(dropdownText)
      if (countAllItems == 0) {
        dropdownHeaderText.innerText = 'Сколько гостей';
        if (dropdownBtnWrapper) {
          hiddenBtn(cancelBtn);
        }
      } else if (countAllItems % 10 == 1 && countAllItems !== 11) {
        dropdownHeaderText.innerText = `${countAllItems} гость`;
      } else if (countAllItems > 1 && countAllItems < 5) {
        dropdownHeaderText.innerText = `${countAllItems} гостя`
      } else {
        dropdownHeaderText.innerText = `${countAllItems} гостей`
      }
    }

    if (countAllItems && cancelBtn.hasAttribute('disabled') ) {
      visibleBtn(cancelBtn);
    }

    function visibleBtn(btn) {
      btn.removeAttribute('disabled');
    }

    function hiddenBtn(btn) {
      btn.setAttribute('disabled', 'disabled')
    }

    // закрыть дропдаун по клику на кнопку "Применить"
    successBtn.addEventListener('click', e => {
      closeDropdown(item);
    })
    
  })

  dropdownItem.forEach(dropdownItem => dropdownItem.addEventListener('click', e => {
    let minusBtn = dropdownItem.querySelector('.js-dropdown-item__minus-btn');
    let plusBtn = dropdownItem.querySelector('.js-dropdown-item__plus-btn');
    let countInt = dropdownItem.querySelector('.js-dropdown-item__count');

    if (e.target == minusBtn) {
      minus();
      checkCountInt();
    } else if (e.target == plusBtn) {
      plus();
      checkCountInt();
    }

    function checkCountInt() {
      // если проверка числа на совпадение с нулём вернёт тру, нужно заблокировать кнопку минус
      if (countInt.innerHTML <= '0') {
        minusBtn.setAttribute('disabled', 'disabled');
      } else if (minusBtn.getAttribute('disabled')) {
        minusBtn.removeAttribute('disabled');
      } else return;
    }
    
    function minus() {
      countInt.innerHTML = `${Number(countInt.innerHTML) - 1}`;
    }
  
    function plus() {
      countInt.innerHTML = `${Number(countInt.innerHTML) + 1}`;
    }
  }));
}));