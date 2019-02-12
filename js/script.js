(function(){
  var timer = document.getElementById('timer');
  var start = document.getElementById('start');
  var stop = document.getElementById('stop');
  var reset = document.getElementById('reset');
  
  var startTime;
  var elapsedTime = 0;

  function updateTimerText() {
    var m = elapsedTime / 60000;
    var s = (elapsedTime % 60000) / 1000;
    var ms = elapsedTime % 1000; 
    
    timer.textContent = m + ':' + s + '.' + ms;
  }
  

  function countUp() {
    setTimeout(function() {
      elapsedTime = Date.now() - startTime;
      console.log(elapsedTime);
    }, 10);
  };

   start.addEventListener('click', function(){
     startTime = Date.now();
     countUp();
   });
})();
