setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
  // Add sound effect
  var clickSound = new Audio();
  clickSound.src = 'Mouse-Click.mp3';
  clickSound.play();
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

function init() {
  var date = new Date();
  var options = { day: 'numeric', month: 'long', year: 'numeric' };
  document.querySelector('#date').innerHTML = date.toLocaleString('en-US', options);
}
window.onload = init;

setClock();
