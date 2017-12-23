$(document).ready(function () {

  // setup squares
  var nodeCount = 576
  for (var i = 1; i <= nodeCount; i++) {
    $('.canvas').append('<div class="node"></div>');
  }

  // swatches
  var colors = ['#000000', '#2c2c2c', '#5f5f5f', '#c7bfbf', '#0a4057', '#1e8793', '#39e9e3', '#3ff8fb', '#0d580e', '#61d664', '#68f8a2', '#68f8a2', '#116815', '#22a726', '#23a850', '#baf783', '#4d2f07', '#aa7f20', '#f8b632', '#fad78c', '#881609', '#df5f29', '#f79f53', '#fae0b7', '#a70d0c', '#f6361c', '#f7765d', '#f2d0b6', '#a7012b', '#df0160', '#f6589b', '#f2c0df', '#900789', '#d80dce', '#f879f7', '#fab9f9', '#432ebf', '#6a4df6', '#9c7af7', '#dbbaf9', '#1310bf', '#298af7', '#6d8af7', '#bdb8f9', '#1c17f4', '#2579f5', '#4bc1f8', '#a9e8f9', '#778084', '#778084', '#fbf8fb', '#ffffff']
  // append swatches to palette
  $.each(colors, function (index, value) {
    $('.palette').append('<div><input class="check" style="background-color:' + value + '" type="radio" name="inkColor" value="' + value + '"></div>')
    // set black as initial paint color
    $('input:first').prop('checked', true)
  })


  function fillSquares () {
    $('.node').click(function () {
      // get the current global fill color
      var color = $('input[type=radio]:checked').css('background-color')
      // and apply it to a square
      $(this).css('background-color',color)
    });
  }

  fillSquares()


  // reset board
  function resetBoard () {
    var answer = confirm('Are you sure you want to reset?')
      if (answer) {
        console.log('User reset board')
        $('.node').css('background-color','#fff')
      } else {
        console.log('User declined reset')
      }
  }

  $('#reset').click(function () {
    $('overlay').toggleClass('isVisible')
    resetBoard()
  })
})
