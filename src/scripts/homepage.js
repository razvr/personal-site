import $ from 'jquery'

// another one:   http://manos.malihu.gr/jquery-image-panning/

export default function panning() {
  $('html').mousemove(function(e) {
    var mouseX = e.pageX - $('html').offset().left
    var mouseY = e.pageY - $('html').offset().top
    var totalX = $('html').width()
    var totalY = $('html').height()
    var centerX = totalX / 2
    var centerY = totalY / 2
    var shiftX = centerX - mouseX
    var shiftY = centerY - mouseY

    var startX = $('.jumbotron').width() / 2 - $('#focus').width() / 2
    var startY = $('.jumbotron').height() / 2 - $('#focus').height() / 2

    $('#focus').css('z-index')
    $('#focus').css({
      right: startX + shiftX / 15 + 'px',
      top: startY + shiftY / 45 + 'px',
    })
    // $('#focus').css('background-position-x', 50 - shiftX / 10 + '%')
    // $('#focus').css('background-position-y', 50 + shiftY / 10 + '%')

    $('.bg').css('background-position-x', 50 - shiftX / 40 + '%')
    $('.bg').css('background-position-y', 50 + shiftY / 80 + '%')
  })
};


