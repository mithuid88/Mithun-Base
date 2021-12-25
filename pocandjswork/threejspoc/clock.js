setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
element.style.setProperty("--rotation", rotationRatio * 360)
}

setClock()



let seconds = 00,
tens = 00,
miliseconds  = 00,
appendTens = document.getElementById("tens") ,
appendSeconds = document.getElementById("seconds"),
appendmilliseconds = document.getElementById("miliseconds"),
buttonStart = document.getElementById("button-start"),
buttonStop = document.getElementById("button-stop"),
buttonReset =  document.getElementById("button-reset"),
interval;


// click on start

function startTimer() {
tens++;

if(tens < 9){
appendTens.innerHTML = "0" + tens;
}

if (tens > 9) {
appendTens.innerHTML = tens;
}

if(tens > 99) {
seconds++;
appendSeconds.innerHTML = "0" + seconds;
tens = 0;
appendTens.innerHTML = "0" + 0;
}

if(seconds > 9) {
appendSeconds.innerHTML = seconds;
}
}



buttonStart.onclick = function() {
    interval = setInterval(startTimer);
}

buttonStop.onclick = function(){
    clearInterval(interval);
    
}

buttonReset.onclick = function(){
    clearInterval(interval);
    tens =  "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}


document.addEventListener("DOMContentLoaded" , () => {
const timeLeftDisplay = document.querySelector("#time-left");
const startBtn = document.querySelector("#start-button");
const inputval = document.querySelector("#input-val");
// let timeLeft = 10
let addedvalue = inputval.value;
function inputvalue() {
    console.log(inputval.value)
    timeLeftDisplay.innerHTML = inputval.value;

}

inputval.addEventListener("change" , inputvalue)


function countDown() {
    setInterval(function(){ 
if(addedvalue <=0 ) {
clearInterval(addedvalue = 0)
}
timeLeftDisplay.innerHTML =addedvalue
addedvalue -=1

     },500);
}
startBtn.addEventListener("click" ,countDown)

})