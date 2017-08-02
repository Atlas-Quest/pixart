var movieImage = false;
$('#color-field').focus();
takeUserColor();
createSquares();
listenToSquare();
prepareStampTool();

function takeUserColor() {
  $('#set-color').click(function(event){
    event.preventDefault();
    // change color of brush box to user's input
    var userColor = $('#color-firld').val();
    $('.brush').css('background-color', userColor)
  });
}

function createSquares() {
  for (var i = 0; i < 2000; i++) {
    var $square = $('<div>').addClass('square');
    $square.appendTo('body');
  }
}

function listenToSquare() {
  $('body').mouseover(function(event){
    if ($(event.target).hasClass('square')) {
      var mode = $('input[name=tool]:checked').val();
      if (mode === 'stampTool' && movieImage) {
        $(event.target).css('background-image',
        `url(${movieImage})`)
        // stampcode added
      } else {
        var color = $('.brush').css('background-color');
        $(event.target).css('background-color', color);
      }
    }
  })
}

function prepareStampTool() {
  var settings = {
    url: 'http://omdbapi.com',
    data: {
      t: 'jaws',
      apikey:'2f6435d9'
    }
  }
  $.ajax(settings).done(function(movie) {
    movieImage = movie.Poster
  })
}
