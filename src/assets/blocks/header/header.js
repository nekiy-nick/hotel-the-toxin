'use strict';

const dropdownNavLinkList = document.querySelectorAll('.js-nav-list__item_list');
const dropdownMobileNavLinkList = document.querySelectorAll('.js-mobile-list__item_list');
const burgerMenu = document.querySelector('.js-header__mobile-menu-container');
const menuButton = burgerMenu.querySelector('.js-mobile-menu__toggle-button');
const mobileMenu = document.querySelector('.js-header__mobile-nav');

// открытие мобильного меню
burgerMenu.addEventListener('click', e => {
  menuButton.classList.toggle('mobile-menu__toggle-button_cross');
  mobileMenu.classList.toggle('header__mobile-nav_visible');
});

dropdownMobileNavLinkList.forEach(item => item.addEventListener('click', e => {
  const toggleMenu = item.querySelector('.js-mobile-list__inner-list');
  toggleMenu.classList.toggle('mobile-list__inner-list_hidden');
}));

// Закрытие выпавших подменю, при клике вне их родителя
const closeSubmenu = (elem) => {
  const submenu = document.querySelectorAll('[data-dropped]');

  const closeElement = () => {
    const btn = submenu[0].querySelector('.js-nav-list__arrow-btn');
    const submenuBody = submenu[0].querySelector('.js-nav-list__inner-list');
    submenuBody.classList.add('nav-list__inner-list_hidden');
    submenu[0].removeAttribute('data-dropped');
    btn.classList.remove('nav-list__arrow-btn_up');
  }

  if (submenu.length) {
    if (elem.classList.length && elem.classList[0].indexOf('nav-list') == -1) {
      closeElement();
    } else return;    
  }
};

document.addEventListener('click', e => {
  closeSubmenu(e.target);
});

// Основной скрипт для выпадающего меню
dropdownNavLinkList.forEach(item => item.addEventListener('click', e => {  
  const mainLink = item;
  const innerList = mainLink.querySelector('.js-nav-list__inner-list');
  const span = item.querySelector('.js-nav-list__inner-link');
  const btn = mainLink.querySelector('.js-nav-list__arrow-btn');

  const openList = () => {
    innerList.classList.remove('nav-list__inner-list_hidden');
    mainLink.setAttribute('data-dropped', 'true');
    upArrow();
  };
  
  const closeList = () => {
    innerList.classList.add('nav-list__inner-list_hidden');
    mainLink.removeAttribute('data-dropped');
    downArrow();
  };

  const upArrow = () => {
    btn.classList.add('nav-list__arrow-btn_up');
  };

  const downArrow = () => {
    btn.classList.remove('nav-list__arrow-btn_up');
  };
  // Здесь проверка на открывшиеся меню
  const openMenu = () => {
    if (!dropdownNavLinkList.length) return;
    for (let i = 0; i < dropdownNavLinkList.length; i += 1) {
      if (dropdownNavLinkList[i].hasAttribute('data-dropped')) return dropdownNavLinkList[i];
    }
  };
  // Здесь закрытие открытых меню если они есть
  const closeOtherList = () => {
    const mainOpenMenu = openMenu();
    
    if (mainOpenMenu ) {
      console.log(e.target)
      const mainBody = mainOpenMenu.querySelector('.js-nav-list__inner-list');
      const btnMenu = mainOpenMenu.querySelector('.js-nav-list__arrow-btn');
      mainOpenMenu.removeAttribute('data-dropped');
      mainBody.classList.add('nav-list__inner-list_hidden');
      btnMenu.classList.remove('nav-list__arrow-btn_up');
    }  
  };
  
  // Здесь вызов функций
  // закрытие открытых подменю
  const toggleList = () => {
    if (mainLink.hasAttribute('data-dropped')) {
      closeList();
    } else {
      closeOtherList();
      openList();
    }
  };  

  // проверки клика вне области открытого листа или ссылки родителя
  if (e.target === btn || e.target === span) {
    toggleList();
  } else return;
}));