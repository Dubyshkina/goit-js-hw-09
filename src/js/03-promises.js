import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } 
    else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
  });
}



form.addEventListener("submit", (event) => {
  event.preventDefault();
  let delay = Number(form.delay.value);
  let step = Number(form.step.value);
  let amount = Number(form.amount.value);
    for (let position = 1; position <= amount ; position += 1) {
      createPromise(position, delay).then(resolve => {
      Notify.success(resolve);
     }).catch(reject => {
      Notify.failure(reject);
     });
     delay+=step;
   }
  });

