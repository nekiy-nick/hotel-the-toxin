let expandableCheckboxList = document.querySelectorAll('.expandable-checkbox-list')
let expandableCheckboxListDropArrow = document.querySelectorAll('.expandable-checkbox-list__drop-arrow')

for(let i = 0; i < expandableCheckboxList.length; i++){
  expandableCheckboxListDropArrow[i].addEventListener('click', function(e){
    if(this.firstChild.innerHTML == 'expand_more'){
      this.firstChild.innerHTML = 'expand_less'
    } else {
      this.firstChild.innerHTML = 'expand_more'
    }
    this.parentElement.nextSibling.classList.toggle('expandable-checkbox-list__body_visible')
  })
}