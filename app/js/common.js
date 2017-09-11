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
});
