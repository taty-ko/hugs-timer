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
    let time = inputTime.value
    composeAndSetValuesToTimerItem(time);
});

stop.addEventListener('click', function stopValue(event) {
    inputTime.value = "set time again";
    console.log(inputTime.value);
});

pause.addEventListener('click', () => {
    console.log('btn pause');
}); 

inputTime.addEventListener('change', function getValue(event) {
    console.log(inputTime); 
}); 

inputTime.addEventListener('input', function getValue(event) {
    const inputContent = inputTime.value;

    // 1, в строке не больше 5 символов.
    if (inputContent.length >= 6) {
      inputTime.value = inputContent.substring(0, 5);
      return;
    }

    // в строке только цифры и двоеточие (одно)
    const lastChar = getLastChar(inputContent);

    if (!isNumeric(lastChar) && lastChar != ":") {
      inputTime.value = inputContent.substring(0, inputContent.length - 1);
      return;
    }

    // проверить, чтобы ":" было один раз

    
        
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

function getLastChar(str) {
  return str[str.length - 1];
};

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}