'use strict';

let expandableCheckboxList = document.querySelectorAll('.js-expandable-checkbox-list');

expandableCheckboxList.forEach(item => item.addEventListener('click', e => {

  const checkboxList = {
    allCheckboxList : expandableCheckboxList,
    body : item.querySelector('.js-expandable-checkbox-list__body'),
    head: item.querySelector('.js-expandable-checkbox-list__head'),
    btn : item.querySelector('.js-expandable-checkbox-list__button'),
    open() {
      item.setAttribute('data-open', true);
      this.body.classList.remove('expandable-checkbox-list__body_hidden');
      this.upArrow();
    },
    close() {
      item.removeAttribute('data-open');
      this.body.classList.add('expandable-checkbox-list__body_hidden');
      this.downArrow();
    },
    toggle() {
      // можно сделать тернарный наверно
      if (this.isOpen(item)) {
        this.close();
      } else this.open();
    },
    isOpen(list) {
      if (list.getAttribute('data-open')) return true;
    },
    closeOtherCheckboxList() {
      for (let list of this.allCheckboxList) {
        if (this.isOpen(list)) {
          // нужно закрыть
          // console.log(this.body)
          // this.close()
          console.log(list);
          // this.close(list)
          // return true
          list.querySelector('.js-expandable-checkbox-list__body').classList.add('expandable-checkbox-list__body_hidden');
          list.removeAttribute('data-open');
        }
        // console.log(list);
      }
    },
    upArrow() {
      this.btn.classList.add('expandable-checkbox-list__button_to-top');
    },
    downArrow() {
      this.btn.classList.remove('expandable-checkbox-list__button_to-top');
    }
  };
  
  checkboxList.closeOtherCheckboxList();
  if (e.target == checkboxList.head || e.target == checkboxList.btn) {
    checkboxList.toggle();
  }
  
  // функция открытия и закрытия блока
  // function closeCheckboxList(list) {
  //   list.classList.add('expandable-checkbox-list__body_hidden');
  //   item.removeAttribute('data-checkboxList');
  //   downArrow(btn)
  // }

  // function openCheckboxList(list) {
  //   list.classList.remove('expandable-checkbox-list__body_hidden')
  //   item.setAttribute('data-checkboxList', 'dropped');
  //   upArrow(btn)
  // }

  // function toogleDropdownList(element) {
  //   let itemBody = element.querySelector('.js-expandable-checkbox-list__body')
  //   if (itemBody.classList.contains('expandable-checkbox-list__body_hidden')) {
  //     openCheckboxList(itemBody)
  //   } else {
  //     closeCheckboxList(itemBody)
  //   }
  // }

  // function upArrow(btn) {
  //   btn.classList.add('expandable-checkbox-list__button_to-top')
  // }

  // function downArrow(btn){
  //   btn.classList.remove('expandable-checkbox-list__button_to-top')
  // }
}))