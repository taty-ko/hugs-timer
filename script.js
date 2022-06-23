'use strict';

window.addEventListener('DOMContentLoaded', () => {

const minutes = document.querySelector('#min'),
      seconds = document.querySelector('#sec'), 
      start = document.querySelector('.start'),
      pause = document.querySelector('.pause'),
      stop = document.querySelector('.stop');

      
const timerUpdate = setInterval(function() {
        console.log(seconds);
        console.log(minutes);
        }, 1000);




start.addEventListener('click', () => {
    console.log('btn start');
});

 stop.addEventListener('click', () => {
    console.log('btn stop');
});

pause.addEventListener('click', () => {
    console.log('btn pause');
}); 


let input = document.querySelector('input');

console.log(input);

});


