const decrementBtn =document.querySelector('[data-action="decrement"]');
const valueCounter = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
let totalCounter = 0;


decrementBtn.addEventListener("click",onClickDecrement);
incrementBtn.addEventListener("click",onClickIncrement);

   function onClickDecrement(evt){
    totalCounter -= 1;
    valueCounter.textContent = totalCounter;
   };
   function onClickIncrement(evt){
    totalCounter +=1;
    valueCounter.textContent = totalCounter;
   };