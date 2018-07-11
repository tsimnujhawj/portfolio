$(document).ready(function() { // DOCUMENT READY OPENING

// SMOOTH SCROLLING
    let scrollLink = $(".scroll");
    scrollLink.click(function(e) {
      e.preventDefault();
      $("body, html").animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      let scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        let sectionOffset = $(this.hash).offset();
        
        if (sectionOffset <= scrollbarLocation) {
          $(this).parent().addClass("active");
          $(this).parent().siblings().removeClass("active");
        }
      })
      
    })
    
}); // DOCUMENT READY CLOSING