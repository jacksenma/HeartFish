var momObj=function () {
    this.x;
    this.y;
    this.angle;
    // this.eye=new Image();
    this.body=new Image();
    this.tail=new Image();
    this.tailTimer=0;
    this.tailCount=0;

    this.eyeTimer=0;
    this.eyeCount=0;
    this.eyeInterval=1000;

    this.momBodyCount=0;
}

momObj.prototype.init=function () {
    this.x=canW*0.5;
    this.y=canH*0.5
    // this.eye.src="./src/bigEye0.png";
    // this.body.src="./src/bigSwim0.png";
    // this.tail.src="./src/bigTail0.png";
    this.angle=0;
}
momObj.prototype.draw=function () {
    //lerp x,y
    this.x=lerpDistance(mx,this.x,0.95);
    this.y=lerpDistance(my,this.y,0.95);

    //delta angle
    //Math.atan2(y,x);正切角arctan a
    var deltaY=my-this.y;
    var deltaX=mx-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;

    //lerp angle
    this.angle=lerpAngle(beta,this.angle,0.6);

    //tail
    this.tailTimer+=deltatime;
    if(this.tailTimer>50){
        this.tailCount=(this.tailCount+1)%8;
        this.tailTimer%=50;
    }

    //eye
    this.eyeTimer+=deltatime;
    if(this.eyeTimer>this.eyeInterval){
        this.eyeCount=(this.eyeCount+1)%2;
        this.eyeTimer%=this.eyeInterval;
        if(this.eyeCount==0){
            // console.log(this.eyeCount);
            this.eyeInterval=1500+Math.random()*1500;
        }else{
            // console.log(this.eyeCount);
            this.eyeInterval=300;
        }

    }

    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    var momBodyCounter=this.momBodyCount;
    if(data.double==1){//orange
        ctx1.drawImage(momBodyOrange[momBodyCounter],-momBodyOrange[momBodyCounter].width*0.5,-momBodyOrange[momBodyCounter].height*0.5);
    }else{
        ctx1.drawImage(momBodyBlue[momBodyCounter],-momBodyBlue[momBodyCounter].width*0.5,-momBodyBlue[momBodyCounter].height*0.5);

    }
    var tailCounter=this.tailCount;
    ctx1.drawImage(momTail[tailCounter],-momTail[tailCounter].width*0.5+30,-momTail[tailCounter].height*0.5);//先画尾巴，再画身体，最后画眼睛，因为是层层覆盖的，后画的覆盖在先画的上面
    var eyeCounter=this.eyeCount;
    // console.log(eyeCounter);
    ctx1.drawImage(momEye[eyeCounter],-momEye[eyeCounter].width*0.5,-momEye[eyeCounter].height*0.5);




    ctx1.restore();
}