function smoothScroll(target,duration){
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime){
    if(startTime == null ) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed,startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d){
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t *(t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}


var section1 = document.querySelector('.AA1');
var section2 = document.querySelector('.second_block');
var logoscroll = document.querySelector('.Logo');
var downscroll = document.querySelector('.downScroll');
// section1.addEventListener('click',function(){
//   smoothScroll('.second_block',1000);
// });
// downscroll.addEventListener('click',function(){
//   smoothScroll('.third_block',100);
//   console.log("c");
// });
// logoscroll.addEventListener('click',function(){
//   smoothScroll('.First_Block',8000);
// });

let click_countALien =0;

function openintro(){
  let aliean = document.querySelector(".birds1");
  let Rokect_fuel1 = document.querySelector(".rocket_fuel");
  let Rokect_fuel2 = document.querySelector(".rocket_fuel2");
  let First_b = document.querySelector(".first");
  let second_b = document.querySelector(".second");


  // console.log("1");
  if(click_countALien == 0){
    aliean.style.marginTop = "-40rem";
    Rokect_fuel1.style.marginTop = "-250px";
    Rokect_fuel2.style.top = "315px";
    First_b.style.opacity = "0";
    second_b.style.opacity = "1";
    Click_aliean.style.opacity= "0";
    click_countALien = 1;
  }
  else{
    aliean.style.marginTop = "0rem";
    Rokect_fuel1.style.marginTop = "0px";
    Rokect_fuel2.style.top = "313.5px";
    First_b.style.opacity = "1";
    second_b.style.opacity = "0";
    click_countALien = 0;
    Click_aliean.style.opacity= "1";

  }
}

function ProjectDetail(){
  let thd_blk = document.querySelector(".project-detail");
  let third_project = document.querySelector(".third_project");

  thd_blk.style.display = "none";
  third_project.style.display = 'block';

  third_project.style.marginTop = "0rem";

}

var First_project = document.querySelector(".first_project")
var Second_project = document.querySelector(".second_project")

function ProjectDetail1(){
  First_Block.style.display = "none";
  second_block_500.style.display = "none";
  third_block_500.style.display = "none";
  forth_block_500.style.display = "none";
  third_forth_block_500.style.display = "none";
  First_project.style.display = "block";
}
function Project_section1(){
  First_Block.style.display = "block";
  second_block_500.style.display = "block";
  third_block_500.style.display = "block";
  forth_block_500.style.display = "block";
  third_forth_block_500.style.display = "block";
  First_project.style.display = "none";
}

function ProjectDetail2(){
  First_Block.style.display = "none";
  second_block_500.style.display = "none";
  third_block_500.style.display = "none";
  forth_block_500.style.display = "none";
  third_forth_block_500.style.display = "none";
  Second_project.style.display = "block";
}
function Project_section2(){
  First_Block.style.display = "block";
  second_block_500.style.display = "block";
  third_block_500.style.display = "block";
  forth_block_500.style.display = "block";
  third_forth_block_500.style.display = "block";
  Second_project.style.display = "none";
}

function backProjetDetail(){
  let thd_blk = document.querySelector(".project-detail");
  let third_project = document.querySelector(".third_project");

  thd_blk.style.display = "block";
  third_project.style.display = 'none';
  // third_project.style.marginTop = "0rem";

}