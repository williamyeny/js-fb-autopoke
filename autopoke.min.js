/**
    Auto-poke script for Facebook US

    For other versions, replace "Poke Back" by the label used in your version
*/
setInterval(function() {
  links = document.getElementsByTagName("a");
  for (var i = 0 ; i != links.length; i++)
  {
      if (links[i].innerHTML.contains("Poke Back"))
          links[i].click();
  }
}, 1000);
