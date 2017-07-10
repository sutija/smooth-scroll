$(document).ready(function () {

  $('.fake').height($('.container').height());
  for (var i = 0; i < $('section').length; i++) {
    $('.nav').append('<a rel="' + i + '">' + i + '</a>');
  }

  $('.nav').on('click', function (e) {
    if ($(e.target).prop('tagName').toLowerCase() == 'a') {
      var index = $(e.target).attr('rel');
      var scrollTo = $('section').outerHeight() * index;
      $('.container').css({
        'transform': 'translate3d(0,-' + ($('section').height() * index) + 'px, 1px)'
      });
      $(window).scrollTop(scrollTo);
    }
  });

  $(window).scroll(function (e) {
    var pos = $(e.target).scrollTop();
    $('.container').css({
      'transform': 'translate3d(0,-' + pos + 'px, 1px)'
    });
  });

});