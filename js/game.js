$(document).ready (function() {
  // setup squares
  var nodeCount = 576
  for (var i = 1; i <= nodeCount; i++) {
    $('.canvas').append('<div class="node"></div>');
  }

  // handle ink colors

  // reset board
  function resetBoard () {
    var answer = confirm('Are you sure you want to reset?')
      if (answer) {
        console.log('User reset board')
        $('.node').removeClass('filledBlack')
      } else {
        console.log('User declined reset')
      }
  }

  function draw () {

    $('.node').bind('click', function (event) {
      $(this).toggleClass('filledBlack')
    })
  }

  draw()

  $('#reset').click(function () {
    resetBoard()
  })
})
