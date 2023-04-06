const questions = document.querySelectorAll('.questions')
const answer = document.querySelectorAll('.answer')

questions.forEach((question)=>{
    question.addEventListener('click',showAnswer)
})
function showAnswer(){
let ans = document.querySelector(`#${this.id}-ans`)
 ans.classList.toggle('show')


}