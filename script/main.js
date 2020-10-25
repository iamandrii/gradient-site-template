function execute(link){
  window.open(link)
}

function leadingZeros(s) {
  s = String(s);
  if (s.length < 2) return "0" + s;
  else return s;
}

function updateTime(){
  let now = new Date(Date.now());
  document.getElementById("time").innerText=leadingZeros(now.getHours())+":"+leadingZeros(now.getMinutes());
}

function ready(){
  updateTime();
  setInterval(updateTime, 200);
  particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
}


document.onreadystatechange = function(){
  if(document.readyState==="complete") ready();
}