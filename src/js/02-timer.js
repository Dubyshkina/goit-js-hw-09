import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputText = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let date = new Date();
let selectedDate;

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = new Date();
    if (date.getTime() > selectedDates[0].getTime()) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      selectedDate = selectedDates[0];
      console.log(selectedDate);
    }
  },
};

flatpickr(inputText, options);

function startTimer(evt) {
  const intervalId = setInterval(() => {
    startBtn.disabled = true;
    let now = Date.now();
    let diff = selectedDate.getTime() - now;
    console.log(selectedDate.getTime());
    console.log(now);
    const { days, hours, minutes, seconds } = convertMs(diff);
    fillDate({ days, hours, minutes, seconds });
    if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

startBtn.addEventListener('click', startTimer);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function fillDate({ days, hours, minutes, seconds }) {
  daysEl.innerText = addLeadingZero(days);
  hoursEl.innerText = addLeadingZero(hours);
  minutesEl.innerText = addLeadingZero(minutes);
  secondsEl.innerText = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
