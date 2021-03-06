function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
// function current_page() {
//   let text = location.pathname
//     .split("/")[1]
//     .split("-")
//     .join(" ");
//   if (text == "") return;
//   document.querySelectorAll("menu .wrapper li").forEach((e, i) => {
//     if (e.textContent.toLowerCase().includes(text)) {
//       if (i <= 6) {
//         document
//           .querySelectorAll(".wrapper-list li")[0]
//           .classList.add("active");
//         document.querySelectorAll("header .active a").forEach(element => {
//           element.innerHTML = `<span style="background:transparent" class="active_span">${
//             document.querySelector("header .active a").textContent
//           }</span>`;
//         });
//       } else {
//         document
//           .querySelectorAll(".wrapper-list li")[1]
//           .classList.add("active");
//         document.querySelectorAll("header .active a").forEach(element => {
//           element.innerHTML = `<span style="background:transparent" class="active_span">${
//             document.querySelector("header .active a").textContent
//           }</span>`;
//         });
//       }
//     }
//   });
// }
function animation(clas, func) {
  let show = true;
  let offsetTop = $(clas).offset().top;
  let innerHeight = window.innerHeight;
  window.addEventListener("scroll", function(e) {
    if (show && offsetTop < $(window).scrollTop() + innerHeight) {
      show = false;
      func();
    }
  });
}
document.addEventListener("DOMContentLoaded", function(event) {
  // current_page();
  document.querySelector(".wrapper-trial-new p").style.left = "131px";
  if (
    !document.querySelector(".page-template-home-page") &&
    document.querySelectorAll(".rellax").length > 0 &&
    screen.width >= 1024
  ) {
    var rellax = new Rellax(".rellax", {
      speed: -15,
      center: true,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
  if (document.querySelectorAll(".active").length > 0) {
    document.querySelectorAll(".active a").forEach((element, index) => {
      element.innerHTML = `<span style="background:transparent" class="active_span">${element.textContent}</span>`;
    });
  }
  if (document.querySelectorAll(".slider").length > 0) {
    $(".slider").slick({
      arrows: false,
      dots: false,
      infinite: true,
      variableWidth: true,
      speed: 300,
      // centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToScroll: 1,
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            // autoplay: false,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            // autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1366,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    });

    //Code that state color
    document.querySelectorAll(".slider .block-in-slider[bg]").forEach(e => {
      e.style.background = `${e.getAttribute("bg")}`;
    });

    //Code that randomise color
    // document.querySelectorAll(".slider .block-in-slider").forEach(e => {
    //   e.style.background = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    //     0,
    //     255
    //   )}, ${randomInteger(0, 255)})`;
    // });
  }
  if (
    !document.querySelector(".page-template-contact-page") &&
    document.querySelectorAll(".stick-element").length > 0 &&
    getComputedStyle(document.querySelector(".stick-element")).getPropertyValue(
      "display"
    ) != "none"
  ) {
    document.querySelector(".stick-element").style.bottom = "unset";
    if ($(".elem").offset() != undefined) {
      document.querySelector(".stick-element").style.top = `${
        $(".elem").offset().top
      }px`;
    } else
      document.querySelector(".stick-element").style.top = `${
        $(".element").offset().top
      }px`;
    if ($(".elem").offset() != undefined) {
      document.querySelector(".stick-element").style.top = `${
        $(".elem").offset().top
      }px`;
    } else {
      document.querySelector(".stick-element").style.top = `${
        $(".element").offset().top
      }px`;
    }
  }
  if (document.querySelectorAll(".element-visible").length > 0) {
    $(".element-visible").slick({
      dots: false,
      infinite: true,
      prevArrow:
        '<img class="prev-arrow arrow-slick-slider" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNDMzIDE1Ljk5MkwyMi42OSA1LjcxMmMuMzkzLS4zOS4zOTMtMS4wMyAwLTEuNDItLjM5My0uMzktMS4wMy0uMzktMS40MjMgMGwtMTEuOTggMTAuOTRjLS4yMS4yMS0uMy40OS0uMjg1Ljc2LS4wMTUuMjguMDc1LjU2LjI4NC43N2wxMS45OCAxMC45NGMuMzkzLjM5IDEuMDMuMzkgMS40MjQgMCAuMzkzLS40LjM5My0xLjAzIDAtMS40MmwtMTEuMjU3LTEwLjI5IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIwLjgiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==">',
      nextArrow: `<img class="second-arrow arrow-slick-slider" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNzIyIDQuMjkzYy0uMzk0LS4zOS0xLjAzMi0uMzktMS40MjcgMC0uMzkzLjM5LS4zOTMgMS4wMyAwIDEuNDJsMTEuMjgzIDEwLjI4LTExLjI4MyAxMC4yOWMtLjM5My4zOS0uMzkzIDEuMDIgMCAxLjQyLjM5NS4zOSAxLjAzMy4zOSAxLjQyNyAwbDEyLjAwNy0xMC45NGMuMjEtLjIxLjMtLjQ5LjI4NC0uNzcuMDE0LS4yNy0uMDc2LS41NS0uMjg2LS43NkwxMC43MiA0LjI5M3oiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">`,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true
    });
    // $(".element-visible").slick({
    //   adaptiveHeight: true,
    //   dots: false,
    //   infinite: true,
    //   slidesToShow: 1,
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         vertical: true,
    //         adaptiveHeight: true
    //       }
    //     },
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         vertical: true,
    //         adaptiveHeight: true
    //       }
    //     }
    //   ]
    // });
  }
  if (
    document.querySelectorAll(".page-template-start-a-trial-page").length > 0
  ) {
    var trial = new Rellax(".rellax-trial", {
      speed: -15,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function() {
        if (!!document.querySelector(".page-template-start-a-trial-page")) {
          $(".sustrac").css(
            "transform",
            `${$(".sustrac").css("transform") + " scale(1)"}`
          );
          $(".trazado").css(
            "transform",
            `${$(".trazado").css("transform") + " scale(-1, -1)"}`
          );
        }
      }
    });

    // document.querySelector(".wrapper-trial-new").style.display="none";
    if (screen.width < 720) {
      $(".progress-ring__circle").attr("r", "13");
      $(".progress-ring__circle").attr("stroke-width", "2");
    } else {
      $(".progress-ring__circle").attr("r", "17");
      $(".progress-ring__circle").attr("stroke-width", "4");
    }
    function startProgressbar() {
      clearTimeout(tick);
      isPause = false;
      tick = setInterval(interval, 20);
      $rbar.fadeIn("slow");
    }
    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $rbar.css({
          strokeDasharray: rlen,
          strokeDashoffset: rlen * (1 - percentTime / 100)
        });
        if (percentTime >= 100) {
          $slick.slick("slickNext");
          percentTime = 0;
          startProgressbar();
        }
      }
    }
    $(".trial-section .head .wrap").slick({
      rows: 0,
      arrows: false,
      dots: false,
      autoplaySpeed: 5000,
      speed: 500,
      adaptiveHeight: true,
      autoplay: true,
      cssEase: "linear"
    });

    let time = 2;
    let $slick,
      isPause,
      tick,
      percentTime = 0;
    let $rbar = $(".progress-ring__circle");
    let rlen = 2 * Math.PI * $rbar.attr("r");
    $slick = $(".trial-section .head .wrap");
    $slick.on({
      mouseenter: function() {
        isPause = true;
      },
      mouseleave: function() {
        isPause = false;
        startProgressbar();
      },
      touchstart: function() {
        isPause = true;
      },
      touchmove: function() {
        isPause = false;
        $slick.slick("slickNext");
        $rbar.fadeOut("slow");
        percentTime = 0;
      },
      touchend: function() {
        isPause = false;
        $rbar.fadeOut("slow");
        percentTime = 0;
        startProgressbar();
      },
      mousedown: function() {
        $rbar.fadeOut("slow");
        percentTime = 0;
      }
    });
    startProgressbar();
    $(".dropbtn").click(function(e) {
      let this_element = e.currentTarget.parentNode.children[1];
      if (e.currentTarget.parentNode.children[1].classList.contains("show")) {
        e.currentTarget.parentNode.children[1].classList.remove("show");
      } else e.currentTarget.parentNode.children[1].classList.toggle("show");
      if (document.querySelectorAll(".show").length > 1) {
        document.querySelectorAll(".show").forEach(e => {
          if (e != this_element) e.classList.remove("show");
        });
      }
    });
    $(".dropdown-content a").click(function(e) {
      console.log();
      let img =
        e.currentTarget.parentElement.parentElement.children[0].children[0]
          .outerHTML;
      e.currentTarget.parentElement.parentElement.children[0].textContent =
        e.target.textContent;
      e.currentTarget.parentElement.parentElement.children[0].innerHTML += img;
    });
    window.onclick = function(event) {
      if (
        !event.target.matches(".dropbtn") &&
        !event.target.matches(".dropbtn img")
      ) {
        $(".show").removeClass("show");
      }
    };
  }
  if (document.querySelectorAll(".page-template-pricing-page").length > 0) {
    if (screen.width < 720) {
      $(".progress-ring__circle").attr("r", "13");
      $(".progress-ring__circle").attr("stroke-width", "2");
    } else {
      $(".progress-ring__circle").attr("r", "17");
      $(".progress-ring__circle").attr("stroke-width", "4");
    }
    function startProgressbar() {
      clearTimeout(tick);
      isPause = false;
      tick = setInterval(interval, 20);
      $rbar.fadeIn("slow");
    }
    function interval() {
      if (isPause === false) {
        percentTime += 1 / (time + 0.1);
        $rbar.css({
          strokeDasharray: rlen,
          strokeDashoffset: rlen * (1 - percentTime / 100)
        });
        if (percentTime >= 100) {
          $slick.slick("slickNext");
          percentTime = 0;
          startProgressbar();
        }
      }
    }
    $(".slider-container").slick({
      rows: 0,
      arrows: false,
      dots: false,
      fade: true,
      autoplaySpeed: 5000,
      speed: 500,
      adaptiveHeight: true,
      autoplay: true,
      cssEase: "linear"
    });

    let time = 2;
    let $slick,
      isPause,
      tick,
      percentTime = 0;
    let $rbar = $(".progress-ring__circle");
    let rlen = 2 * Math.PI * $rbar.attr("r");
    $slick = $(".slider-container");
    $slick.on({
      mouseenter: function() {
        isPause = true;
      },
      mouseleave: function() {
        isPause = false;
        startProgressbar();
      },
      touchstart: function() {
        isPause = true;
      },
      touchmove: function() {
        isPause = false;
        $slick.slick("slickNext");
        $rbar.fadeOut("slow");
        percentTime = 0;
      },
      touchend: function() {
        isPause = false;
        $rbar.fadeOut("slow");
        percentTime = 0;
        startProgressbar();
      },
      mousedown: function() {
        $rbar.fadeOut("slow");
        percentTime = 0;
      }
    });
    startProgressbar();
    // if(screen.width<1024){
    //   document.querySelector(".sticky-element").style.height=`${$(".block-with-text-content").outerHeight()+Number(getComputedStyle(document.querySelector(".sticky-element")).getPropertyValue(
    //     "padding-top"
    //   ).split("px")[0])+(-Number(getComputedStyle(document.querySelector(".sticky-element")).getPropertyValue(
    //     "top"
    //   ).split("px")[0]))}px`;
    // }else  document.querySelector(".sticky-element").style.height=`${$(".block-with-text-content").outerHeight()+Number(getComputedStyle(document.querySelector(".sticky-element")).getPropertyValue(
    //   "padding-top"
    // ).split("px")[0])}px`;
  }
  if (document.querySelectorAll(".page-template-home-page").length > 0) {
    document.querySelector("html").style.overflowX = "hidden";
    var rellax = new Rellax(".rellax", {
      speed: -5,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function(positions) {
        // scale(1.5) scale(3)
        if (!!document.querySelector(".page-template-home-page")) {
          if (
            screen.width >= 320 &&
            screen.width >= 720 &&
            screen.width >= 1366
          ) {
            $(".block-line").css(
              "transform",
              `${$(".block-line").css("transform") + " scale(1)"}`
            );
            $(".line1").css(
              "transform",
              `${$(".line1").css("transform") + " scale(1.5)"}`
            );
            // $(".line2").css("transform",`${$(".line2").css("transform")+" scale(3)"}`)
          }
          if (screen.width >= 1024 && screen.width <= 1366) {
            $(".line1").css(
              "transform",
              `${$(".line1").css("transform") + " scale(1.5)"}`
            );
          }
          if (
            screen.width >= 320 &&
            screen.width <= 720 &&
            screen.width <= 1366
          ) {
            $(".block-line").css(
              "transform",
              `${$(".block-line").css("transform") + " scale(0.65)"}`
            );
            $(".block-line2").css(
              "transform",
              `${$(".block-line2").css("transform") + " scale(0.8)"}`
            );
            $(".block-line4").css(
              "transform",
              `${$(".block-line4").css("transform") +
                " scale(-0.65, -0.65) rotate(180deg)"}`
            );
          }
          if (screen.width >= 720 && screen.width < 1024) {
            $(".line1").css(
              "transform",
              `${$(".line1").css("transform") + " scale(1.25)"}`
            );
          }
        }
      }
    });
    var BlockLine3 = new Rellax(".rellax-block", {
      speed: -3,
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
      callback: function() {
        if (!!document.querySelector(".page-template-home-page")) {
          if (
            screen.width >= 320 &&
            screen.width >= 720 &&
            screen.width >= 1366
          ) {
            $(".block-line3").css(
              "transform",
              `${$(".block-line3").css("transform") +
                " rotate(96deg) scale(4)"}`
            );
            $(".line2").css(
              "transform",
              `${$(".line2").css("transform") + " scale(3)"}`
            );
          }
          if (
            screen.width >= 320 &&
            screen.width <= 720 &&
            screen.width <= 1366
          ) {
            $(".block-line3").css(
              "transform",
              `${$(".block-line3").css("transform") +
                " rotate(69deg) scale(3.3)"}`
            );
          }
          if (screen.width >= 720 && screen.width < 1024) {
            $(".block-line3").css(
              "transform",
              `${$(".block-line3").css("transform") +
                " rotate(90deg) scale(5)"}`
            );
            $(".line2").css(
              "transform",
              `${$(".line2").css("transform") + " scale(2.5)"}`
            );
          }
          if (screen.width >= 1024 && screen.width < 1366) {
            $(".block-line3").css(
              "transform",
              `${$(".block-line3").css("transform") +
                " rotate(67deg) scale(4)"}`
            );
            $(".line2").css(
              "transform",
              `${$(".line2").css("transform") + " scale(3)"}`
            );
          }
        }
      }
    });
    animation(".block-about-statistik", function() {
      $(".block-about-statistik .counter").spincrement({
        from: 1,
        duration: 4000,
        complete: function(e) {
          document
            .querySelectorAll(".block-about-statistik .counter")
            .forEach(e => {
              if (!e.textContent.includes("+")) {
                e.textContent += "+";
              }
            });
        }
      });
    });
    //recursion function of  type animation
    function type(index, stop) {
      let increment = index + 1;
      if (stop == 1) {
        let active = typer(".banner-photo .acitve")
          .cursor({ block: false, blink: "hard", color: "red" })
          .line(
            document.querySelectorAll(".for-typer span")[index].textContent,
            {
              min: 30,
              max: 150
            }
          );
        return;
      }
      let active = typer(".banner-photo .acitve")
        .cursor({ block: false, blink: "hard", color: "red" })
        .line(document.querySelectorAll(".for-typer span")[index].textContent, {
          min: 30,
          max: 150
        })
        .pause(1000)
        .back("all")
        .pause(1000)
        .end(function(el) {
          el.innerHTML = "";
          if (increment < stop) {
            type(increment, stop);
          } else {
            let new_active = typer(".banner-photo .acitve")
              .cursor({ block: false, blink: "hard", color: "red" })
              .line(
                document.querySelectorAll(".for-typer span")[0].textContent,
                {
                  min: 30,
                  max: 150
                }
              );
          }
          active.kill();
        });
    }
    let stop = document.querySelectorAll(".for-typer span").length; //index of element that might be the last
    type(0, stop);
  }
});

window.onload = function() {
  if (
    document.querySelectorAll(".sticky-element").length > 0 &&
    getComputedStyle(document.querySelector(".stick-element")).getPropertyValue(
      "display"
    ) != "none"
  ) {
    if (screen.width < 1024) {
      document.querySelector(".sticky-element").style.height = `${$(
        ".block-with-text-content"
      ).outerHeight() +
        Number(
          getComputedStyle(document.querySelector(".sticky-element"))
            .getPropertyValue("padding-top")
            .split("px")[0]
        ) +
        -Number(
          getComputedStyle(document.querySelector(".sticky-element"))
            .getPropertyValue("top")
            .split("px")[0]
        )}px`;
    } else
      document.querySelector(".sticky-element").style.height = `${$(
        ".block-with-text-content"
      ).outerHeight() +
        Number(
          getComputedStyle(document.querySelector(".sticky-element"))
            .getPropertyValue("padding-top")
            .split("px")[0]
        )}px`;
  }
  if (document.querySelectorAll(".page-template-home-page").length > 0) {
  }
};
