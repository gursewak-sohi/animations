// Init Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: -20,
  });
  
  $(function() {
  $("body").addClass("loaded");
  $("#button").click(function(){
      if ($("body").hasClass("page-one")) {
          $("body").removeClass("page-one");
          $("body").addClass("page-two");
          $(this).text("Next");
          
      }
      else if ($("body").hasClass("page-two")) {
          $("body").removeClass("page-two");
          $("body").addClass("page-three grad-svg");
          $(this).text("Next");
          var counter = 60;
          var interval = setInterval(function() {
              counter--;
              $(".counter h4").text(counter);
              // Display 'counter' wherever you want to display it.
              if (counter == 0) {
                  // Display a login box
                  clearInterval(interval);
              }
          }, 1000);
      }
      else {
          $("body").removeClass("grad-svg");
          $("body").addClass("success");
          setTimeout(function() {
              location.reload();
          }, 1000);
      }
  });

  $(".menu-icon").click(function(){
      if ($("body").hasClass("page-one")) {
          return false;
      }
      else if ($("body").hasClass("page-two")) {
          $("body").removeClass("page-two");
          $("body").addClass("page-one");
          $("#button").text("Get");
          
      }
      else {
          $("body").removeClass("page-three");
          $("body").removeClass("grad-svg");
          $("body").addClass("page-two");
          $("#button").text("Next");
      }
  }); 
  });