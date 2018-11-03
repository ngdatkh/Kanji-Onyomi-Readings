var headingTwo;
var cardMeaning;
var cardKanji;
var card;
var reading;

function addReading(classNumber, text) {
  var code = '<section class="reading-' + classNumber + '"><h2>' + text + '</h2></section>';
  return code;
}

function addCard(meaning, kanji) {
  var code = '<div class="card"><div class="meaning">' + meaning + '</div><div class="kanji">' + kanji + '</div></div>';
  return code;
}

for(var i = 0, j = 0; i < readingOn.length && j < readingOnHira.length; i++, j++) {
  var text = (i + 1) + '. ' +  readingOn[i] + ' - ' + readingOnHira[j];
  headingTwo = addReading(i+1, text);
  $("#all-card").append(headingTwo);  
}

for(var i = 0, j = 0; i < kanji.length && j < meaningEng.length; i++, j++) { 
  for(var m = 0, n = 0; m < kanji[i].length && n < meaningEng[j].length; m++, n++) {
    cardMeaning = meaningEng[j][n];
    cardKanji = kanji[i][m];
    card = addCard(cardMeaning, cardKanji);
    reading = ".reading-" + (i+1);
    $(reading).append(card);
  }  
}

if($("#checkboxThreeInput").prop('checked')) {
  $(".meaning").removeClass("hide");
} else if(!$("#checkboxThreeInput").prop('checked')) {
  $(".meaning").addClass("hide");
}

$(".checkboxThree").click(function() {
  if($("#checkboxThreeInput").prop('checked')) {
    $("#checkboxThreeInput").prop('checked', false);
    $(".meaning").addClass("hide");
  } else if(!$("#checkboxThreeInput").prop('checked')) {
    $("#checkboxThreeInput").prop('checked', true);
    $(".meaning").removeClass("hide");
  }  
});

// Smooth scrooling
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
//          $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//            $target.focus(); // Set focus again
        };
      });
    }
  }
});

