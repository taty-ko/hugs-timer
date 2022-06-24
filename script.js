'use strict';

window.addEventListener('DOMContentLoaded', () => {

const minutes = document.querySelector('#min'),
      seconds = document.querySelector('#sec'), 
      start = document.querySelector('.start'),
      pause = document.querySelector('.pause'),
      stop = document.querySelector('.stop'), 
      inputTime = document.getElementById('getTime');

      
/* const timerUpdate = setInterval(function() {
        console.log(seconds);
        console.log(minutes);
        }, 1000);
 */



start.addEventListener('click', function getValue(event) {

    const val = document.getElementById('getTime');
    
    // Send value to server
    console.log(val.value);
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

/* inputTime.addEventListener('click', function getValue() {
    const val = document.getElementById("getTime").value;
    console.log(val);
}) */

});


