

  //$("#top").mouseover(function(){
  //$("#main-logo").fadeOut(7000,function() {
   // $("#main-logo").fadeIn(3000,function() {
      //$("#header").fadeIn(2000,function() {
        //$("#header").fadeOut(1500, function () {
          //$(this).remove();
        //$("#header2").fadeIn(2000, function () {
          //$("#header2").fadeOut(2000, function() {
            //$(this).remove();
            //$("#header3").fadeIn(2000, function () {
              //$("#header3").fadeOut(2000);
            //});
          //});
        //});
      //});
 //   });
 // });
//});

  $(document).ready(function() {
  var menu = $('.centered-navigation-menu');
  var menuToggle = $('.centered-navigation-menu-button');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    menu.slideToggle(function(){
      if(menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  });
});

