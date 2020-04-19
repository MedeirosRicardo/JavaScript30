const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    // Seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    if (secondsDegrees === 90) {
        secondHand.style.transition = 'all 0s';
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }

    // Minutes
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 ) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    if (minutesDegrees === 90) {
        mindHand.style.transition = 'all 0s';
    } else {
        minHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }

    // Hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;    

}

setInterval(setDate, 1000);