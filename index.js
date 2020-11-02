function myTimer() {
    var downloadTimer = setInterval(function() {
        document.getElementById("myPopup").innerHTML = `${timeleft} seconds left`;
        timeleft -= 1;
        if (timeleft <= 0) {
            console.log('time has runned out');
            clearInterval(downloadTimer);
            document.getElementById("myPopup").innerHTML = "The time has ended!";
            document.getElementById("dot").style.backgroundColor = "#6495ED" ;
            document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
        }
    }, 1000);
}

function resetTimer() {
    console.log('reset timer activated');
    timeleft = 5;
    document.getElementById("dot").style.backgroundColor = "#fcba03" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
    myTimer();
}

function hoverPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

var timeleft = 5;

myTimer();
