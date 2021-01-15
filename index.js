const electron = require('electron');
const {ipcRenderer} = electron;

var timer; //Store timer in var so you can stop starting multiple timers
var timeLeft = 600; //in seconds
var timer_mute;
document.getElementById('myPopup').innerHTML = 00 + ":" + 10; //how long is timer
startTimer();


function updateTimeUI(){
    if (timeLeft == 0){
        breakTimeUI();
        clearTimeout(timer);
    } else{
        var m = Math.floor(timeLeft /60);
        var s = timeLeft - m * 60;
        if (s < 10) {
            s = "0" + s;
        }
        document.getElementById('myPopup').innerHTML =m + ":" + s;
    }
}

function startTimeUI(){
    document.getElementById("dot").style.backgroundColor = "#fcba03" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
    document.getElementById("dot").classList.remove("glow");
    document.getElementById("dot").classList.add("dotAni")
}

function breakTimeUI(){
    document.getElementById("myPopup").innerHTML = "time for a break";
    document.getElementById("dot").style.backgroundColor = "#6495ED" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
    document.getElementById("dot").classList.remove("dotAni");
    document.getElementById("dot").classList.add("glow")
}

function muteTimeUI(){
    document.getElementById("myPopup").innerHTML = "muted";
    document.getElementById("dot").style.backgroundColor = "#a4aab3" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
    document.getElementById("dot").classList.remove("glow");
    document.getElementById("dot").classList.add("dotAni")
}

function startTimer() {
    timeLeft = timeLeft - 1;
    timer = setTimeout(startTimer, 1000);
    updateTimeUI();
    // console.log(m)
}

function resetTimer() {
    console.log('reset timer activated');
    clearTimeout(timer); //Make sure there is only one timer going on
    timeLeft = 10; 
    updateTimeUI();
    startTimeUI();
    // startTimer();
    timer = setTimeout(startTimer, 1000);
    timerUnmute();
}

function delayTimer() { 
    // clearTimeout(timer);
    timeLeft = timeLeft + 300;
    // updateTimeUI();
    // timer = setTimeout(startTimer, 1000);
}

function timerMute(){
    clearTimeout(timer);
    timer_mute = setTimeout(timerUnmute, 3600000);
    muteTimeUI();
    // document.getElementById("dot").style.backgroundColor = "#ff0000" ;
    // document.getElementById("myPopup").innerHTML = "muted";
    breakMenu();
    ipcRenderer.send('mute');
    //i dunno where the start, maybe get element main.js to turn of always on top for an hour but all the timers are broken
}

function timerUnmute(){
    clearTimeout(timer-mute);
    ipcRenderer.send('unmute');
}

function hoverPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  function breakMenu() {
    console.log('breakMenu activated');
    var element = document.getElementById("myBreakMenu");
    var element2 = document.getElementById("myBreakMenu2");
    var element3 = document.getElementById("myBreakMenu3");
   element.classList.toggle("breakMenu");
   element2.classList.toggle("breakMenu");
   element3.classList.toggle("breakMenu");
  }

