//海葵类

var aneObj=function () {
    //start point ,control point , end point(sin)
    this.rootx=[];//根部
    this.headx=[];//头部x坐标
    this.heady=[];//头部y坐标
    this.alpha=0;
    // this.len=[];

}

aneObj.prototype.num=50;
aneObj.prototype.init=function () {
    var h=can1.height;
    for(var i=0;i<this.num;i++){
        this.rootx[i]=i*16+Math.random()*20;
        this.headx[i]=this.rootx[i];
        this.heady[i]=h-250+Math.random()*50;
        // this.len[i]=90+Math.random()*50;
    }
    console.log('a');
}
aneObj.prototype.draw=function () {
    this.alpha+=deltatime*0.0008;
    var l=Math.sin(this.alpha);
    ctx2.save();
    ctx2.globalAlpha=0.6;
    ctx2.strokeStyle='#3b154e';
    ctx2.lineWidth=20;
    ctx2.lineCap="round";
    ctx2.shadowColor = "#fff";
ctx2.shadowBlur = 3;
    for(var i=0;i<this.num;i++){
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i],canH);

        this.headx[i]=this.rootx[i]+l*30;
        ctx2.quadraticCurveTo(this.rootx[i],canH-150,this.headx[i],this.heady[i]);
        ctx2.stroke();
        ctx2.closePath();
    }
    ctx2.restore();
}