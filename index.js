var readlineSync = require('readline-sync');
let userName = readlineSync.question(`What's your name?`)
console.log('Welcome ' + userName + '. How well do you know Aparnabharati ?' + ` Let's take a quiz, shall we ?`)

let counter = 0

let quiz = (question, answer) => {
  let userAnswer = readlineSync.question(question)

  if (userAnswer === answer) {
    console.log('Correct!')
    counter++

  } else {
    console.log('Oops, Wrong Answer *.*')
  }

  console.log('Current Score : ', counter)
  console.log('----------------')


}


let array = [{
  question: 'Where do i live ?',
  answer: 'mumbai'
}, {
  question: `What's the name of the game i play the most ?`,
  answer: 'chess'
}, {
  question: `which is my favorite dessert?`,
  answer: 'kala jamun'
}, {
  question: `The month name of my birthday is ?`,
  answer: 'january'
}, {
  question: `What do i aspire to become ?`,
  answer: 'full stack web developer'
}]

array.forEach((value) => {
  quiz(value.question, value.answer)

})