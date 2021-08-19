let mouseCursor = document.querySelector(".cursor");
let fireFly = document.querySelector(".firefly");
let circle2 = document.querySelectorAll(".circle-r1");
const first_block = document.querySelectorAll(".First_Block");

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

circle2.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.remove("cursor");
    });
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.add("cursor");

    });
});


first_block.forEach(link => {
    link.addEventListener('mouseenter', e => {
        mouseCursor.style.opacity = "1";
    });

    link.addEventListener('mouseenter', e => {
        mouseCursor1.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor2.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor4.style.opacity = "0";
    });
});

let aliean_hover = document.querySelectorAll(".birds1");
let Click_aliean = document.querySelector(".Click_aliean");

// aliean_hover.forEach(link => {
//     link.addEventListener('mouseenter',e => {
//         if(click_countALien == 0){
//           Click_aliean.style.opacity = "1";
//         }
//     });
//     link.addEventListener('mouseleave',e => {
//           Click_aliean.style.opacity = "0";
//     });
// });


let mouseCursor1 = document.querySelector(".cursor_follow");
let allff = document.querySelector(".allfirefly");
const second_block = document.querySelectorAll(".second_block");

window.addEventListener('mousemove', cursor1);

function cursor1(e) {
    mouseCursor1.style.top = e.pageY + "px";
    mouseCursor1.style.left = e.pageX + "px";
}
second_block.forEach(link => {
    link.addEventListener('mouseenter', e => {
        mouseCursor1.style.opacity = "1";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor2.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        allff.style.opacity = "1";
    });
    link.addEventListener('mouseleave', e => {
        allff.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor4.style.opacity = "0";
    });
    
});

let mouseCursor2 = document.querySelector(".cursor_follow1");
const third_block = document.querySelectorAll(".third_block");


window.addEventListener('mousemove', cursor2);

function cursor2(e) {
    mouseCursor2.style.top = e.pageY + "px";
    mouseCursor2.style.left = e.pageX + "px";
}
third_block.forEach(link => {
    link.addEventListener('mouseenter', e => {
        mouseCursor2.style.opacity = "1";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor1.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor4.style.opacity = "0";
    });
});


let mouseCursor4 = document.querySelector(".cursor_follow4");
const forth_block = document.querySelectorAll(".forth_block");


window.addEventListener('mousemove', cursor4);

function cursor4(e) {
    mouseCursor4.style.top = e.pageY + "px";
    mouseCursor4.style.left = e.pageX + "px";
}
forth_block.forEach(link => {
    link.addEventListener('mouseenter', e => {
        mouseCursor4.style.opacity = "1";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor2.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor.style.opacity = "0";
    });
    link.addEventListener('mouseenter', e => {
        mouseCursor1.style.opacity = "0";
    });
});


const asternod = document.querySelectorAll(".birds1");
let fuel1 = document.querySelector(".rocket_fuel");
let fuel2 = document.querySelector(".rocket_fuel2");

const lpanel = document.querySelectorAll(".leftScroll");
let leftScroll = document.querySelector(".leftScroll");
let leftpanel = document.querySelector(".lpanel");
let stoplpanel = document.querySelector(".stoplpanel");
let movinglpanel1 = document.querySelector(".movinglpanel1");
let movinglpanel = document.querySelector(".movinglpanel");
let leftscroll = document.querySelector(".leftscroll");
let project_block = document.querySelector("#services");
let project_block1 = document.querySelector("#services1");

var a = 1;
asternod.forEach(link => {
    link.addEventListener('mouseenter',e => {
        fuel1.style.display = "block";
        fuel2.style.display = "block";

    });
    link.addEventListener('mouseleave',e => {
        if(click_countALien == 1){
            fuel1.style.display = "none";
            fuel2.style.display = "none";
        }

    });
});

