$(document).ready(function(){
  // setup squares
  var nodeCount = 576;
  for (var i = 1; i <= nodeCount; i++) {
    $('.canvas').append('<div class="node"></div>');
  }

  // reset board
  function resetBoard() {
    var answer = confirm('Are you sure you want to reset?');
      if (answer)
      {
        console.log('user reset board');
        $('.node').removeClass('filled')
      }
      else
      {
        console.log('user declined reset');
      }
  }

  function draw() {

    $('.node').bind("click", function(event) {
      $(this).toggleClass('filled');
    });
  }

  draw()

  $('#reset').click (function() {
    resetBoard()
  });
});
