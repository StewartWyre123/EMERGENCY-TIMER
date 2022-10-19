 //IDK

 var hour = 0
 var minute = 0
 var second = 0
 var timer;

 //timer settings

function hourUp() {
  var hour = document.getElementById("hour");
  hour.innerHTML = parseInt(hour.innerHTML) + 1;

  if (parseInt(hour.innerHTML) > 99) {
    hour.innerHTML = 0
  }
}
function hourDown() {
    var hour = document.getElementById("hour");
    hour.innerHTML = parseInt(hour.innerHTML) - 1;
  
    if (parseInt(hour.innerHTML) < 0 ) {
      hour.innerHTML = 99
    }
}

function MinuteUp() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML) + 1;
  
    if (parseInt(minute.innerHTML) > 59 ) {
        minute.innerHTML = 0
    }
}
function MinuteDown() {
    var minute = document.getElementById("minute");
    minute.innerHTML = parseInt(minute.innerHTML) - 1;
  
    if (parseInt(minute.innerHTML) < 0 ) {
        minute.innerHTML = 59
    }
}
function secondUp() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML) + 1;
  
    if (parseInt(second.innerHTML) > 59 ) {
        second.innerHTML = 0
    }
}
function secondDown() {
    var second = document.getElementById("second");
    second.innerHTML = parseInt(second.innerHTML) - 1;
  
    if (parseInt(second.innerHTML) < 0 ) {
        second.innerHTML = 59
    }
}


function startTimer() {    //This is for starting the timer

    var buttons = document.getElementsByTagName("button");

    for (var i = 0; i < buttons.length - 1; i += 1) {
        buttons[i].style.display = "none";
    }
    hour = parseInt(document.getElementById("hour").innerHTML);
    minute = parseInt(document.getElementById("minute").innerHTML);
    second = parseInt(document.getElementById("second").innerHTML);

    timer = setInterval(countdown, 1000);

    countdown()
}
function countdown() {
    second-=1

    if (second < 0) {
        minute -=1;
        second = 59;

        if (minute <0) {
            hour-=1
            minute =59
        
            if (hour <0) {
                hour = 0
                minute = 0
                second = 0
            }
        }  
    }
    if (second == 0 && minute == 0 && hour == 0) {
        document.getElementById("myModal").style.display = "block";
        clearInterval(timer);
    }

    document.getElementById("second").innerHTML = second;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("hour").innerHTML = hour;
}
function closeModal() {
    location.reload();
}