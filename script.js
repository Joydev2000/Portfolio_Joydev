document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector(".toggle");
  var one = 0;
 
  toggle.addEventListener("change", function(){
    
    if(one == 0){
      one = 1;
      document.documentElement.style.setProperty('--background', '#212428');
      document.documentElement.style.setProperty('--boxBackground', 'linear-gradient(145deg, #1e2024, #23272b)');
      document.documentElement.style.setProperty('--boxshadow', '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e');
      document.documentElement.style.setProperty('--color', '#878e99');
      document.documentElement.style.setProperty('--headingColor', '#c4cfde');
      document.documentElement.style.setProperty('--hBoxBackground', 'linear-gradient(to right bottom, #212428, #16181c)');
      document.documentElement.style.setProperty('--timelineAfter', '#17191c');
      document.documentElement.style.setProperty('--skillbar', 'linear-gradient(145deg, #f02981 0%, #c81901 100%)');
      document.querySelector(".herocontent").style.background = "linear-gradient(110deg, #1e2024, #23272b)";
      document.documentElement.style.setProperty('--portfolioTab', 'linear-gradient(-145deg, #1e2024, #23272b)');
      document.documentElement.style.setProperty('--portfolioTabShadow', '10px 10px 19px #262a2e, -10px -10px 19px #1c1e22');
      document.documentElement.style.setProperty('--scrollbarBoxshadow', 'inset 0 0 5px rgb(64, 61, 61)');
      document.documentElement.style.setProperty('--formBackground', 'linear-gradient(110deg, #1e2024, #23272b)');
      document.documentElement.style.setProperty('--formBorder', '#878e99');
      document.documentElement.style.setProperty('--nameLebel', '#1F2125');
      document.documentElement.style.setProperty('--nuberLebel', '#212428');
      document.documentElement.style.setProperty('--boxIcon', '#ff014f');
      document.documentElement.style.setProperty('--btspan', '#c3cedd');
      document.documentElement.style.setProperty('--btspanhover', '#ff014f');
      document.documentElement.style.setProperty('--hr', '#121415');
    } 
    else {
      one = 0;
      document.documentElement.style.setProperty('--background', '#ECF0F3');
      document.documentElement.style.setProperty('--boxBackground', 'linear-gradient(145deg, #e2e8ec, #ffffff)');
      document.documentElement.style.setProperty('--boxshadow', '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff');
      document.documentElement.style.setProperty('--color', ' #3c3e41');
      document.documentElement.style.setProperty('--headingColor', '#1E2125');
      document.documentElement.style.setProperty('--hBoxBackground', 'linear-gradient(145deg, #ff014f, #d11414)');
      document.documentElement.style.setProperty('--timelineAfter', '#d9dee2');
      document.documentElement.style.setProperty('--skillbar', 'linear-gradient(145deg, #fff 0%,  #ff014f 100%)');
      document.querySelector(".herocontent").style.background = "linear-gradient(110deg, #e2e8ec, #ffffff)";
      document.documentElement.style.setProperty('--portfolioTab', 'linear-gradient(-145deg, rgb(226, 232, 236), rgb(255, 255, 255))');
      document.documentElement.style.setProperty('--portfolioTabShadow', '5px 5px 15px #ffffff, -5px -5px 15px  #D1D9E6');
      document.documentElement.style.setProperty('--scrollbarBoxshadow', 'inset 0 0 5px rgb(184, 183, 183)');
      document.documentElement.style.setProperty('--formBackground', 'linear-gradient(110deg, #e2e8ec, #ffffff)');
      document.documentElement.style.setProperty('--formBorder', '#d2dee7');
      document.documentElement.style.setProperty('--nameLebel', '#E4EAED');
      document.documentElement.style.setProperty('--nuberLebel', '#EEF2F4');
      document.documentElement.style.setProperty('--boxIcon', '#ECF0F3');
      document.documentElement.style.setProperty('--btspan', '#ff014f');
      document.documentElement.style.setProperty('--btspanhover', '#3c3e41');
      document.documentElement.style.setProperty('--hr', '#dce1e4');
     
    }
  });
});

gsap.to(".loader", {
 display:"none",
  
  delay: 5,
  duration: 1,
  ease: "power2.out"

 
});
var tl = gsap.timeline();
tl.from(".logo",{
  x: -100,
  opacity:0,
  duration :1,
  ease: "power2.out"
})
tl.from(".navbar ul a",{
  y : 50,
  opacity:0,
  duration :.8,
  ease: "power2.out",
  stagger: 0.2
})
tl.from(".container",{
  y : 60,
  opacity:0,
  duration :.8,
  ease: "power2.out",

})
tl.from(".text_con p ",{
  y :50,
  opacity:0,
  duration :.8,
  ease: "power2.out",
})


