//This code generate listener of scrolling to create cute changer of .user-link

function scroll_event(e) {
  if(document.querySelectorAll(".page-template-start-a-trial-page").length<=0 && !((getComputedStyle(document.querySelector(".menu-about")).getPropertyValue(
    "display"
  ) != "none")|| (getComputedStyle(document.querySelector(".menu-teachers")).getPropertyValue(
    "display"
  ) != "none"))){
    document.querySelector(".wrapper-trial-new").style.display="";
     if (window.innerWidth >= 1024) {
    document.querySelector(".wrapper-trial-new").style.transition = "transform 0.6s";
    document.querySelector("aside").style.transition = "transform 0.6s";
    document.querySelector(".wrapper-trial-new p").style.transition = "all 0.6s";
   document.querySelector(".wrapper-trial-new").style.transform="translate(0,0%)";
   document.querySelector("aside").style.transform="translate(0, -200%)";
   document.querySelector(".wrapper-trial-new p").style.left="";
  }
  if (window.scrollY < 50 && window.innerWidth >= 1024) {
    document.querySelector(".wrapper-trial-new").style.transition = "transform 0.6s";
    document.querySelector("aside").style.transition = "transform 0.6s";
    document.querySelector(".wrapper-trial-new p").style.transition = "all 0.6s";
    document.querySelector(".wrapper-trial-new").style.transform="translate(0,100%)";
    document.querySelector("aside").style.transform="translate(0, 0)";
    document.querySelector(".wrapper-trial-new p").style.left="131px";
    }
  }
  if(((getComputedStyle(document.querySelector(".menu-about")).getPropertyValue(
    "display"
  ) != "none")|| (getComputedStyle(document.querySelector(".menu-teachers")).getPropertyValue(
    "display"
  ) != "none"))){
    document.querySelector("aside").style.transition="";
    document.querySelector("aside").style.transform="";
    document.querySelector(".wrapper-trial-new").style.display="none";
  }
}

window.addEventListener("scroll",scroll_event);
// 425px

