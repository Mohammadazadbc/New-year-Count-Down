const daysEle = document.getElementById('days');
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('secs')


const newYears = "1 jan 2022";
function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    
    const totleSeconds = (newYearsDate -currentDate) /1000;

    const days = Math.floor(totleSeconds /3600 /24);
    const hours = Math.floor(totleSeconds /3600 % 24);
    const minutes = Math.floor(totleSeconds /60) %60;
    const seconds = Math.floor(totleSeconds) % 60;
    
   daysEle.innerHTML = days;
   hoursEl.innerHTML = hours;
   minsEl.innerHTML = minutes;
   secondsEl.innerHTML = seconds;


}

//inital call
countdown();

setInterval(countdown, 1000);