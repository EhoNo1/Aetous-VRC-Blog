
let secondsElapsed = 0;
function startCountdown() {

    setInterval(() => {
        secondsElapsed++;

        let secondsElement = document.getElementById("seconds");
        let minutesElement = document.getElementById("minutes");
        let hoursElement = document.getElementById("hours");
        let daysElement = document.getElementById("days");

        secondsElement.textContent = secondsElapsed % 60;
        let minutesNumber = Math.floor(secondsElapsed / 60);
        minutesElement.textContent = minutesNumber % 60;
        let hoursNumber = Math.floor(minutesNumber / 60);
        hoursElement.textContent = hoursNumber % 24;
        let daysNumber = Math.floor(hoursNumber / 24);
        daysElement.textContent = daysNumber;

    }, 1000);
}


fetch("https://tailtwiststudios.github.io/TTS-VRC-Public-Resources/vrceventdata.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {


        if (data.showTimers == true) {
            let timer = document.getElementById("event-timer");
            console.log(timer.style.display);
            timer.style.display = "inline";
            startCountdown();
        }
    })
    .catch((err) => {
        console.log(err);
    });







