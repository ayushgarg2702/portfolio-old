// function myFunction(x) {
//     if (x.matches) { // If media query matches
//     //   document.body.style.backgroundColor = "yellow";
//     console.log("chota");
//     }
//      else {
//     //  document.body.style.backgroundColor = "pink";
//     console.log("mota");
//     }
//   }
//   function myFunction(y) {
//     if (y.matches) { // If media query matches
//     //   document.body.style.backgroundColor = "yellow";
//     console.log("bichola");
//     }
//      else {
//     //  document.body.style.backgroundColor = "pink";
//     console.log("mota");
//     }
//   }
//   var x = window.matchMedia("(max-width: 500px)")
//   var y = window.matchMedia("(max-width: 700px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
//   y.addListener(myFunction) // Attach listener function on state changes



// <script type="text/javascript">
// var svg, originalViewBox, max20em, mq, updateViewBox;

// svg = document.querySelector('svg');

// // Store the original value in a variable 
// originalViewBox = svg.getAttribute('viewBox');

// // Define our media query and media query object 
// mq  = matchMedia("(max-width: 20em)");

// // Define the handler 
// updateViewBox = function(){
//     if (mq.matches) {
//    //      Change the viewBox dimensions to show the hexagon 
//         svg.setAttribute('viewBox', "0 0 200 174");
//     } else {
//         svg.setAttribute('viewBox', originalViewBox);
//     }
// }

// // Fire on document load 
// // WebKit/Blink browsers
// svg.onload = updateViewBox;

// // Firefox & IE
// svg.addEventListener('SVGLoad', updateViewBox, true);

// //  Fire if the media condition changes
// mq.addListener(updateViewBox);            

// </script>


var my_skills = document.querySelector(".my-skills")
var Myproject_500 = document.querySelector(".my-projects")
var intro = document.querySelector(".Intro")
var intro1 = document.querySelector(".Intro1")
var intro2 = document.querySelector(".Intro2")
var intro3 = document.querySelector(".Intro3")
var First_Block = document.querySelector(".First_Block")
var second_block_500 = document.querySelector(".second_block")
var third_block_500 = document.querySelector(".third_block")
var forth_block_500 = document.querySelector(".forth_block")

var project_detail_500 = document.querySelector(".project-detail")
var third_forth_block_500 = document.querySelector(".third_forth_block")
var Logo_image_500 = document.querySelector(".Logo_image")

var Achivement_dot1 = document.querySelector(".Achivement_dot1");
var Achivement_dot2 = document.querySelector(".Achivement_dot2");
var HTML = document.querySelector(".HTML");

var op = 1;
var pl = 1;
var container = document.querySelector(".container")
var birds = document.querySelector(".birds")
var preloder = document.querySelector(".preloder")
var cursor = document.querySelector(".cursor")
var cursor_follow_500 = document.querySelector(".cursor_follow")
var cursor_follow1_500 = document.querySelector(".cursor_follow1")
var cursor_follow4_500 = document.querySelector(".cursor_follow4")

var welcome_border_1_500 = document.querySelector(".welcome-border-1")
var welcome_border_500 = document.querySelector(".welcome-border")
var myself_500 = document.querySelector(".myself")

var str_500 = document.querySelector("#str")
var str2_500 = document.querySelector("#str2")
var str3_500 = document.querySelector("#str3")
var P_loading_500 = document.querySelector(".p_loading")
var ResumeDownoad_500 = document.querySelector(".ResumeDownoad")
var Second_b_downscroll = document.querySelector(".downscroll")
var fourth_block_animation = document.querySelector(".circles")

var mqls = [ // list of window.matchMedia() queries
    window.matchMedia("(max-width: 990px)"),
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 500px)"),
    window.matchMedia("(min-width: 500px)"),
    window.matchMedia("(min-width: 990px)"),
    window.matchMedia("(max-width: 1342px)")
]

