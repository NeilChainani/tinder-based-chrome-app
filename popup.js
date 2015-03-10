
function tinder() {
  chrome.tabs.executeScript({
    file: 'tinder.js'
  }); 
}
 
document.getElementById('TinderLogin').addEventListener('click', tinder);