//This code segment initialize listener of mouse on the element
//and generate menu on the dekstop
// document;
// document
//   .querySelector("header .wrapper-list")
//   .addEventListener("mouseover", function(event) {
//     if (event.target.tagName == "SPAN") {
//       return;
//     }
//     setTimeout(() => {
//       // event.stopPropagation();
//       //cleaning background in the .wrapper-list ul childs
//       document.querySelector(".wrapper-trial").style.display = "";
//       document.querySelectorAll(".wrapper-list ul li a").forEach(function(e) {
//         e.style.background = "";
//       });
//       document.querySelectorAll(".wrapper-list ul li ").forEach(function(e) {
//         e.style.background = "";
//       });
//       document.querySelector(".wrapper-list ul").style.background = "";
//       //if .hover-menu EXIST - remove him
//       if (!!document.querySelector(".hover-menu")) {
//         document.querySelector("header .wrapper").style.background = "";
//         document.querySelector("header").style.background = "";
//         event.target.style.background = "#33a7db";
//         document.querySelector(".wrapper-trial").style.display = "";
//         document.querySelectorAll(".hover-menu").forEach(function(e) {
//           e.style.display = "none";
//         });
//       }
//       //if li="Contact" - skip. Else - do
//       if (!(event.target.textContent == "Contact")) {
//         document.querySelector(".wrapper-trial").style.display = "none";
//         //Fixing error of ending from UL
//         if (event.target.tagName == "UL") {
//           document.querySelector(".wrapper-trial").style.display = "";
//           document
//             .querySelectorAll(".wrapper-list ul li a")
//             .forEach(function(e) {
//               e.style.background = "";
//             });
//         }
//         if (event.target.textContent == "About") {
//           document.querySelector(".menu-about").style.display = "flex";
//           document.querySelector(
//             ".hover-menu"
//           ).style.top = `${document.querySelector("header").offsetHeight -
//             1}px`;
//           event.target.style.background = "#7d56e9";
//           document.querySelector("header .wrapper").style.background =
//             "#9879ED";
//           document.querySelector("header").style.background = "#9879ED";
//           //Cleaning SECTION
//           //Listener, that check relocation from our creating section
//           //if it's true(we are relocating) we remove section
//           document
//             .querySelector(".menu-about")
//             .addEventListener("mouseleave", function(e) {
//               document.querySelector("header .wrapper").style.background = "";
//               document.querySelector("header").style.background = "";
//               event.target.style.background = "#33a7db";
//               document.querySelector(".menu-about").style.display = "none";
//               document.querySelector(".wrapper-trial").style.display = "";
//               document
//                 .querySelectorAll(".wrapper-list ul li a")
//                 .forEach(function(e) {
//                   e.style.background = "";
//                 });
//               document
//                 .querySelectorAll(".wrapper-list ul li")
//                 .forEach(function(e) {
//                   e.style.background = "";
//                 });
//             });
//         } else if (event.target.textContent == "Teachers") {
//           document.querySelector(".menu-teachers").style.display = "flex";
//           document.querySelector(
//             ".menu-teachers"
//           ).style.top = `${document.querySelector("header").offsetHeight -
//             1}px`;
//           document.querySelector("header .wrapper").style.background =
//             "#F16D94";
//           document.querySelector("header").style.background = "#F16D94";
//           event.target.style.background = "#EA4678";
//           //Cleaning SECTION
//           //Listener, that check relocation from our creating section
//           //if it's true(we are relocating) we remove section
//           document
//             .querySelector(".menu-teachers")
//             .addEventListener("mouseleave", function(e) {
//               document.querySelector("header .wrapper").style.background = "";
//               document.querySelector("header").style.background = "";
//               event.target.style.background = "#33a7db";
//               document.querySelector(".menu-teachers").style.display = "none";
//               document.querySelector(".wrapper-trial").style.display = "";
//               document
//                 .querySelectorAll(".wrapper-list ul li a")
//                 .forEach(function(e) {
//                   e.style.background = "";
//                 });
//               document
//                 .querySelectorAll(".wrapper-list ul li")
//                 .forEach(function(e) {
//                   e.style.background = "";
//                 });
//             });
//         }
//       }
//     }, 80);
//   });
document
  .querySelector("header .wrapper-list")
  .addEventListener("click", function(event) {
    if (event.target.tagName == "UL") {
      return
     }
    document.querySelector(".wrapper-trial-new").style.display="none";
    document.querySelector("aside").style.transition="";
    document.querySelector("aside").style.transform="";
    // if (event.target.tagName == "SPAN") {
    //   return;
    // }
    setTimeout(() => {
      event.stopPropagation();
      // cleaning background in the .wrapper-list ul childs
      document.querySelectorAll(".wrapper-list ul li a").forEach(function(e) {
        e.style.background = "";
      });
      document.querySelectorAll(".wrapper-list ul li ").forEach(function(e) {
        e.style.background = "";
      });
      document.querySelector(".wrapper-list ul").style.background = "";
      //if .hover-menu EXIST - remove him
      if (!!document.querySelector(".hover-menu")) {
        document.querySelector(".wrapper-trial-new").style.display="none";
        document.querySelector("header .wrapper").style.background = "";
        document.querySelector("header").style.background = "";
      }
      //if li="Contact" - skip. Else - do
      if (!(event.target.textContent == "Contact")) {
        if (event.target.textContent == "About") {
          document.querySelector(".menu-about").style.display = "flex";
          document.querySelector(
            ".hover-menu"
          ).style.top = `${document.querySelector("header").offsetHeight -
            1}px`;
          // event.target.style.background = "#7d56e9"; 
          document.querySelectorAll(".wrapper-list ul li")[0].style.background = "#7d56e9";
          document.querySelector("header .wrapper").style.background =
            "#9879ED";
          document.querySelector("header").style.background = "#9879ED";
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          document.addEventListener("click", function(e) {
            document.querySelector(".wrapper-trial-new").style.display="";
            document.querySelector("header .wrapper").style.background = "";
            document.querySelector("header").style.background = "";
            document.querySelectorAll(".wrapper-list ul li")[0].style.background = "#7d56e9";
            document.querySelector(".menu-about").style.display = "none";
            document
              .querySelectorAll(".wrapper-list ul li a")
              .forEach(function(e) {
                e.style.background = "";
              });
            document
              .querySelectorAll(".wrapper-list ul li")
              .forEach(function(e) {
                e.style.background = "";
              });
          });
        } else if (event.target.textContent == "Teachers") {
          document.querySelector(".menu-teachers").style.display = "flex";
          document.querySelector(
            ".menu-teachers"
          ).style.top = `${document.querySelector("header").offsetHeight -
            1}px`;
          document.querySelector("header .wrapper").style.background =
            "#F16D94";
          document.querySelector("header").style.background = "#F16D94";
          document.querySelectorAll(".wrapper-list ul li")[1].style.background = "#EA4678";
         
          //Cleaning SECTION
          //Listener, that check relocation from our creating section
          //if it's true(we are relocating) we remove section
          document.addEventListener("click", function(e) {
            document.querySelector(".wrapper-trial-new").style.display="";
            document.querySelector("header .wrapper").style.background = "";
            document.querySelector("header").style.background = "";
            document.querySelectorAll(".wrapper-list ul li")[1].style.background = "#33a7db"
            document.querySelector(".menu-teachers").style.display = "none";
            document
              .querySelectorAll(".wrapper-list ul li a")
              .forEach(function(e) {
                e.style.background = "";
              });
            document
              .querySelectorAll(".wrapper-list ul li")
              .forEach(function(e) {
                e.style.background = "";
              });
          });
        }
        }
     },80)
    //  $("header span").css("background","none")
    document.querySelectorAll("header span").forEach(e=>{
          e.style.background = "none";
      
    })
})