var tltwo = gsap.timeline();
tltwo.from(".image_content",{
 scale:0,
 delay:.8,
  opacity:0,
  duration :1,
  ease: "power2.out",
  stagger: 0.3
})
tltwo.from(".my_image",{
  scale:0,
   opacity:0,
   duration :1,
   ease: "power2.out",
   stagger: 0.3
 })
 tltwo.from(".frames .frame",{
  y :50,
  opacity:0,
  duration :.8,
  ease: "power2.out",
  stagger: 0.3
})
tltwo.from(".icon ul a",{
  y :50,
  opacity:0,
  duration :.8,
  ease: "power2.out",
  stagger: 0.3
})
tltwo.from(".toggle",{
  y:50,
   opacity:0,
   duration :1,
   ease: "power2.out",
   stagger: 0.3
 })

 






// function locomotiveAnimation() {
//     gsap.registerPlugin(ScrollTrigger);
  
//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".main"),
//       smooth: true,
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);
  
//     // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".main", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector(".main").style.transform
//         ? "transform"
//         : "fixed",
//     });
  
//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//   }
// locomotiveAnimation();

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });

function myfunction() {
  var one = document.querySelector(".header");
  var ypos = window.pageYOffset;
 
  if (ypos > 150) {
    one.style.position = "sticky";
    one.style.top = "0px";
    // Use getComputedStyle to retrieve the computed value of --boxBackground
    var boxBackground = getComputedStyle(document.documentElement).getPropertyValue('--boxBackground');
    var boxShadow = getComputedStyle(document.documentElement).getPropertyValue('--boxshadow');
    one.style.background = boxBackground;
    one.style.boxShadow = boxShadow;
    one.style.transition = ".5s ease all";
  }
  else {
    one.style.position = "relative";
    one.style.background = "Transparent";
    one.style.boxShadow = "none";
  }
}

window.onscroll = function () {
  myfunction();
};



function mousemoveEvent(){

  var circel = document.getElementById("cursor");
  const lerp = (x, y, a) => x * (1 - a) + y * a;
  var frames = document.querySelectorAll(".frame");
 
  var boxes = document.querySelectorAll(".boxun");
  var goal = document.querySelectorAll(".goal");


 
  window.addEventListener("mousemove", function (dets) {
    gsap.to(circel, {
      x: dets.x,
      y: dets.y,
      duration: .2,
      ease: Expo
    });

    var isOverBox = Array.from(document.querySelectorAll('.up')).some(up => {
      const boxRect = up.getBoundingClientRect();
      return (
        dets.clientX >= boxRect.left &&
        dets.clientX <= boxRect.right &&
        dets.clientY >= boxRect.top &&
        dets.clientY <= boxRect.bottom
      );
    });

   
    if (isOverBox) {
      circel.style.zIndex = -1; 
    } else {
      circel.style.zIndex = 10; 
    }

  });
  


  frames.forEach(frame => {

    frame.addEventListener("mousemove", function (dets) {

     

      var dims = frame.getBoundingClientRect();
      var xstart = dims.x;
      var ystart = dims.y;
      var xend = dims.x + dims.width;
      var yend = dims.y + dims.height;
      var zerooneX = gsap.utils.mapRange(xstart, xend, 0, 1, dets.clientX);
      var zerooneY = gsap.utils.mapRange(ystart, yend, 0, 1, dets.clientY);

      gsap.to(frame, {
        x: lerp(-50, 50, zerooneX),
        y: lerp(-50, 50, zerooneY)
      });

      gsap.to(circel, {
        scale: 6
      });
    });

    frame.addEventListener("mouseleave", function (dets) {
     
      gsap.to(frame, {
        x: 0,
        y: 0

      });
      gsap.to(circel, {
        scale: 1
      });
    });
  });

  boxes.forEach(box => {
    box.addEventListener("mousemove", function () {
      gsap.to(circel, {
        scale: 0
      });
    });

    box.addEventListener("mouseleave", function () {
      gsap.to(circel, {
        scale: 1
      });
    });


  });


  goal.forEach(goal => {
    goal.addEventListener("mousemove", function () {
      gsap.to(circel, {
        scale: 1.5,
        border: "1px solid #1E2125",
        backgroundColor: 'transparent'
      });
    });

    goal.addEventListener("mouseleave", function () {
      gsap.to(circel, {
        scale: 1,
        border: 'none',
        backgroundColor: "#c280a6d0"
      });
    });


  });

 
}
mousemoveEvent();



function textAnimation() {
    const text = document.querySelector(".sec-text");
  
    function textLoad() {
      setTimeout(function() {
        text.textContent = " " + "Web Developer.";
        text.style.color = "#ff014f";
      }, 0);
      setTimeout(function() {
        text.textContent = "Web Designer.";
        text.style.color = "#ff014f";
      }, 4000);
      setTimeout(function() {
        text.textContent = "Graphic Designer.";
        text.style.color = "#ff014f";
      }, 8000);
    }
  
    textLoad();
    setInterval(textLoad, 12000);
  }
textAnimation();
  
// gsap.to(".header", {
//   backgroundColor: "#f4f5f6",
//   duration: 1,
//   ease: "power2.inOut",
//   boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
//   scrollTrigger: {
//     trigger: ".header",
//     scroller: "body",
//     start: "top 0",
//     end: "top -5%",
//     scrub: true,
//     // markers: true
//   },
// });


