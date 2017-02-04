/**
    Auto-poke script for Facebook US

    For other versions, replace "Poke Back" by the label used in your version
*/
console.info("Auto-poke loaded."); //how fast do you want it to check for pokes?

var loopTime = 5000;

setInterval(function() {
  links = document.getElementsByTagName("a");
  for (var i = 0 ; i != links.length; i++)
  {
    if (links[i].innerHTML.contains("Poke Back")) {
        links[i].click();
        console.info("Poking...");
    }
  }
  console.info("Pausing for " + loopTime + " milliseconds...");
}, loopTime);
