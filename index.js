// Variable for stopwatch
let stopWatch = document.querySelector('#timer');

// Variables for timer
let second = 0;
let minute = 0;
let hour = 0;

// Variable for first zero
let leadingSecond = 0;
let leadingMinute = 0;
let leadingHour = 0;

// Variables for buttons
let playTimer = document.querySelector('#play');
let stopTimer = document.querySelector('#stop');
let resetTimer = document.querySelector('#reset');

// Variable for timer status
let timerInterval ;
let timerStatus = "stopped";

// Timer function
function countTime() {

    second++;

    if (second == 60){
        second = 0;
        minute = minute + 1;
        if (minute == 60){
            minute = 0;
            hour = hour + 1;
        }
    }

    if (second < 10) {
        leadingSecond = '0' + second.toString();
    } else {
        leadingSecond = second;
    }
    if (minute < 10) {
        leadingMinute = '0' + minute.toString();
    } else {
        leadingMinute = minute;
    }
    if (hour < 10) {
        leadingHour = '0' + hour.toString();
    } else {
        leadingHour = hour;
    }


    
    stopWatch.innerHTML = leadingHour + ':' + leadingMinute + ':' + leadingSecond;
}


// Play function
playTimer.addEventListener('click', function(){
    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(countTime, 500);
        timerStatus = "started";
    }
    
})

// Stop function
stopTimer.addEventListener('click', function(){
    if(timerStatus === "started"){
        window.clearInterval(timerInterval);
        timerStatus = "stopped";
    }
    
})

//reset function
resetTimer.addEventListener('click', function(){
    if(timerStatus === "stopped" || "started"){
        window.clearInterval(timerInterval);
        second = 0;
        minute = 0;
        hour = 0;

        timerStatus = "stopped";

        stopWatch.innerHTML = "00:00:00";
    }
    
})