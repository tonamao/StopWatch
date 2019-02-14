(function(){
 var timer = document.getElementById('timer');
 var reset = document.getElementById('reset');
 var onoff = document.getElementById('onoff');
 var icon = document.getElementById('icon');

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

  reset.addEventListener('click', function(){
    if(isRunning){
      return;
    }
    elapsedTime = 0;
    pastTime = 0;
    updateTimerText();
  });

  onoff.addEventListener('click', function(){
    //click START
    if(!(isRunning)){
      isRunning = true;
      icon.className = 'far fa-pause-circle';
      onoff.style.color = '#F27398';
      startTime = Date.now();
      countUp();
    //click STOP
    } else {
      isRunning = false;
      icon.className = 'far fa-play-circle';
      pastTime += Date.now() - startTime;
      clearTimeout(timerId);
    }
  });

})();
