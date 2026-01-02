const time = document.getElementById("time");

secondsElapsed = 0;

interval = null;

function setTime(){

    

    minutes = Math.floor(secondsElapsed/60)
    seconds = Math.floor(secondsElapsed%60)

time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`

}


function padStart(value){

   return String(value).padStart(2,"0");


}

function counter(){


    secondsElapsed++;

    setTime();

    

}


function startTimer(){

    interval = setInterval(counter,1000);


   

}

function stopTimer(){
clearInterval(interval);

}


function resetTimer(){

    stopTimer();

    secondsElapsed=0;

setTime();


}


