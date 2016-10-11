var can1,can2,ctx1,ctx2;

var canW,canH;
var lasttime;
var deltatime;
var fruit;
var mom;
var baby;
var bgPic=new Image();
var mx,my;

var babyTail=[];
var babyEye=[];
var babyBody=[];

var momTail=[];
var momEye=[];
var momBodyOrange=[];
var momBodyBlue=[];


var data;
var wave;
var dustp=[];
var dust;
document.body.onload=game;
function game() {
    init();
    lasttime=Date.now();
    deltatime=0;
    gameloop();

}


function init() {

    //获得canvas
     can1=document.getElementById('canvas1');//fishes,dust,ui,circle
     ctx1=can1.getContext('2d');
     can2=document.getElementById('canvas2');//background,ane,fruits
     ctx2=can2.getContext('2d');
     can1.addEventListener('mousemove',onMouseMove,false);


    ctx1.font="30px Verdana";
    ctx1.textAlign="center";
    bgPic.src="./src/background.jpg";
    canW=can1.width;
    canH=can1.height;
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    mom=new momObj();
    mom.init();
    baby=new babyObj();
    baby.init();

    mx=canW*0.5;
    my=canH*0.5;
    data=new dataObj();
    for(var i=0;i<8;i++){
        babyTail[i]=new Image();
        babyTail[i].src="./src/babyTail"+i+".png";
        momTail[i]=new Image();
        momTail[i].src="./src/bigTail"+i+".png";
        momBodyOrange[i]=new Image();
        momBodyOrange[i].src="./src/bigSwim"+i+".png";
        momBodyBlue[i]=new Image();
        momBodyBlue[i].src="./src/bigSwimBlue"+i+".png";


    }
    for(var i=0;i<2;i++){
        babyEye[i]=new Image();
        babyEye[i].src="./src/babyEye"+i+".png";
        momEye[i]=new Image();
        momEye[i].src="./src/bigEye"+i+".png";
    }
    for(var i=0;i<20;i++){
        babyBody[i]=new Image();
        babyBody[i].src="./src/babyFade"+i+".png";
    }
    // for(var i=0;i<8;i++){
    //
    // }

    wave=new　waveObj();
    wave.init();

    //dust
    for(var i=0;i<7;i++){
        dustp[i]=new Image();
        dustp[i].src="./src/dust"+i+".png";
    }

    dust=new　dustObj();
    dust.init();


}

function gameloop() {
    requestAnimationFrame(gameloop);
    ctx2.clearRect(0,0,canW,canH);
    var now=Date.now();
    deltatime=now-lasttime;//每次gameloop的时间
    lasttime=now;
    if(deltatime>50) deltatime=50;
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();
    ctx1.clearRect(0,0,canW,canH);
    mom.draw();
    baby.draw();
    momAndFruit();
    momBabyCollision();
    data.draw();
    wave.draw();
    dust.draw();

}
function onMouseMove(e) {
    if(!data.gameover){
    if(e.layerX||e.offsetX){
        mx=e.offsetX==undefined?e.layerX:e.offsetX;
        my=e.offsetY==undefined?e.layerY:e.offsetY;
        // console.log(mx);

    }
}
}