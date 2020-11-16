// function myTimer() {
//     var downloadTimer = setInterval(function() {
//         document.getElementById("myPopup").innerHTML = `${timeleft} seconds left`;
//         timeleft -= 1;
//         if (timeleft <= 0) {
//             console.log('time has runned out');
//             clearInterval(downloadTimer);
//             document.getElementById("myPopup").innerHTML = "The time has ended!";
//             document.getElementById("dot").style.backgroundColor = "#6495ED" ;
//             document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
//         }
//     }, 1000);
// }

// function resetTimer() {
//     console.log('reset timer activated');
//     timeleft = 5;
//     document.getElementById("dot").style.backgroundColor = "#fcba03" ;
//     document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
//     myTimer();
// }

document.getElementById('myPopup').innerHTML = 000 + ":" + 10;
startTimer();
var time; //Store timer in var so you can stop starting multiple timers

function startTimer() {
    var presentTime = document.getElementById('myPopup').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}  
    if(m<0){
        document.getElementById("myPopup").innerHTML = "The time has ended!";
        document.getElementById("dot").style.backgroundColor = "#6495ED" ;
        document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)"
        exit()
    } else{
        document.getElementById('myPopup').innerHTML =m + ":" + s;
    }
    console.log(m)
    time = setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

function resetTimer() {
    console.log('reset timer activated');
    clearTimeout( time ) //Make sure there is only one timer going on
    document.getElementById('myPopup').innerHTML = 000 + ":" + 10;
    document.getElementById("dot").style.backgroundColor = "#fcba03" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
    startTimer();
}

function hoverPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

// var timeleft = 80;
// myTimer();
