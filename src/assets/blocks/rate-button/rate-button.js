let rating = document.querySelectorAll('.rating')

rating.forEach(item => { 
  item.addEventListener('click', e => {
    if(!e.target.matches('i')) return
    // if(e.target.tagName !== 'I') return
    for(let i = 0; i < item.children.length; i++){
      item.children[i].children[0].innerHTML = 'star_border'
    }
    for(let i = 0; i < e.target.parentElement.getAttribute('data-rating'); i++){
      item.children[i].children[0].innerHTML = 'grade'
    }
  })
})