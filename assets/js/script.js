// || NAVBAR/BURGER MENU ||
let burger = document.getElementById("burger-button");

burger.addEventListener("click", e => {
  e.preventDefault();
  document.body.classList.toggle("open");
  burger.classList.toggle("open");
});

//  || Parallax ||
var rellax = new Rellax('.rellax');
// , {
//   breakpoints:[361, 1143],
//   speed: -2,
//   center: true,
//   wrapper: null,
//   round: true,
//   vertical: true,
//   horizontal: false
// }
// );


//  || Parallax Sarnie ||
// Pass an array of breakpoints. Each breakpoint value represents the resolution for mobile, tablet, desktop respectively. 
//default JS Setting
// var rellax = new Rellax('.rellax', {
//     breakpoints:[576, 768, 1201]

// });


 //Set wrapper to .custom-element instead of the body
//  position of parallax elements is determined via the scroll position of the body. 
// Passing in the wrapper property in the settings block will tell Rellax to watch that element instead.
//  var rellax = new Rellax('.rellax', {
//     wrapper:'.custom-element'
//   });