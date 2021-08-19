var All = document.querySelector(".ALL");
All.style.display = "none";

var j = 0;
let xs = []
for (var i = 0; i <= 500; i++) {
xs.push(i)
}

let t = 0

function animate() {

let points = xs.map(x => {
    
    let y = 45+20 * Math.sin((x + t) / 60)
    
    return [x, y]
})

let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
}).join(" L")

document.querySelector(".path1").setAttribute("d", path)
document.querySelector(".path2").setAttribute("d", path)
document.querySelector(".path3").setAttribute("d", path)

t -= 4
j++;
if(j <= 90){
    requestAnimationFrame(animate)
}
}

var j4 = 0;
let t4 = 0
function animate4() {

let points = xs.map(x => {
    
    let y = 45+20 * Math.sin((x + t4) / 60)
    
    return [x, y]
})

let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
}).join(" L")

document.querySelector(".path1").setAttribute("d", path)
document.querySelector(".path2").setAttribute("d", path)
document.querySelector(".path3").setAttribute("d", path)

t4 += 4
j4++;
if(j4 <= 90){
    requestAnimationFrame(animate4)
}
}

var j2 = 0;
let xs2 = []
for (var i = 0; i <= 500; i++) {
xs2.push(i)
}

let t2 = 0

function animate2() {

let points = xs2.map(x => {
    
    let y = 45+20 * Math.sin((x + t2) / 60)
    
    return [x, y]
})

let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
}).join(" L")

document.querySelector(".path4").setAttribute("d", path)
document.querySelector(".path5").setAttribute("d", path)
document.querySelector(".path6").setAttribute("d", path)
}

function animate1() {

let points = xs2.map(x => {
    
    let y = 45+20 * Math.sin((x + t2) / 60)
    
    return [x, y]
})

let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
}).join(" L")

document.querySelector(".path4").setAttribute("d", path)
document.querySelector(".path5").setAttribute("d", path)
document.querySelector(".path6").setAttribute("d", path)

t2 -= 4
j2++;
if(j2 <= 90){
    requestAnimationFrame(animate1)
}

}


let t3 = 0
var j3 = 0;

function animate5() {

let points = xs2.map(x => {
    
    let y = 45+20 * Math.sin((x + t3) / 60)
    
    return [x, y]
})

let path = "M" + points.map(p => {
    return p[0] + "," + p[1]
}).join(" L")

document.querySelector(".path4").setAttribute("d", path)
document.querySelector(".path5").setAttribute("d", path)
document.querySelector(".path6").setAttribute("d", path)

t3 += 4
j3++;
if(j3 <= 90){
    requestAnimationFrame(animate5)
}

}






animate()
animate2()


var delayInMilliseconds = 1500;

setTimeout(function() {
    animate1()
}, delayInMilliseconds);

setTimeout(function() {
    t2 = 0;
    j = 0;
    animate5()
},3000);

setTimeout(function() {
    t2 = 0;
    j = 0;
    animate4()
},4500);

setTimeout(function() {
    var element = document.querySelector(".preloder");
    var element2 = document.querySelector(".p_loading");
    element2.style.display = "none";
    element.style.display = "none";

    All.style.display = "block";
    allff.style.opacity='0';
    pl = 0;

},6100);










const gambitGalleryIsInView = el => {
	const scroll = window.scrollY || window.pageYOffset
	const boundsTop = el.getBoundingClientRect().top + scroll
	
	const viewport = {
		top: scroll,
		bottom: scroll + window.innerHeight,
	}
	
    const bounds = {
		top: boundsTop,
		bottom: boundsTop + el.clientHeight,
	}
	
	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
		|| ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}

let allairflies_count = 0;
// Usage.
document.addEventListener( 'DOMContentLoaded', () => {
	const tester = document.querySelector( '.second_block' )
// 	const answer = document.querySelector( '.answer' )
	
	const handler = () => raf( () => {
    if( gambitGalleryIsInView( tester )) {allairflies_count++; if(allairflies_count)allff.style.opacity='1'; }
    else {allff.style.opacity='0'; }
	} )
    // console.log(gambitGalleryIsInView( tester ));
	handler()
	window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf = 
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
        window.setTimeout( callback, 1000 / 60 )
    }




    // $(function() {
    //     $('a[href*=#]').on('click', function(e) {
    //       e.preventDefault();
    //       $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    //     });
    //   });