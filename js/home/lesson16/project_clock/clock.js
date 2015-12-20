
  function displayTime() {
<<<<<<< HEAD

    var currentTime = new Date(); //ask js to give us a date, time, etc.

   // define variables for getting hours, min, sec from new Date

=======

    var currentTime = new Date(); //ask js to give us a date, time, etc.

   // define variables for getting hours, min, sec from new Date

>>>>>>> origin/master
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    //var milliseconds = currentTime.getMilliseconds();
<<<<<<< HEAD

  // add zero in front of numbers < 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

  // function for adding 0 in front
    function checkTime(i) {
      if (i<10) {
        i = "0" + i
      }
        return i;
}

    // to appear/connect in/to html
var clockDiv = document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

=======

  // add zero in front of numbers < 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

  // function for adding 0 in front
    function checkTime(i) {
      if (i<10) {
        i = "0" + i
      }
        return i;
}

    // to appear/connect in/to html
var clockDiv = document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;

>>>>>>> origin/master
}


displayTime(); // call a function
setInterval(displayTime, 100); // make clock alive
<<<<<<< HEAD

=======

>>>>>>> origin/master

