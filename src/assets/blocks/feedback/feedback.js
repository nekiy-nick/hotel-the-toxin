let dateComment = document.querySelectorAll('.feedback__date-comment')

for(let i = 0; i < dateComment.length; i++){
  let date = Number(dateComment[i].innerHTML)
  // проверка даты на месяцы и год (немного не точно т.к. за месяц взял 30 дней)
  if(date > 30){
    let month = Math.floor(date / 30)
    if(month >= 12) {
      dateComment[i].innerHTML = `более года назад`
    } else if(month == 1){
      dateComment[i].innerHTML = `${month} месяц назад`
    } else if(month > 1 && month < 5) {
      dateComment[i].innerHTML = `${month} месяца назад`
    } else {
      dateComment[i].innerHTML = `${month} месяцев назад`
    }
  // проверка на склонения слова день в зависимости от даты
  } else {
    if(date % 10 - 1 == 0 && date != 11){
      dateComment[i].innerHTML = `${date} день назад`
    } else if((date % 10 == 2 || date % 10 == 3 || date % 10 == 4) && (date != 12 && date != 13 && date != 14)){
      dateComment[i].innerHTML = `${date} дня назад`
    } else {
      dateComment[i].innerHTML = `${date} дней назад`
    }
  }  
}