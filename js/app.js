
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

// update countdown Timer
function updateCountDownTime() {
    const countDate = new Date('apr 29, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    // calculate the date
    const textDay = Math.floor(diff / day)
    const textHour = Math.floor((diff % day) / hour);
    const textMinute = Math.floor((diff % hour) / minute);
    const textSecond = Math.floor((diff % minute) / second);


    days.innerText = textDay;
    hours.innerText = textHour
    minutes.innerText = textMinute;
    seconds.innerText = textSecond;
}


setInterval(updateCountDownTime, 1000)


