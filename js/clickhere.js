;(function() {
    var throttle = function(type, name, obj) {
        var obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    throttle ("scroll", "optimizedScroll");
})();

var leftgear = document.getElementById("leftgear"),
rightgear = document.getElementById("rightgear");
letterOne = document.getElementById("letterOne");
letterTwo = document.getElementById("letterTwo");
letterThree = document.getElementById("letterThree");
letterFour = document.getElementById("letterFour");
letterFive = document.getElementById("letterFive");
letterSix = document.getElementById("letterSix");
letterSeven = document.getElementById("letterSeven");
letterEight = document.getElementById("letterEight");
letterNine = document.getElementById("letterNine");
letterTen = document.getElementById("letterTen");

window.addEventListener("optimizedScroll", function() {
    letterOne.style.transform = "rotate(+"+(window.pageYOffset+0)+"deg)";
    letterTwo.style.transform = "rotate(+"+(window.pageYOffset+12)+"deg)";
    letterThree.style.transform = "rotate(+"+(window.pageYOffset+24)+"deg)";
    letterFour.style.transform = "rotate(+"+(window.pageYOffset+36)+"deg)";
    letterFive.style.transform = "rotate(+"+(window.pageYOffset+48)+"deg)";
    letterSix.style.transform = "rotate(+"+(window.pageYOffset+60)+"deg)";
    letterSeven.style.transform = "rotate(+"+(window.pageYOffset+72)+"deg)";
    letterEight.style.transform = "rotate(+"+(window.pageYOffset+84)+"deg)";
    letterNine.style.transform = "rotate(+"+(window.pageYOffset+96)+"deg)";
    letterTen.style.transform = "rotate(+"+(window.pageYOffset+108)+"deg)";
});


$(window).on('scroll',function() {
    if (checkVisible($('#idsecond_block'))) {
        setTimeout(() => { 
        $('.ml6 .letters-1').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
          });
          ml.timelines["ml6"] = anime.timeline({loop: 1})
            .add({
              targets: '.ml6 .letter',
              translateY: ["1.3em", 0],
              translateZ: 0,
              duration: 1250,
              delay: function(el, i) {
                return 50 * i;
              }
            })
            .add({
              targets: '.ml6',
              opacity: 0,
              duration: 1000,
              easing: "easeOutExpo",
              delay: 1000
            })
          ml.timelines["welcome-border"] = anime.timeline({loop: 1})
          .add({
              targets: '.welcome-border',
              duration: 42000,
          
              opacity: 0,
              delay: 1000
            })
            ml.timelines["welcome-border-1"] = anime.timeline({loop: 1})
            .add({
              delay: 5000,
          
              targets: '.welcome-border-1',
              duration: 25000,
          
              opacity: 1
            })
            ml.timelines["myself"] = anime.timeline({loop: 1})
            .add({
              delay: 5000,
          
              targets: '.myself',
              duration: 25000,
          
              opacity: 1
            })
            ;}, 1300);
        $(window).off('scroll');
    }
  });


  // ForthBlockId.forEach(link => {
  //   $(window).on('scroll',function() {
  //     console.log("ag");
      
  //       if (checkVisible($('#idForthBlock'))) {
  //         var string = "Achivements";
  //         var str = string.split("");
  //         var el = document.getElementById('str');
  //         (function animate() {
  //         str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
  //         var running = setTimeout(animate, 90);
  //         })();
  //       }
  //     });
  // });
function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}




$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


