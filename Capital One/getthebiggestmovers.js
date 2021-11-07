// Get Data From Coin Gecko API (Trending Coins)
// API: https://api.coingecko.com/api/v3/search/trending
function waitForElement(){
  if(typeof coin1_info !== "undefined"){
    document.getElementById("coin1-info").innerText = coin1_info.item.id;
    document.getElementById("coin2-info").innerText = coin2_info.item.id;
    document.getElementById("coin3-info").innerText = coin3_info.item.id;
    document.getElementById("coin4-info").innerText = coin4_info.item.id;
    document.getElementById("coin5-info").innerText = coin5_info.item.id;
    document.getElementById("coin6-info").innerText = coin6_info.item.id;
    document.getElementById("coin7-info").innerText = coin7_info.item.id;
  }
  else{
      setTimeout(waitForElement, 250);
  }
}

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
