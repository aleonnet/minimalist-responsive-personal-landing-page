var bg = document.getElementById("bg");
var big = window.matchMedia("(min-width: 741px)");
var small = window.matchMedia("(max-width: 740px)");
var count = 0;

// Add keyboard accessibility to Change Background button
var changeEnter = document.getElementById("changeSpan");
changeEnter.addEventListener("keypress", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        changeEnter.click();
    }
});

function changeBackground() {

  // Remove anything from being selected
  if (window.getSelection) {
    if (window.getSelection().empty) {  // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {  // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {  // IE?
    document.selection.empty();
  }

  // Change background depending on size
  if (big.matches) {
    if (count%2===0) {
      bg.style.backgroundImage = "url(bg2.jpg)";
      count++;
    } else {
      bg.style.backgroundImage = "url(bg.jpg)";
      count++;
    }
  }
  if (small.matches) {
    if (count%2===0) {
      bg.style.backgroundImage = "url(bg_mobile2.jpg)";
      count++;
    } else {
      bg.style.backgroundImage = "url(bg_mobile.jpg)";
      count++;
    }
  }
}
