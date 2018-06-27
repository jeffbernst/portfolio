function smoothScroll () {
  $('.about-link, .projects-link').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top-20
    }, 500)
    return false
  })
}

$(smoothScroll)
