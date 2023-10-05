(function() {

  "use strict";

  var menu = document.querySelector("#menu-nav");
  var toggle = document.querySelector("#menu-nav-toggle");
  var mask = document.createElement("div");
  var activeClass = "is-active";

  mask.classList.add("c-mask");
  document.body.appendChild(mask);


  toggle.addEventListener("click", function(e) {
    e.preventDefault();
    toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
  });


  mask.addEventListener("click", function() {
    deactivateMenu();
    console.log('click');
  });


  function activateMenu() {
    menu.classList.add(activeClass);
    toggle.classList.add(activeClass);
    mask.classList.add(activeClass);
  }

  
  function deactivateMenu() {
    menu.classList.remove(activeClass);
    toggle.classList.remove(activeClass);
    mask.classList.remove(activeClass);
  }

})();

// Features
$("div.features-post").hover(
  function() {
      $(this).find("div.content-hide").slideToggle("medium");
  },
  function() {
      $(this).find("div.content-hide").slideToggle("medium");
  }
);


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    console.log("Test", i)
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


// Gallery Image

var autorotate = true;
function rotate(el) {
  $(".stack .imagewrap.selected").removeClass("selected");
  el.addClass("selected");
  setTimeout(function () {
    $(".stack").prepend($(".stack .imagewrap.selected"));
    setTimeout(function () {
      $(".stack .imagewrap.selected").removeClass("selected");
    }, 2000);
  }, 2500);
}
function loadactions() {
  $("body")
    .off("click", ".stack .imagewrap:not(:first-child)")
    .on("click", ".stack .imagewrap:not(:first-child)", function () {
      $(".stack .imagewrap.selected").removeClass("selected");
      $(this).addClass("selected");
      setTimeout(function () {
        $(".stack").prepend($(".stack .imagewrap.selected"));
        setTimeout(function () {
          $(".stack .imagewrap.selected").removeClass("selected");
        }, 2000);
      }, 2500);
    });
}

$(function () {
  loadactions();
  if (autorotate == true) {
    setInterval(function () {
      rotate($(".stack .imagewrap:last-child"));
    }, 1000);
  }
});


// Counter
var counter = function() {
    $('.js-counter').countTo({
       formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

var counterWayPoint = function() {
  if ($('#pill-counter').length > 0 ) {
    $('#pill-counter').waypoint( function( direction ) {
                  
      if( direction === 'down' && !$(this.element).hasClass('animated') ) {
        setTimeout( counter , 100);         
        $(this.element).addClass('animated');
      }
    } , { offset: '90%' } );
  }
};

counterWayPoint();
counter();