window.onresize = function(){
    
    if(!(mqls[4].matches)){
        preloder.style.display = 'none';
        First_Block.style.width =  window.innerWidth+'px';
        second_block_500.style.width = window.innerWidth+'px';
        third_block_500.style.width = window.innerWidth+'px';
        forth_block_500.style.width = window.innerWidth+'px';
        // container.style.marginLeft = window.innerWidth/5+'px';
        container.style.marginTop =-(698 - window.innerHeight + 30)+'px';
        welcome_border_1_500.style.height = '50px';
        welcome_border_1_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_1_500.style.font = '8px "Source Sans Pro", Arial, Helvetica, sans-serif';
        welcome_border_1_500.style.left = window.innerWidth*.12 + 'px';
        myself_500.style.marginRight = window.innerHeight*0.1 + 'px';
        myself_500.style.fontSize = '16px';

        Logo_image_500.style.top=(window.innerHeight)*.3+'px';
        Logo_image_500.style.left=(window.innerWidth)*.7+'px';
        // Logo_image_500.style.height=(window.innerHeight)*.2+'px';
        // Logo_image_500.style.width=(window.innerWidth)*.2+'px';


        str_500.style.fontSize = '22px';
        str_500.style.marginLeft = (window.innerWidth)*.05+'px';
        str_500.style.marginTop = (window.innerWidth)*.15+'px';

        str2_500.style.width =(window.innerWidth)*.7+'px';
        str2_500.style.fontSize = '16px';
        str2_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str2_500.style.marginTop = -(window.innerWidth)*.02+'px';
        
        str3_500.style.width =(window.innerWidth)*.7+'px';
        str3_500.style.fontSize = '16px';
        str3_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str3_500.style.marginTop = -(window.innerWidth)*.05+'px';
        Achivement_dot1.style.opacity = '0';
        Achivement_dot2.style.opacity = '0';
        op = 0;
    }
    else if (!(mqls[3].matches)){
        // Achivement_dot1.style.opacity = '1';
        op = 1;

        First_Block.style.width =  window.innerWidth+'px';
        second_block_500.style.width = window.innerWidth+'px';
        third_block_500.style.width = window.innerWidth+'px';
        forth_block_500.style.width = window.innerWidth+'px';

        container.style.marginTop =-(698 - window.innerHeight + 30)+'px';
        welcome_border_1_500.style.height = '45px';
        welcome_border_1_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_1_500.style.left = window.innerWidth*.12 + 'px';

        welcome_border_1_500.style.font = '5px "Source Sans Pro", Arial, Helvetica, sans-serif';
        
        welcome_border_500.style.height = '45px';
        welcome_border_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_500.style.font = '5px "Source Sans Pro", Arial, Helvetica, sans-serif';

        myself_500.style.marginRight = window.innerHeight*0.1 + 'px';
        myself_500.style.fontSize = '16px';

        welcome_border_500.style.left =(window.innerWidth)*.15+'px';
        welcome_border_500.style.top =(-120-(window.innerWidth)/2)+'px';

        str_500.style.fontSize = '22px';
        str_500.style.marginLeft = (window.innerWidth)*.05+'px';
        str_500.style.marginTop = (window.innerWidth)*.15+'px';

        str2_500.style.width =(window.innerWidth)*.7+'px';
        str2_500.style.fontSize = '16px';
        str2_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str2_500.style.marginTop = -(window.innerWidth)*.05+'px';
        
        str3_500.style.width =(window.innerWidth)*.7+'px';
        str3_500.style.fontSize = '16px';
        str3_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str3_500.style.marginTop = -(window.innerWidth)*.05+'px';

        Logo_image_500.style.top=(window.innerHeight)*.4+'px';
        Logo_image_500.style.left=(window.innerWidth)*.7+'px';
        Logo_image_500.style.height=(window.innerHeight)*.2+'px';
        Logo_image_500.style.width=(window.innerWidth)*.2+'px';
        if (window.innerHeight > 500){
            forth_block_500.style.height = window.innerHeight+'px';
            // third_block_500.style.height = window.innerHeight+'px';


        }
        else{
            forth_block_500.style.height = 550+'px';

            // second_block_500.style.height = 550+'px';
            // third_block_500.style.height = 550+'px';
        }
        
    }
    else{
        // container.style.marginTop =-(698 - window.innerHeight + 30)+'px';
        ;
    }

}
// console.log(window.innerWidth);

 
function mediaqueryresponse(mql){
    // console.log(mqls[0].matches);
    // console.log(mqls[1].matches);
    // console.log(mqls[2].matches);

    if(mqls[5].matches && mqls[4].matches){
        HTML.style.overflowX = 'visible';
    }
    else{
        HTML.style.overflowX = 'hidden';

    }

    if(mqls[2].matches){
        Second_b_downscroll.style.display='none';
        ResumeDownoad_500.style.display = 'none';
        preloder.style.display = 'none';
        Myproject_500.style.display='block';
        Myproject_500.style.height = window.innerHeight+'px';
        my_skills.style.display = 'block';
        // Achivement_dot1.style.opacity = '1';
        op = 1;
        if(pl === 1){
            P_loading_500.style.display = 'block';
            P_loading_500.style.marginTop = window.innerHeight/2.5+'px';
            P_loading_500.style.marginLeft = window.innerWidth/4+'px';
        }

        // First_Block.style.width = '500px';
        First_Block.style.width =  window.innerWidth+'px';
        second_block_500.style.width = window.innerWidth+'px';
        third_block_500.style.width = window.innerWidth+'px';
        forth_block_500.style.width = window.innerWidth+'px';

        
        myself_500.style.marginRight = window.innerHeight*0.1 + 'px';
        myself_500.style.fontSize = '16px';

        
        welcome_border_1_500.style.height = '45px';
        welcome_border_1_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_1_500.style.font = '5px "Source Sans Pro", Arial, Helvetica, sans-serif';
        welcome_border_1_500.style.left = window.innerWidth*.12 + 'px';
        


        welcome_border_500.style.display='block';

        welcome_border_500.style.height = '45px';
        welcome_border_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_500.style.font = '5px "Source Sans Pro", Arial, Helvetica, sans-serif';
        
        welcome_border_500.style.left =(window.innerWidth)*.15+'px';
        welcome_border_500.style.top =(-120-(window.innerWidth)/2)+'px';

        // welcome_border_500.style.top = '-17.5rem';
        
        
        // str_500.style.width = (window.innerWidth)*.9+'%';
        str_500.style.fontSize = '22px';
        str_500.style.marginLeft = (window.innerWidth)*.05+'px';
        str_500.style.marginTop = (window.innerWidth)*.15+'px';

        str2_500.style.width =(window.innerWidth)*.7+'px';
        str2_500.style.fontSize = '16px';
        str2_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str2_500.style.marginTop = -(window.innerWidth)*.05+'px';
        
        str3_500.style.width =(window.innerWidth)*.7+'px';
        str3_500.style.fontSize = '16px';
        str3_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str3_500.style.marginTop = -(window.innerWidth)*.05+'px';

        if (window.innerHeight > 500){
            First_Block.style.height = window.innerHeight+'px';
            forth_block_500.style.height = window.innerHeight+'px';
            // third_block_500.style.height = window.innerHeight+'px';


        }
        else{
            First_Block.style.height = 550+'px';
            forth_block_500.style.height = 550+'px';

            // second_block_500.style.height = 550+'px';
            // third_block_500.style.height = 550+'px';
        }
        // console.log(window.innerHeight+'px');
        intro.style.animationName = 'move1_500';
        intro.style.fontSize = '1.2rem';
        intro1.style.fontSize = '1.2rem';
        intro2.style.fontSize = '1.2rem';
        intro3.style.fontSize = '1.2rem';

        intro1.style.animationName = 'move_500';
        intro2.style.animationName = 'move2_500';
        intro3.style.animationName = 'move3_500';
        container.style.marginLeft = '2rem';
        // container.style.textAlign= 'center';

        
        container.style.marginTop =-(698 - window.innerHeight + 30)+'px';
        birds.style.display = 'none';
        cursor.style.display = 'none';
        cursor_follow_500.style.display = 'none';
        cursor_follow1_500.style.display = 'none';
        cursor_follow4_500.style.display = 'none';

        third_forth_block_500.style.display = 'none';
        // runner_500.style.display = 'none';
        // leftScroll_500.style.display = 'none';
        third_block_500.style.display = 'none';

        Logo_image_500.style.top=(window.innerHeight)*.4+'px';
        Logo_image_500.style.left=(window.innerWidth)*.7+'px';
        Logo_image_500.style.height='80px';
        Logo_image_500.style.width='80px';
        totalHeight = -(document.body.scrollHeight - window.innerHeight)*6 - 150;

        fourth_block_animation.style.top="-70vh";




    }
    else if(mqls[0].matches){
        Second_b_downscroll.style.display='none';
        fourth_block_animation.style.top="-80vh";

        // console.log("10");
        Myproject_500.style.display='block';
        Myproject_500.style.height = window.innerHeight+'px';
        my_skills.style.display = 'block';

        if(pl === 1){
            P_loading_500.style.display = 'block';
            P_loading_500.style.marginTop = window.innerHeight/2.5+'px';
            P_loading_500.style.marginLeft = window.innerWidth/4+'px';
        }
        ResumeDownoad_500.style.display = 'none';


        preloder.style.display = 'none';
        // Achivement_dot1.style.opacity = '0';
        op = 0;

        First_Block.style.width =  window.innerWidth+'px';
        second_block_500.style.width = window.innerWidth+'px';
        third_block_500.style.width = window.innerWidth+'px';
        forth_block_500.style.width = window.innerWidth+'px';
        third_forth_block_500.style.display = 'none';
        third_block_500.style.display = 'none';

        
        intro.style.fontSize = '1.3rem';
        intro1.style.fontSize = '1.3rem';
        intro2.style.fontSize = '1.3rem';
        intro3.style.fontSize = '1.3rem';
        intro3.style.animationName = 'move3_500';
        intro2.style.animationName = 'move2_500';
        intro1.style.animationName = 'move_500';
        intro.style.animationName = 'move1_500';

        container.style.marginLeft = window.innerWidth/6+'px';
        container.style.marginTop =-(698 - window.innerHeight + 30)+'px';
        // container.style.marginTop ='0px';
        // console.log(window.innerHeight);
        if (window.innerHeight > 500){
            First_Block.style.height = window.innerHeight+'px';
            forth_block_500.style.height = window.innerHeight+'px';
            // third_block_500.style.height = window.innerHeight+'px';
        }
        else{
            First_Block.style.height = 550+'px';
            forth_block_500.style.height = 550+'px';
            // second_block_500.style.height = 550+'px';
            // third_block_500.style.height = 550+'px';
        }
        birds.style.display = 'none';
        cursor.style.display = 'none';
        cursor_follow_500.style.display = 'none';
        cursor_follow1_500.style.display = 'none';
        cursor_follow4_500.style.display = 'none';
        Logo_image_500.style.top=(window.innerHeight)*.3+'px';
        Logo_image_500.style.left=(window.innerWidth)*.7+'px';
        Logo_image_500.style.height=(window.innerHeight)*.2+'px';
        Logo_image_500.style.width=(window.innerWidth)*.2+'px';

        welcome_border_1_500.style.height = '48px';
        welcome_border_1_500.style.width = window.innerWidth*.75 + 'px';
        welcome_border_1_500.style.font = '8px "Source Sans Pro", Arial, Helvetica, sans-serif';
        welcome_border_1_500.style.left = window.innerWidth*.12 + 'px';
       
        welcome_border_500.style.display='none';
        myself_500.style.marginRight = window.innerHeight*0.1 + 'px';
        myself_500.style.fontSize = '16px';

        str_500.style.fontSize = '22px';
        str_500.style.marginLeft = (window.innerWidth)*.05+'px';
        str_500.style.marginTop = (window.innerWidth)*.15+'px';

        str2_500.style.width =(window.innerWidth)*.7+'px';
        str2_500.style.fontSize = '16px';
        str2_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str2_500.style.marginTop = -(window.innerWidth)*.02+'px';
        
        str3_500.style.width =(window.innerWidth)*.7+'px';
        str3_500.style.fontSize = '16px';
        str3_500.style.marginLeft = (window.innerWidth)*.25+'px';
        str3_500.style.marginTop = -(window.innerWidth)*.05+'px';
        totalHeight = -(document.body.scrollHeight - window.innerHeight)*6- 150;
    }
    else{
        // Achivement_dot1.style.opacity = '1';
        // console.log("1");
        op = 1;
        fourth_block_animation.style.top="-100vh";
        Second_b_downscroll.style.display='block';

        ResumeDownoad_500.style.display = 'block';
        my_skills.style.display = 'none';

        totalHeight = -(document.body.scrollHeight - window.innerHeight)*3 + 158.8;
        P_loading_500.style.display = 'none';
        if(pl === 1){
            preloder.style.display = 'block';
        }
        Myproject_500.style.display='none';

        First_Block.style.width = '100rem';
        First_Block.style.height = '50rem';
        second_block_500.style.width = '100rem';
        second_block_500.style.height = '50rem';
        third_block_500.style.width = '100rem';
        third_block_500.style.height = '50rem';
        forth_block_500.style.width = '100rem';
        forth_block_500.style.height = '50rem';
        intro.style.animationName = 'move1';
        intro.style.fontSize = '1.5rem';
        intro1.style.fontSize = '1.5rem';
        intro2.style.fontSize = '1.5rem';
        intro3.style.fontSize = '1.5rem';
        intro1.style.animationName = 'move';
        intro2.style.animationName = 'move2';
        intro3.style.animationName = 'move3';
        container.style.marginLeft = '14rem';
        container.style.marginTop = '0rem';
        container.style.marginTop ='0rem';

        birds.style.display = 'block';
        cursor.style.display = 'block';
        third_forth_block_500.style.display = 'block';
        // runner_500.style.display = 'block';
        // leftScroll_500.style.display = 'block';
        third_block_500.style.display = 'block';


        cursor_follow_500.style.display = 'block';
        cursor_follow1_500.style.display = 'block';
        cursor_follow4_500.style.display = 'block';
        welcome_border_500.style.display='block';

        welcome_border_1_500.style.height = '80px';
        welcome_border_500.style.height = '80px';
        welcome_border_1_500.style.left = '4rem';

        welcome_border_1_500.style.width = '40rem';
        welcome_border_500.style.width = '40rem';

        welcome_border_1_500.style.font = '13px "Source Sans Pro", Arial, Helvetica, sans-serif';
        welcome_border_500.style.font = '13px "Source Sans Pro", Arial, Helvetica, sans-serif';
        
        myself_500.style.marginRight = '45rem';
        myself_500.style.fontSize = '1.5rem';
        welcome_border_500.style.left ='25rem';
        welcome_border_500.style.top ='-7.5rem';



        str_500.style.fontSize = '40px';
        str_500.style.marginLeft = '35px';
        str_500.style.marginTop = '50px';

        str2_500.style.width ='800px';
        str2_500.style.fontSize = '25px';
        str2_500.style.marginLeft = '90px';
        str2_500.style.marginTop = '-1.rem';
        
        str3_500.style.width ='800px';
        str3_500.style.fontSize = '25px';
        str3_500.style.marginLeft = '90px';
        str3_500.style.marginTop = '-1.5rem';


        Logo_image_500.style.top='24rem';
        Logo_image_500.style.left='80rem';
        Logo_image_500.style.height='90%';
        Logo_image_500.style.width='90%';
    }

    // document.getElementById("match1").innerHTML = mqls[0].matches // width: 860px media match?
    // document.getElementById("match2").innerHTML = mqls[1].matches // width: 600px media match?
    // document.getElementById("match3").innerHTML = mqls[2].matches // height: 500px media match?
}
 
for (var i=0; i<mqls.length; i++){ // loop through queries
    mediaqueryresponse(mqls[i]) // call handler function explicitly at run time
    mqls[i].addListener(mediaqueryresponse) // call handler function whenever the media query is triggered
}

