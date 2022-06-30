'use strict';

window.addEventListener('DOMContentLoaded', () => {

const minutes = document.querySelector('#min'),
      seconds = document.querySelector('#sec'), 
      start = document.querySelector('.start'),
      pause = document.querySelector('.pause'),
      stop = document.querySelector('.stop'), 
      inputTime = document.getElementById('getTime'),
      selectTime = document.getElementById('timepicker');

      
/* const timerUpdate = setInterval(function() {
        console.log(seconds);
        console.log(minutes);
        }, 1000);
 */



start.addEventListener('click', function getValue(event) {

    const val = document.getElementById('getTime');
    
    let time = val.value
    composeAndSetValuesToTimerItem(time);
   
});

 stop.addEventListener('click', function stopValue(event) {
    const val = document.getElementById('getTime');
     val.value = "set time again";
     console.log(val.value);
});

pause.addEventListener('click', () => {
    console.log('btn pause');
}); 

  inputTime.addEventListener('click', function getValue(event) {
  
    const val = document.getElementById('getTime');
    
    // Send value to server
    console.log(val.value);

  
    /* // 👇️ clear input field
   val.placeholder = ''; */

  }); 


selectTime.addEventListener('change', function getTimeOption (event) {

  const val = selectTime.options[selectTime.selectedIndex].text;
  console.log(val);
  composeAndSetValuesToTimerItem(val);
});

// Функция, которая принимает строку, которую нужно разбить на массив по ':', и подставить в таймер элемент первый и второй соответственно.
function composeAndSetValuesToTimerItem(value) {
  let arrSplittedValues = value.split(':');
  minutes.textContent = arrSplittedValues[0];
  seconds.textContent = arrSplittedValues[1];
}

});


