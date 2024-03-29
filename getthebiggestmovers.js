// Get Data From Coin Gecko API (Trending Coins)
// API: https://api.coingecko.com/api/v3/search/trending
function capitalizeFirstLetter(string) {
  // Capitalize First Letter
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// place bubbles in random places

function random_bubble_pos() {
  var x = Math.floor(Math.random() * (window.innerWidth - 50));
  var y = Math.floor(Math.random() * (window.innerHeight - 50));
  return [x, y];
}
function place_bubble(bubble) {
  var pos = random_bubble_pos();
  bubble.style.left = pos[0] + 'px';
  bubble.style.top = pos[1] + 'px';
}

function waitForElement(){
  if(typeof coin1_info !== "undefined"){
    document.getElementById("coin1-info").innerText = capitalizeFirstLetter(coin1_info.item.id);
    document.getElementById("coin2-info").innerText = capitalizeFirstLetter(coin2_info.item.id);
    document.getElementById("coin3-info").innerText = capitalizeFirstLetter(coin3_info.item.id);
    document.getElementById("coin4-info").innerText = capitalizeFirstLetter(coin4_info.item.id);
    document.getElementById("coin5-info").innerText = capitalizeFirstLetter(coin5_info.item.id);
    document.getElementById("coin6-info").innerText = capitalizeFirstLetter(coin6_info.item.id);
    document.getElementById("coin7-info").innerText = capitalizeFirstLetter(coin7_info.item.id);
    var bubbles = document.getElementsByClassName('bubbles');
    for (var i = 0; i < bubbles.length; i++) {
      place_bubble(bubbles[i]);
    }
    document.getElementsByClassName('trending-coins')[0].style.visibility = 'visible';
  }
  else{
      setTimeout(waitForElement, 250);
  }
}
window.addEventListener('load', function () {
  document.getElementsByClassName('bubbles')[0].style.visibility = 'hidden';
})

window.onload=function(){
    // Get Data From API On Button Click and Render
      function getData() {
        fetch("https://api.coingecko.com/api/v3/search/trending").then(response => response.json()).then(data => { 
        coin_info = data.coins;
        coin1_info = coin_info[0];
        coin2_info = coin_info[1];
        coin3_info = coin_info[2];
        coin4_info = coin_info[3];
        coin5_info = coin_info[4];
        coin6_info = coin_info[5];
        coin7_info = coin_info[6];
      });
  }
  getData();
  waitForElement();
}
// add gravity to bubbles
function gravity(bubble) {
  bubble.style.top = parseInt(bubble.style.top) + 1 + 'px';
  if (parseInt(bubble.style.top) < window.innerHeight) {
    setTimeout(function () {
      gravity(bubble);
    }, 1);
  }
}
function individual_bubbles(num) {
  bubbles =  document.getElementsByClassName('bubbles')[0];
  var bubbles = ('bubbles')[0];
}
individual_bubbles(1);
// add bubbles


// Using GreenSock's TweenMax library
const bubbles = $('.bubbles');

bubbles.on('click', function() {
  const bubbles = $(this);
  
  // Animate the bubble's size and position using TweenMax
  TweenMax.to(bubbles, 0.5, {
    width: 150,
    height: 150,
    top: '50%',
    left: '50%',
    ease: Power1.easeInOut
  });

  // Animate the other bubbles to shrink and fade out using TweenMax
  bubbles.not(bubbles).each(function() {
    TweenMax.to($(this), 0.5, {
      width: 0,
      height: 0,
      opacity: 0,
      ease: Power1.easeInOut
    });
  });

  // Add the 'active' class to the clicked bubble after the animation completes
  setTimeout(function() {
    bubbles.addClass('active');
  }, 500);

  // Remove the 'active' class and reset the bubbles after two seconds
  setTimeout(function() {
    bubbles.removeClass('active');
    bubbles.each(function() {
      TweenMax.to($(this), 0.5, {
        width: $(this).attr('data-width'),
        height: $(this).attr('data-height'),
        top: $(this).attr('data-top'),
        left: $(this).attr('data-left'),
        opacity: 1,
        ease: Power1.easeInOut
      });
    });
  }, 2000);
});
