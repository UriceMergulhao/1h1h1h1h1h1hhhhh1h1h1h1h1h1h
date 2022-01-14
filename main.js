x=0;
y=0;
draw_circle="";
draw_rectangle="";
var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
 

function setup(){
    canvas=createCanvas(1000,800);
}

function start(){
    document.getElementById("status").innerHTML="System is listening please speek";
    recognition.start();
}

    recognition.onresult = function(event) { console.log(event);


var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML= "The speech has been recognised as"+ content;
if(content=="circle"){
    x = Math.floor(Math.random()* 1000);
    y = Math.floor(Math.random()* 800);
    document.getElementById("status").innerHTML= "started drawing circle";
    draw_circle="set";
}


if(content=="rectangle"){
    x = Math.floor(Math.random()* 1000);
    y = Math.floor(Math.random()* 800);
    document.getElementById("status").innerHTML= "started drawing rectangle";
    draw_rectangle="set";
}
    }

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
        draw_circle="";
    }

    if(draw_rectangle=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangle is drawn";
        draw_rectangle="";
    }
}

