num = document.getElementById('num')
chance = document.getElementsByClassName('chances')
chances = -1
const box = document.querySelectorAll('.box');
const randomNumber = Math.floor(Math.random() * 60) + 1;
num.innerHTML = "X"
box.forEach(function(box) {
  box.addEventListener('click', function(event) {
    const classNames = parseInt(event.target.innerHTML);
    if (chances >= 3) {
      num.innerHTML = randomNumber
      setTimeout(() => {
        location.reload();
      }, 2500);
    }
    if (classNames < randomNumber) {
      event.target.innerHTML = "less"
      chances += 1
      chance[chances].style.background = 'red'
    }
    else if (classNames > randomNumber) {
      event.target.innerHTML = "more"
      chances += 1
      chance[chances].style.background = 'red'
    }
    else if (classNames == randomNumber) {
      event.target.innerHTML = "found !"
      chances = 4
    }
  });
});