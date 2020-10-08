let likeBtn = document.querySelectorAll('.like-button')
for(let i = 0; i < likeBtn.length; i++){
  likeBtn[i].addEventListener('click', function(e){
    this.classList.toggle('like-button_active')
    // смена счётчика лайка
    if (this.classList.contains('like-button_active')) {
      this.textContent = `${Number(this.textContent) + 1}`;
    } else {
      this.textContent = `${Number(this.textContent) - 1}`;
    }
  })
}