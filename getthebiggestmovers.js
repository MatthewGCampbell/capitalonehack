// Get Data From Coin Gecko API (Trending Coins)
// API: https://api.coingecko.com/api/v3/search/trending
function capitalizeFirstLetter(string) {
  // Capitalize First Letter
  return string.charAt(0).toUpperCase() + string.slice(1);
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
    // CryptoLogos
    document.createElement("img").src = coin1_info.item.thumb;
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
