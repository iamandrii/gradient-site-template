'use strict';

const radioLink = "http://kaneki.me:1488/pm";

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

function toggleRadio(){
  var win = window.open(radioLink, "_blank");
  win.focus();
}

function ready(){
  updateTime();
  setInterval(updateTime, 200);
  particlesJS.load('particles-js', 'assets/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  });
  document.getElementById("toggle-radio").onclick = toggleRadio;
}

document.onreadystatechange = function(){
  if(document.readyState==="complete") ready();
}