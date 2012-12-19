$(document).ready(function() {
  $(".dropdown").click(function (){
    menu = $(".menu")
    if(menu.is(":visible")) {
      $(".menu").fadeOut('fast')
    }
    else {
      $(".menu").fadeIn('fast')
    }
  })
})
