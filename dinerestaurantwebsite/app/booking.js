const arttir = document.querySelector('.arttir');
const azalt = document.querySelector('.azalt');
const peopleText = document.querySelector('.peopleText');

var people = 0

arttir.addEventListener('click', function () {
    if(people < 10){
      people++ 
      peopleText.innerHTML = people+" People"
    }
})

azalt.addEventListener('click', function () {
  if(people > 0){
    people-- 
    peopleText.innerHTML = people+" People"
  }
})

const nameInput = document.querySelector('input[id="name"]');
const emailInput = document.querySelector('input[id="email"]');
const dateInput = document.querySelector('input[id="date"]');
const dateTimeInput = document.querySelector('input[id="datetime"]');



nameInput.addEventListener('change', function(){
  console.log(nameInput.value)
})
emailInput.addEventListener('change', function(){
  console.log(emailInput.value)
})
dateInput.addEventListener('change', function(){
  console.log(dateInput.value)
})
dateTimeInput.addEventListener('change', function(){
  console.log(dateTimeInput.value)
})


const submitButton = document.querySelector('button[type="submit"]')
    submitButton.addEventListener('click',function(e){
      
      if(nameInput.value == ""){
        document.querySelector('.error-name').style.display = 'block'
        e.preventDefault()
      }
      if(emailInput.value == ""){
        document.querySelector('.error-email').style.display = 'block'
        e.preventDefault()
      }
      if(dateInput.value == ""){
        document.querySelector('.error-date').style.display = 'block'
        e.preventDefault()
      }
      if(dateTimeInput.value == ""){
        document.querySelector('.error-date-time').style.display = 'block'
        e.preventDefault()
      }
})