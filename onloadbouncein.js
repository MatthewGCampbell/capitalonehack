// Animate the bounce in of the bubbles on reload
var bubbles = document.getElementById("bubble");


function waitForStyle(){
  if(style !== "undefined"){
    function bounceIn() {
      bubbles.style.animation = "bounceIn 5s";
    }
    window.onload=function(){
      bounceIn();
    }
  }
  else{
      setTimeout(waitForElement, 250);
  }
}