lpanel.forEach(link => {
    link.addEventListener('mouseenter',e => {
        leftScroll.style.opacity = "0";
        leftpanel.style.background = "rgba(252, 252, 252, 0.109)";
        stoplpanel.style.opacity = "1";
        movinglpanel1.style.opacity = "1";
    });
    link.addEventListener('click',e =>{
        if(a == 1){
            leftpanel.style.marginLeft = "-240px";
            stoplpanel.style.marginLeft = "340px";
            stoplpanel.style.borderRight = "thick solid rgba(252, 252, 252, 0)";
            stoplpanel.style.borderBottom = "thick solid rgba(252, 252, 252, 0)";
            stoplpanel.style.borderTop = "1px solid #fff";
            stoplpanel.style.borderLeft = "1px solid #fff";
            movinglpanel.style.marginLeft = "340px";
            movinglpanel.style.borderRight = "thick solid rgba(252, 252, 252, 0)";
            movinglpanel.style.borderBottom = "thick solid rgba(252, 252, 252, 0)";
            movinglpanel.style.borderTop = "1px solid #fff";
            movinglpanel.style.borderLeft = "1px solid #fff";
            movinglpanel.style.animation = "sdb17 1.5s infinite";
            leftScroll.style.marginLeft = "-240px";
            leftscroll.style.marginLeft = "340px";
            leftscroll.style.borderRight = "thick solid rgba(252, 252, 252, 0)";
            leftscroll.style.borderBottom = "thick solid rgba(252, 252, 252, 0)";
            leftscroll.style.borderTop = "1px solid rgb(216, 32, 32)";
            leftscroll.style.borderLeft = "1px solid #fff";
            leftscroll.style.animation = "sdb19 1.5s infinite";
            project_block.style.display = "none";
            project_block1.style.display = "block";

            a = 2;
        }
        else{
            leftpanel.style.marginLeft = "86.5%";
            stoplpanel.style.marginLeft = "0px";
            stoplpanel.style.borderRight = "1px solid #fff";
            stoplpanel.style.borderBottom = "1px solid #fff";
            stoplpanel.style.borderTop = "thick solid rgba(252, 252, 252, 0)";
            stoplpanel.style.borderLeft = "thick solid rgba(252, 252, 252, 0)";
            movinglpanel.style.marginLeft = "0px";
            movinglpanel.style.borderRight = "1px solid #fff";
            movinglpanel.style.borderBottom = "1px solid #fff";
            movinglpanel.style.borderTop = "thick solid rgba(252, 252, 252, 0)";
            movinglpanel.style.borderLeft = "thick solid rgba(252, 252, 252, 0)";
            movinglpanel.style.animation = "sdb05 1.5s infinite";
            leftScroll.style.marginLeft = "86.5%";
            leftscroll.style.marginLeft = "0px";
            leftscroll.style.borderRight = "1px solid rgb(216, 32, 32)";
            leftscroll.style.borderBottom = "1px solid #fff";
            leftscroll.style.borderTop = "thick solid rgba(252, 252, 252, 0)";
            leftscroll.style.borderLeft = "thick solid rgba(252, 252, 252, 0)";
            leftscroll.style.animation = "sdb06 1.5s infinite";
            project_block.style.display = "block";
            project_block1.style.display = "none";


            a = 1; 
        }
    });
    link.addEventListener('mouseleave',e => {
        leftScroll.style.opacity = "1";
        leftpanel.style.background = "rgba(252, 252, 252, 0)";
        stoplpanel.style.opacity = "0";
        movinglpanel1.style.opacity = "0";
    });
});


const baseFolder = document.querySelectorAll("#baseFolder");
const firstSpider = document.querySelectorAll("#firstSpider");
const detailsid = document.querySelectorAll("#detailsid");
const secondSpider = document.querySelectorAll("#secondSpiderID");
const Education = document.querySelectorAll("#educationid");
const Skills = document.querySelectorAll("#skillid");
const Experience = document.querySelectorAll("#experienceid");




let basefolder = document.querySelector(".spider");
let first_spider = document.querySelector(".first_spider");
let second_spider = document.querySelector(".second_spider");
let next_folder = document.querySelector(".next_folder");
let second_folder = document.querySelector(".second_folder");
let third_folder = document.querySelector(".third_folder");
let fourth_folder = document.querySelector(".fourth_folder");
let details = document.querySelector(".details");
let experience = document.querySelector(".experience");
let education = document.querySelector(".education");
let skills = document.querySelector(".skills");
let self_details = document.querySelector(".self_details");
let Self_education = document.querySelector(".Self_education");
let self_skills = document.querySelector(".self_skills");
let self_experience = document.querySelector(".self_experience");







