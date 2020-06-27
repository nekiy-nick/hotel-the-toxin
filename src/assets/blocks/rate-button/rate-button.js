let rating = document.querySelectorAll('.rating')
let rateStar = document.querySelectorAll('.rating__star')
let mark = ['bad', 'so-so', 'passable', 'good', 'great']
// проходимся циклом по всем Ul на странице и вешаем слушателя событий по клику
for(let i = 0; i < rating.length; i++){
  rating[i].addEventListener('click', function(e){

  for(let i = 0; i < this.children.length; i++){
    rateStar[i].addEventListener('click', function(e){
      console.log(rateStar[i])
    }, true)

    let target = e.target
    target.innerHTML = 'grade'

    console.log(target.parentElement.getAttribute('data-rating'))
    console.log(this.children.length)
    
    
 
}









    // for(let k = 0; k < this.children.length; k++){
    //   // вешаем слушателя событий по клику на данный элемент
    //   rateStar[k].addEventListener('click', function(e){
    //     // если звезда уже была кликнута, удалять её метку=value
    //     if(this.parentElement.getAttribute('value')){
    //       for(let l = 0; l < rateStar.length; l++){
    //         // проверка - поставить оценку ниже, чем уже стоит
    //         if(e.target.parentElement < rateStar[l]){
    //         } else {
    //           rateStar[l].innerHTML = 'star_border'
    //           this.parentElement.removeAttribute('value')
    //         }
    //       }
    //     } else {
    //       for(let j = 0; j < this.children.length; j++){
    //         target.innerHTML = 'grade'
    //         this.children.setAttribute('value', `${mark[j]}`)
    //       }
    //     }
    //   })
    // }
  })
}
// Проходимся циклом по коллекции звёзд-рейтинга

//Внутри цикла проверки класса-метки
// console.log(this.parentElement.getAttribute('data-rating'))

// console.log(rateStar[k])
// rateStar[k].innerHTML = 'star_border'
// rateStar[k].classList.delete('raiting__star_active')
// console.log(rateStar[k])
// console.log(rateStar[i].parentElement.getAttribute('data-rating'))

// for(let j = 0; j < rateStar[k].parentElement.getAttribute('data-rating'); j++){
//   rateStar[k].classList.delete('raiting__star_active')
// }


 // for(let k = (this.parentElement.getAttribute('data-rating')-1); k >= 0; k--){
      //   // console.log(this.parentElement.getAttribute('data-rating')-1)
      //   rateStar[k].innerHTML = 'star_border'
      //   console.log(rateStar[k])
      //   // rateStar[k].classList.delete('raiting__star_active')
      // }