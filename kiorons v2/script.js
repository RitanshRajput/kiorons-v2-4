function inint() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
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
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // --- RED PANEL ---
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: "#main",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: (self) => console.log(self.direction),
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- ORANGE PANEL ---
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
    scaleX: 0,
    transformOrigin: "left center",
    ease: "none",
  });

  // --- PURPLE/GREEN PANEL ---
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".purple",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    },
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
inint();
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
});
function loading() {
  var tl = gsap.timeline();
  tl.from("#loader h1", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.to("#loader h1", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from("nav  ", {
    y: -10,
    opacity: 0,
    delay: -0.2,
    stagger: 0.1,
    // duration: 0.5,
  });
  tl.from("#hero span", {
    y: -50,
    delay: -0.3,
    opacity: 0,
    stagger: 0.1,
  });
  tl.from("#part3 img", {
    y: 100,
    opacity: 0,
    delay: -0.4,
    duration: 1,
  });
}
loading();

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero #part1",
    scroller: "#main",
    markers: true,
    start: "top -180%",
    end: "top -198%",
    scrub: 1,
  },
});

tl2.to("#main ", {
  backgroundColor: "#000",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero #part1",
    scroller: "#main",
    markers: true,
    start: "top -280%",
    end: "top -290",
    scrub: 1,
  },
});

tl3.to("#main ", {
  backgroundColor: "#fff",
});

var project = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3 span",
    scroller: "#main",
    start: "top 64%",
    end: "top 30%",
    markers: true,
    scrub: 1,
  },
});

project.from("#page3 span", {
  y: 40,
  opacity: 0,
  stagger: 0.1,
});
project.from("#img-hold1, #img-hold2", {
  y: 40,
  opacity: 0,
  stagger: 0.3,
});
gsap.from("#img-hold3", {
  opacity: 0,
  y: 40,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#img-hold3",
    scroller: "#main",
    markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});
gsap.from("#img-hold4, #img-hold5", {
  opacity: 0,
  y: 40,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#img-hold5",
    scroller: "#main",
    markers: true,
    start: "top 70%",
    end: "top 60%",
    scrub: 1,
  },
});

var h1text = document.querySelector("#pitch h3").textContent;
var splitText = h1text.split("");
var clutter = "";
splitText.forEach(function (elem) {
  clutter += `<span>${elem}</span>`;
});
document.querySelector("#pitch h3").innerHTML = clutter;

gsap.to("#pitch span", {
  color: "#f5f5f7",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#pitch h3",
    scroller: "#main",
    markers: true,
    start: "top 70%",
    end: "top 10%",
    scrub: 0.1,
  },
});

gsap.from("#content span", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#content span",
    scroller: "#main",
    markers: true,
    start: "top 80%",
    end: "top 40%",
    scrub: 0.1,
  },
});

gsap.to("#content h1", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    markers: true,
    start: "top 100%",
    end: "top 85%",
    scrub: 0.1,
  },
});

gsap.from(".service1", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".service1",
    scroller: "#main",
    markers: true,
    start: "top 55%",
    end: "top 40%",
    scrub: 0.1,
  },
});
gsap.from(".service2", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".service2",
    scroller: "#main",
    markers: true,
    start: "top 55%",
    end: "top 40%",
    scrub: 0.1,
  },
});
gsap.from(".service3", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".service3",
    scroller: "#main",
    markers: true,
    start: "top 55%",
    end: "top 40%",
    scrub: 0.1,
  },
});
gsap.from(".service4", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".service4",
    scroller: "#main",
    markers: true,
    start: "top 55%",
    end: "top 40%",
    scrub: 0.1,
  },
});

gsap.from("#logos img", {
  opacity: 0,
  y: 40,
  stagger: 0.3,
  scrollTrigger: {
    trigger: "#logos ",
    scroller: "#main",
    markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});
//swiper
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});
gsap.from("#blogs span", {
  opacity: 0,
  y: 100,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#blogs ",
    scroller: "#main",
    markers: true,
    start: "top 80%",
    end: "top 50%",
    scrub: 1,
  },
});
