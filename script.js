function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
locomotiveAnimation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function mousemoveEvent(){
var circel = document.getElementById("cursor");

document.addEventListener("mousemove", function (dets) {
    gsap.to(circel, {
        left: dets.x,
        top: dets.y,
        duration: 0.3,
        
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

    // Adjust the z-index based on whether the cursor is over a 'box' element
    if (isOverBox) {
        circel.style.zIndex = -1; // Cursor goes below 'box' elements
    } else {
        circel.style.zIndex = 10;  // Cursor is above all other elements
    }
});



// var aElements = document.querySelectorAll(".navbar ul a");
// aElements.forEach(function(aElement) {
//     aElement.addEventListener("mousemove", function () {
//         gsap.to(circel, {
//             border: "1px solid black",
//             backgroundColor: 'transparent',
//             duration:.3,
//             transform: "scale(3)"
//         });
//     });

//     aElement.addEventListener("mouseleave", function () {
//         gsap.to(circel, {
//             border: 'none',
//             duration:.3,
//             transform: "scale(1)"
//         });
//     });
// });
 

var frame = document.querySelector(".title");
        
    

  frame.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(6)"
  });

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  var dims = frame.getBoundingClientRect();
  var xstart = dims.x;
  var ystart = dims.y;
  var xend = dims.x + dims.width;
  var yend = dims.y + dims.height;
  var zerooneX = gsap.utils.mapRange(xstart, xend, 0, 1, dets.x);
  var zerooneY = gsap.utils.mapRange(ystart, yend, 0, 1, dets.y);

  gsap.to(frame, {
      x: lerp(-50, 50, zerooneX),
      y: lerp(-50, 50, zerooneY)
  });
});



// frame.addEventListener("mouseenter", function () {

//       gsap.to(".title span", {
//           color: "blue",
//           duration: .1
//       })
//   });


  frame.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
          transform: "translate(-50%,-50%) scale(1)"
      })
      gsap.to(".title span", {
          // color: "black",
          duration: .1
      })
      gsap.to(frame, {
          x: 0,
          y:0

      });


  });



}
mousemoveEvent();

function textAnimation() {
    const text = document.querySelector(".sec-text");
  
    function textLoad() {
      setTimeout(function() {
        text.textContent = "Web Developer.";
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
  
    gsap.to(".header", {
      backgroundColor: "#f4f5f6",
      boxShadow: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
      scrollTrigger: {
        trigger: ".header",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
        // markers: true
      },
    });

  






