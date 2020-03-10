//HTML setup
var pupilsHTMLCollecion = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollecion);


console.log('pupilsArray', pupilsArray);

//Input Setup
var input = {
    mouseX:{
        start: 0,
        end: window.innerWidth,
        current: 0,
    },
    mouseY:{
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
}
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;


//Output Setup
var output = {
    x:{
        start: -100,
        end: 100,
        current: 0,
    }


}
output.x.range = output.x.end - output.x.start;




var handleMouseMove = function(event) {
    //mouseX input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start)/input.mouseX.range;

    //mouseY input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start)/input.mouseY.range;

    // X output
    output.x.current = output.x.start + (input.mouseX.fraction*output.x.range)


    this.console.log('output.x.current', output.x.current)
    // this.console.log('fraction Y', input.mouseY.fraction)
}

var handleResize = function () {
    input.mouseX.end = window.innerWidth
    input.mouseX.range = input.mouseX.end - input.mouseX.start;

    input.mouseY.end = window.innerHeight
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);


