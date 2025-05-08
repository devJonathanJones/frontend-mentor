// Global Variables
const questions = document.querySelector('.questions');
const question = document.querySelectorAll('li');

// Event listener listening for a click to display the answer of the question clicked
questions.addEventListener('click', event => {
  if (!event.target.classList.contains('question')) { return }
  
  if (event.target.parentElement.querySelector('p').style.display != 'block') {
    event.target.parentElement.querySelector('p').style.display = 'block'
    event.target.querySelector('img').src = 'assets/images/icon-minus.svg'
  } else if (event.target.parentElement.querySelector('p').style.display = 'block') {
    event.target.parentElement.querySelector('p').style.display = 'none'
    event.target.querySelector('img').src = 'assets/images/icon-plus.svg'
  }
})