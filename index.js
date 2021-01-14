document.getElementById('myPopup').innerHTML = 010 + ":" + 10; //how long is timer
startTimer();
var time; //Store timer in var so you can stop starting multiple timers

function startTimer() {
    var presentTime = document.getElementById('myPopup').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){
        m=m-1
    }  
    if(m<0){
        document.getElementById("myPopup").innerHTML = "time for a break";
        document.getElementById("dot").style.backgroundColor = "#6495ED" ;
        document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
        document.getElementById("dot").classList.remove("dotAni");
        document.getElementById("dot").classList.add("glow")
        exit()
    } else{
        document.getElementById('myPopup').innerHTML =m + ":" + s;
    }
    console.log(m)
    time = setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {
        sec = "0" + sec
    }; // add zero in front of numbers < 10
    if (sec < 0) {
        sec = "59"
    };
    return sec;
  }

function resetTimer() {
    console.log('reset timer activated');
    clearTimeout( time ) //Make sure there is only one timer going on
    document.getElementById('myPopup').innerHTML = 010 + ":" + 10; //how long is new timer
    document.getElementById("dot").style.backgroundColor = "#fcba03" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
    document.getElementById("dot").classList.remove("glow");
    document.getElementById("dot").classList.add("dotAni")
    startTimer();
}

function delayTimer() { //should add up 1 minute to timer but doesn't work
    var presentTime = document.getElementById('myPopup').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    clearTimeout( time )
    m=m+1
    document.getElementById('myPopup').innerHTML =m + ":" + s;
    startTimer();
}

function muteTimer(){
    //i dunno where the start, maybe get element main.js to turn of always on top for an hour but all the timers are broken
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

