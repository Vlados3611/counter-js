let hoursElement = document.querySelector(`#hours`);
let minutesElement = document.querySelector(`#minutes`);
let secondsElement = document.querySelector(`#seconds`);
let milisecondsElement = document.querySelector(`#milisec`);
let startbutton = document.querySelector(`#start`);
let pausebutton = document.querySelector(`#pause`);
let stopbutton = document.querySelector(`#stop`);

let hour = 00;
let minute = 00;
let second = 00;
let milisecond = 00;
let interval;

startbutton.addEventListener(`click`, function () {
    clearInterval(interval);
    interval = setInterval(StartCounter, 10);
});

pausebutton.addEventListener(`click`, function () {
    clearInterval(interval);
});

stopbutton.addEventListener(`click`, function () {
    clearbutton();
})

function StartCounter () {
    milisecond++;
    if (milisecond < 9) {
        milisecondsElement.innerText = `0` + milisecond;
    }
    if (milisecond > 9) {
        milisecondsElement.innerText = milisecond;
    }
    if (milisecond > 99) {
        second++;
        secondsElement.innerText = `0` + second;
        milisecond = 0;
        milisecondsElement.innerText = `0` + milisecond;
    }


    if (second > 9) {
        secondsElement.innerText = second;
    }
    if (second > 59) {
        minute++;
        minutesElement.innerText = `0` + minute;
        second = 0;
        secondsElement.innerText = `0` + second;
    }


    if (minute > 9) {
        minutesElement.innerText = minute;
    }
    if (minute > 59) {
        hour++;
        hoursElement.innerText = `0` + hour;
        minute = 0;
        minutesElement.innerText = `0` + minute;
    }

    if (hour > 9) {
        hoursElement.innerText = hour;
    }
};

function clearbutton () {
    hour = 00;
    minute = 00;
    second = 00;
    milisecond = 00;
    hoursElement.textContent = `00`;
    minutesElement.textContent = `00`;
    secondsElement.textContent = `00`;
    milisecondsElement.textContent = `00`;
    clearInterval(interval);
}
