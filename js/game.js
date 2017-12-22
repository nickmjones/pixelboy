$(document).ready (function() {
  inkColor = ''
  // setup squares
  var nodeCount = 576
  for (var i = 1; i <= nodeCount; i++) {
    $('.canvas').append('<div class="node"></div>');
  }

  // reset board
  function resetBoard () {
    var answer = confirm('Are you sure you want to reset?')
      if (answer) {
        console.log('User reset board')
        $('.node').removeClass(inkColor)
      } else {
        console.log('User declined reset')
      }
  }

  function draw () {

    $('.node').bind('click', function (event) {
      $(this).toggleClass(inkColor)
    })
  }

  draw()

  $('#reset').click(function () {
    resetBoard()
  })
})
