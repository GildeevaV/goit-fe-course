"use strict";

const daysTime = document.querySelector('[data-value="days"]');
const hoursTime = document.querySelector('[data-value="hours"]');
const minsTime = document.querySelector('[data-value="mins"]');
const secsTime = document.querySelector('[data-value="secs"]');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}
const countDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2020'),
});

setInterval(() => {
  const currentDate = new Date();
  const time = countDown.targetDate.getTime() - currentDate.getTime();

  // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

  /*
   * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
   * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
   */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  daysTime.innerHTML = days;
  /*
   * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
   * остатка % и делим его на количество миллисекунд в одном часе
   * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
   */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hoursTime.innerHTML = hours;

  /*
   * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
   * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
   */
  const smin = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  minsTime.innerHTML = smin;
  /*
   * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
   * миллисекунд в одной секунде (1000)
   */
  const secs = Math.floor((time % (1000 * 60)) / 1000);
  secsTime.innerHTML = secs;
}, 1000)