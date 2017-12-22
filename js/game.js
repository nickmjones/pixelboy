$(document).ready (function() {
  color1 = 'filledBlack'
  color2 = 'filledGray'
  color3 = 'filledLightGray'
  color4 = 'filledLightestGray'

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
        $('.node').removeClass(color1).removeClass(color2).removeClass(color3).removeClass(color4)
      } else {
        console.log('User declined reset')
      }
  }

  function draw () {
    $('.node').click(function () {
      if($('#black').is(':checked')) {
        $(this).toggleClass(color1)
      } else if ($('#gray').is(':checked')) {
        $(this).toggleClass(color2)
      } else if ($('#light-gray').is(':checked')) {
        $(this).toggleClass(color3)
      } else if ($('#lightest-gray').is(':checked')) {
        $(this).toggleClass(color4)
      }
    })
  }

  draw()

  $('#reset').click(function () {
    resetBoard()
  })
})
