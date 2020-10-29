function myTimer() {
    var downloadTimer = setInterval(function() {
        // document.getElementById("countdown").innerHTML = `${timeleft} seconds left`;
        timeleft -= 1;
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            // document.getElementById("countdown").innerHTML = "The time has ended!";
            document.getElementById("dot").style.backgroundColor = "#6495ED" ;
            document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(227, 238, 255 ,1)";
        }
    }, 1000);
}

function resetTimer() {
    console.log('hi');
    timeleft = 5;
    document.getElementById("dot").style.backgroundColor = "#fcba03" ;
    document.getElementById("dot").style.boxShadow = "1px 1px 15px rgba(255,160,0 ,1)";
    myTimer();
}

var timeleft = 5;

myTimer();