function openWork(evt, devlopWork) {
  var i, thirdtabcontent, thirdtablinks;
  thirdtabcontent = document.getElementsByClassName("thirdtabcontent");
  for (i = 0; i < thirdtabcontent.length; i++) {
    thirdtabcontent[i].style.display = "none";
  }
  thirdtablinks = document.getElementsByClassName("thirdtablinks");
  for (i = 0; i < thirdtablinks.length; i++) {
    thirdtablinks[i].className = thirdtablinks[i].className.replace(" active", "");
  }
 var thirdElement = document.getElementById(devlopWork);
  thirdElement.style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("thirddefaultOpen").click();

// Initialize Swiper only once
var swiper;

function openSwiper(overlay, swiperev) {
  // Ensure the swiperev element is visible before initializing Swiper
  var swiperevElement = document.getElementById(swiperev);
  if (!swiperevElement) {
    console.error('Swiperev element not found');
    return;
  }

  swiperevElement.style.display = "block";

  document.body.style.overflow = 'hidden';

  // Hide all elements with class "overlaySwiper"
  var tabcontentSW = document.getElementsByClassName("overlaySwiper");
  for (var a = 0; a < tabcontentSW.length; a++) {
    tabcontentSW[a].style.display = "none";
  }

  // Show the specific swiperev element
  swiperevElement.style.display = "block";

  // Show the overlay
  var overlayElement = document.getElementById(overlay);
  if (!overlayElement) {
    console.error('Overlay element not found');
    return;
  }
  overlayElement.style.display = "block";

  // Add event listener to the overlay element
  overlayElement.addEventListener('click', function () {
    // Hide both overlay and overlaySwiper
    document.body.style.overflow = 'auto';
    overlayElement.style.display = "none";

    // Iterate through the collection and hide each element
    for (var a = 0; a < tabcontentSW.length; a++) {
      tabcontentSW[a].style.display = "none";
    }

    // Destroy the existing Swiper instance
    if (swiper) {
      swiper.destroy();
    }
  });

  // Initialize Swiper inside the swiperev element
  swiper = new Swiper(swiperevElement.querySelector('.swiper-container'), {
    slidesPerView: 1,
    spaceBetween: 20,
    effect: 'fade',
    loop: true,
    speed: 300,
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var modal = document.getElementById('modal');

  // global handler
  document.addEventListener('click', function (e) {
    if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
    }
  });

  var modalClose = document.getElementById('modal-close');
  modalClose.addEventListener('click', function () {
    modal.style.display = "none";
  });
}


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   var cityElement = document.getElementById(cityName);
    cityElement.style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();
  

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const targetId = button.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// document.addEventListener("DOMContentLoaded",function(){
//   document.getElementById("cont").addEventListener('click', function(){
//     document.getElementsByClassName("fifthpage")[0].scrollIntoView({ behavior: 'smooth'});
//   })

// });

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("number").addEventListener("wheel",
    function (event) {
        event.preventDefault();
        
    });

});

// document.addEventListener("DOMContentLoaded", function(){
//   let open = document.getElementById("open");
//   let close = document.getElementById("close");
//   var menu = document.querySelector(".mobile_menu");
//   var newwList = document.querySelectorAll(".new");

//   open.addEventListener("click", () => {
//     menu.style.transform = "translateX(0px)";
//     menu.style.transition = "1s ease";
 
//     document.body.style.overflow = 'hidden';
//   });

//   close.addEventListener("click", () =>  {
//     menu.style.transform = "translateX(100%)";
//     menu.style.transition = "1s ease";
//     document.body.style.overflow = 'auto';
//   });

//   newwList.forEach((neww) => {
//     neww.addEventListener("click", function () {
//       menu.style.transform = "translateX(100%)";
//       menu.style.transition = ".5s ease";
//       document.body.style.overflow = 'auto';
//     });
   
//   });
// });


$(document).ready(function () {
  var open = $("#open");
  var close = $("#close");
  var menu = $(".mobile_menu");
  var newwList = $(".new");
  open.click(function () {
    menu.css({ "transform": "translateX(0px)", "transition": "1s ease" });
    $("body").css("overflow", "hidden");
  });

  close.click(function () {
    menu.css({ "transform": "translateX(100%)", "transition": "1s ease" });
    $("body").css("overflow", "auto");
  });

  newwList.click(function () {
    menu.css({ "transform": "translateX(100%)", "transition": ".5s ease" });
    $("body").css("overflow", "auto");
  });
});

// $(document).ready(function() {
//   if ($(window).width() <= 600) {
//       $(".left").attr("data-aos", "slide-left");
//   }

//    if($(window).width() <= 600) {
//       $(".right").attr("data-aos", "slide-right")
//     }
   
  
// });

$(document).ready(function() {
  if ($(window).width() <= 715) {
      $(".left, .right").attr("data-aos-delay", "0");
  }
});








