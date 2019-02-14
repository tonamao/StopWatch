(function(){
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  
  var startTime;
  var elapsedTime = 0;
  var timerId;
  var pastTime = 0;
  var isRunning = false;

  function updateTimerText() {
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000; 
    
    //adjust the num of digit
    m = ('0' + m ).slice(-2);
    s = ('0' + s ).slice(-2);
    ms = ('00' + ms ).slice(-3);

    timer.textContent = m + ':' + s + '.' + ms;
  }
  

  function countUp() {
    timerId = setTimeout(function() {
      elapsedTime = Date.now() - startTime + pastTime;
      updateTimerText();
      countUp();
    }, 10);
  }

   start.addEventListener('click', function(){
     if(isRunning){
       return;
     }
     isRunning = true;
     startTime = Date.now();
     countUp();
   });

   stop.addEventListener('click', function(){
     if(!(isRunning)){
       return;
     }
     isRunning = false;
     pastTime += Date.now() - startTime;
     clearTimeout(timerId);
   });

   reset.addEventListener('click', function(){
     if(isRunning){
       return;
     }
     elapsedTime = 0;
     pastTime = 0;
     updateTimerText();
   });

})();