baseFolder.forEach(link => {
    link.addEventListener('click',e =>{
        basefolder.style.display = "none";
        first_spider.style.display = "block";
        second_spider.style.opacity = "0";
        next_folder.style.display = "block";
        self_details.style.display = "none";
        Self_education.style.display = "none";
        self_skills.style.display = "none";
        self_experience.style.display = "none";

    });
});

firstSpider.forEach(link => {
    link.addEventListener('click',e =>{
        basefolder.style.display = "block";
        first_spider.style.display = "none";
        second_spider.style.opacity = "0";
        next_folder.style.display = "none";
        self_details.style.display = "none";
        Self_education.style.display = "none";
        self_skills.style.display = "none";
        self_experience.style.display = "none";

    });
});

detailsid.forEach(link =>{
    link.addEventListener('click', e=>{
        first_spider.style.display = "block";
        second_spider.style.display = "block";
        
        second_spider.style.opacity = "1";
        next_folder.style.display = "none";  
        self_details.style.display = "block";
        Self_education.style.display = "none";
        self_skills.style.display = "none";

    });
});

Education.forEach(link=>{
    link.addEventListener('click',e=>{
        first_spider.style.display = "block";
        second_spider.style.display = "block";
        
        second_spider.style.opacity = "1";
        next_folder.style.display = "none";  
        Self_education.style.display = "block";

    });
});

Experience.forEach(link =>{
    link.addEventListener('click',e=>{
        first_spider.style.display = "block";
        second_spider.style.display = "block";
        
        second_spider.style.opacity = "1";
        next_folder.style.display = "none";  
        self_experience.style.display = "block";
    });
});

Skills.forEach(link => {
    link.addEventListener('click',e=>{
        first_spider.style.display = "block";
        second_spider.style.display = "block";
        
        second_spider.style.opacity = "1";
        next_folder.style.display = "none";  
        self_skills.style.display = "block";

    });
});

secondSpider.forEach(link=>{
    link.addEventListener('click',e=>{
        first_spider.style.display = "block";
        second_spider.style.opacity = "0";
        self_details.style.display = "none";
        Self_education.style.display = "none";
        self_skills.style.display = "none";
        self_experience.style.display = "none";

        next_folder.style.display = "block";  

    });
});

let first_a_dot1 = document.querySelector(".Achivement_dot1");
let first_a_dot2 = document.querySelector(".Achivement_dot2");
let Logo_image = document.querySelector(".Logo_image");

let progress = document.getElementById('progressbar');
var totalHeight = -(document.body.scrollHeight - window.innerHeight)*3 + 158.8;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // const ForthBlockId = document.querySelectorAll("#idForthBlock");
var forth_count = 0;
  window.onload = function () {
    window.onscroll = function () {

        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";

      if (checkVisible($('#idForthBlock')) && forth_count == 0) {
        forth_count = 1;
        // console.log("10");
        var string = "   Achievements";
        var str = string.split("");
        var el = document.getElementById('str');
        (function animate() {
        str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
        var running = setTimeout(animate, 270);
        })();
        sleep(4300)
        .then(() =>{
        if(op !==0){
            first_a_dot1.style.opacity = "1";
        }
        });
        sleep(4400)
        .then(() =>{
          var string2 = "Microsoft Certified : Azure Fundamentals";
          var str2 = string2.split("");
          var el2 = document.getElementById('str2');
          (function animate2() {
          str2.length > 0 ? el2.innerHTML += str2.shift() : clearTimeout(running2); 
          var running2 = setTimeout(animate2, 180);
          })();
        });
        sleep(12000)
        .then(() =>{
            if(op !==0){
                first_a_dot2.style.opacity = "1";
            }
        });
        sleep(12100)
        .then(() =>{
          var string3 = "Microsoft Certified : Azure Developer Associate";
          var str3 = string3.split("");
          var el3 = document.getElementById('str3');
          (function animate3() {
          str3.length > 0 ? el3.innerHTML += str3.shift() : clearTimeout(running3); 
          var running3 = setTimeout(animate3, 240);
          })();
        });
        sleep(24000)
        .then(() =>{
            Logo_image.style.opacity = "1";
        });
      }
    };
  };
