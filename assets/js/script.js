const modalEmail = document.getElementById('modal-email');

function showModal(modal) {
  document.getElementById(modal).classList.toggle('show');
}

document.addEventListener('submit', (e) => {
  e.preventDefault();
});

document.addEventListener('input', (e) => {
  const el = e.target;
  if (el.value.length > 0) el.classList.add('up');
  else el.classList.remove('up');
});

const title = document.getElementById("title");
const duration = document.querySelectorAll('.duration');
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const rocketseatDate = new Date("Jul 10, 2022 00:00").getTime();

function changeTimer(daysNew, hoursNew, minutesNew, secondsNew) {
  days.innerHTML = daysNew;
  hours.innerHTML = hoursNew;
  minutes.innerHTML = minutesNew;
  seconds.innerHTML = secondsNew;
}

function zeroLeft(num) {
  return num < 10 ? num = `0${num}` : num;
}

function startTimer(date) {
  const now = new Date().getTime();
  const dateDuration = date - now;

  if (dateDuration < 0) return title.innerText = 'The timer is gone';
  title.innerText = 'Ready to launch in...';

  let daysNew = zeroLeft(Math.floor(dateDuration / (1000 * 60 * 60 * 24)));
  let hoursNew = zeroLeft(Math.floor((dateDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  let minutesNew = zeroLeft(Math.floor((dateDuration % (1000 * 60 * 60)) / (1000 * 60)));
  let secondsNew = zeroLeft(Math.floor((dateDuration % (1000 * 60)) / 1000));

  return changeTimer((daysNew), (hoursNew), (minutesNew), (secondsNew));
}


const timerRocketseat = setInterval(() => {
  startTimer(rocketseatDate);
}, 1000);

const formTimer = document.getElementById('form-timer');
const inputMonth = document.getElementById("input-month");
const inputDay = document.getElementById("input-day");
const inputHours = document.getElementById("input-hours");
const inputMinutes = document.getElementById("input-minutes");

function getMonthName(monthNumber) {
  if (monthNumber == 1) return monthNumber = 'Jan';
  else if (monthNumber == 2) return monthNumber = 'Feb';
  else if (monthNumber == 3) return monthNumber = 'Mar';
  else if (monthNumber == 4) return monthNumber = 'Apr';
  else if (monthNumber == 5) return monthNumber = 'May';
  else if (monthNumber == 6) return monthNumber = 'Jan';
  else if (monthNumber == 7) return monthNumber = 'Jal';
  else if (monthNumber == 8) return monthNumber = 'Aug';
  else if (monthNumber == 9) return monthNumber = 'Sep';
  else if (monthNumber == 10) return monthNumber = 'Oct';
  else if (monthNumber == 11) return monthNumber = 'Nov';
  else return monthNumber = 'Dec';
}

function userDate() {
  const date = new Date();
  const year = date.getFullYear();
  const nDate = `${getMonthName(inputMonth.value)} ${zeroLeft(inputDay.value)}, ${year} ${zeroLeft(inputHours.value)}:${zeroLeft(inputMinutes.value)}`;
  return new Date(nDate).getTime();
}

formTimer.addEventListener('submit', () => {
  clearInterval(timerRocketseat);
  setInterval(() => {
    startTimer(userDate());
  }, 1000);
  showModal('modal-timer');
});
