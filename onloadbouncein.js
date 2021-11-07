// Animate the bounce in of the bubbles on reload
var bubbles = document.getElementById("bubble");


function waitForStyle(){
  if(style !== "undefined"){
    function bounceIn() {
      bubbles.style.transform = "scale(0)";
      setTimeout(2);
      bubbles.style.transform = "scale(1)";
      setTimeout(2);
      bubbles.style.transform = "scale(0)";
    }
    window.onload=function(){
      bounceIn();
    }
  }
  else{
      setTimeout(waitForElement, 250);
  }
}