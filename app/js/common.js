$(function() {

	// Custom JS
  $(".dropdown").hover(            
      function() {
    $(this).find(".mega-dropdown-tail").stop( true, false ).slideDown("fast"); 
    $('.dropdown-menu', this).stop( true, false ).slideDown("fast");
          $(this).toggleClass('open');        
          
      },
      function() {      
          $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
          $(this).toggleClass('open'); 
    $(this).find(".mega-dropdown-tail").stop( true, true ).slideUp("fast");
      }
  );

  $('#clients-flexslider').flexslider({
      animation: "slide",
      easing: "swing",
      animationLoop: true,
      itemWidth: 1,
      itemMargin: 1,
      minItems: 2,
      maxItems: 9,
      controlNav: false,
      directionNav: false,
      move: 2
  });
   var $menu = $("#menu").mmenu();
    var $icon = $("#my-icon");
    var API = $menu.data( "mmenu" );

    $icon.on( "click", function() {
       API.open();
    });

    API.bind( "open:finish", function() {
       setTimeout(function() {
          $icon.addClass( "is-active" );
       }, 100);
    });
    API.bind( "close:finish", function() {
       setTimeout(function() {
          $icon.removeClass( "is-active" );
       }, 100);
    });

    $('.mm-title').text("Меню");
});
